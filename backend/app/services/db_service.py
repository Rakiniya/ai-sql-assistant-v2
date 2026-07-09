from sqlalchemy import text
from app.models.database import engine


def create_table(table_name, dataframe):

    columns = []

    for column, dtype in dataframe.dtypes.items():

        if "int" in str(dtype):
            sql_type = "INTEGER"

        elif "float" in str(dtype):
            sql_type = "FLOAT"

        elif "datetime" in str(dtype):
            sql_type = "TIMESTAMP"

        else:
            sql_type = "TEXT"

        columns.append(f'{column} {sql_type}')

    query = f"""
    CREATE TABLE IF NOT EXISTS "{table_name}" (
        id SERIAL PRIMARY KEY,
        {", ".join(columns)}
    );
    """

    with engine.begin() as conn:
        conn.execute(text(query))


def insert_data(table_name, dataframe):

    with engine.begin() as conn:

        for _, row in dataframe.iterrows():

            columns = ', '.join(dataframe.columns)

            values = ', '.join([f':{col}' for col in dataframe.columns])

            query = text(
                f'INSERT INTO "{table_name}" ({columns}) VALUES ({values})'
            )

            conn.execute(query, row.to_dict())

from sqlalchemy import text

def execute_query(sql):

    with engine.begin() as conn:

        result = conn.execute(text(sql))

        rows = result.fetchall()

        columns = result.keys()

        data = []

        for row in rows:
            data.append(dict(zip(columns, row)))

        return data            