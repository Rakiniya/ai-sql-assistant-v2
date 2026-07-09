def validate_sql(sql):

    sql = sql.strip().upper()

    forbidden = [
        "INSERT",
        "UPDATE",
        "DELETE",
        "DROP",
        "ALTER",
        "TRUNCATE",
        "CREATE"
    ]

    for keyword in forbidden:
        if keyword in sql:
            return False

    return sql.startswith("SELECT") or sql.startswith("WITH")