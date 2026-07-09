from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.ai_service import generate_sql
from app.services.db_service import execute_query
from app.utils.sql_validator import validate_sql

router = APIRouter()


class ChatRequest(BaseModel):
    question: str
    table_name: str
    columns: list


@router.post("/chat")
def chat(request: ChatRequest):

    sql = generate_sql(
        request.question,
        request.table_name,
        request.columns
    )

    # Remove markdown if Gemini returns ```sql ... ```
    sql = sql.replace("```sql", "").replace("```", "").strip()

    if not validate_sql(sql):
        raise HTTPException(
            status_code=400,
            detail="Unsafe SQL generated."
        )

    result = execute_query(sql)

    return {
        "question": request.question,
        "sql": sql,
        "result": result
    }