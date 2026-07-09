import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


def generate_sql(question, table_name, columns):

    prompt = f"""
You are an expert PostgreSQL SQL generator.

Database Table:
{table_name}

Available Columns:
{', '.join(columns)}

Rules:
1. Use ONLY the table name: {table_name}
2. Use ONLY the columns listed above.
3. Never invent column names.
4. Generate ONLY PostgreSQL SELECT queries.
5. Return ONLY SQL. Do not explain anything.
6. Use LIMIT when the user asks for top records.
7. If the question cannot be answered with the available columns, return:
   ERROR: Required column not found.

User Question:
{question}
"""

    response = model.generate_content(prompt)

    return response.text.strip()