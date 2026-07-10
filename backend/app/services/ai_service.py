import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def generate_sql(question, table_name, columns):

    prompt = f"""
You are an expert PostgreSQL SQL generator.

Database Table:
{table_name}

Available Columns:
{', '.join(columns)}

Rules:
1. Use ONLY the table name: {table_name}
2. Use ONLY the columns above.
3. Never invent columns.
4. Generate ONLY PostgreSQL SELECT queries.
5. Return ONLY SQL.
6. Use LIMIT for top records.
7. If impossible, return:
ERROR: Required column not found.

User Question:
{question}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0
    )

    return response.choices[0].message.content.strip()


def generate_insight(question, result):

    prompt = f"""
You are a data analyst.

Question:
{question}

Result:
{result}

Give a business insight in 3-5 lines.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3
    )

    return response.choices[0].message.content.strip()

