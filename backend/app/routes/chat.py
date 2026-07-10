from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.ai_service import generate_sql, generate_insight
from app.services.db_service import execute_query
from app.utils.sql_validator import validate_sql


router = APIRouter()


class ChatRequest(BaseModel):
    question: str
    table_name: str
    columns: list


@router.post("/chat")
def chat(request: ChatRequest):

    try:
        sql = generate_sql(
            request.question,
            request.table_name,
            request.columns
        )

        sql = sql.replace("```sql", "").replace("```", "").strip()


        if not validate_sql(sql):
            raise HTTPException(
                status_code=400,
                detail="AI generated an unsafe SQL query."
            )

        result = execute_query(sql)
        insight = generate_insight(
    request.question,
    result
)
    
    


        return {
    "question": request.question,
    "sql": sql,
    "result": result,
    "insight": insight
}

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"AI Error: {str(e)}"
        )