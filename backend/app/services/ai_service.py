import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_sql(question, table_name, columns):

    prompt = f"""
You are an expert PostgreSQL SQL generator.

Table Name:
{table_name}

Columns:
{', '.join(columns)}

Rules:
- Use ONLY the table name exactly as provided.
- Use ONLY the columns listed above.
- Never invent columns.
- Generate ONLY PostgreSQL SELECT queries.
- Return SQL only.
"""

    response = model.generate_content(prompt)

    return response.text.strip()