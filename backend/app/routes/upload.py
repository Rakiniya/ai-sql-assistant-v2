from fastapi import APIRouter, UploadFile, File
import os
import shutil
import pandas as pd

from app.services.db_service import create_table, insert_data

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):

    # Save uploaded file
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Read CSV or Excel
    if file.filename.endswith(".csv"):
        df = pd.read_csv(file_path)

    elif file.filename.endswith((".xlsx", ".xls")):
        df = pd.read_excel(file_path)

    else:
        return {"error": "Only CSV and Excel files are allowed."}

    # Convert table name to lowercase
    table_name = (
        os.path.splitext(file.filename)[0]
        .replace("-", "_")
        .replace(" ", "_")
        .lower()
    )

    # Convert column names to lowercase
    df.columns = (
        df.columns.str.strip()
        .str.replace(" ", "_")
        .str.replace("-", "_")
        .str.lower()
    )

    # Create table
    create_table(table_name, df)

    # Insert data
    insert_data(table_name, df)

    # Detect schema
    schema = {}

    for column in df.columns:
        schema[column] = str(df[column].dtype)

    return {
        "message": "File uploaded successfully",
        "table_name": table_name,
        "rows": len(df),
        "columns": list(df.columns),
        "schema": schema
    }