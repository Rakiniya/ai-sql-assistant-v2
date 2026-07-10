import re

ALLOWED = ("select", "with")

BLOCKED = [
    "drop",
    "delete",
    "update",
    "insert",
    "alter",
    "truncate",
    "create",
    "grant",
    "revoke",
    "execute",
    "exec",
    "merge",
    "call"
]


def validate_sql(sql: str) -> bool:
    if not sql:
        return False

    sql = sql.strip().lower()

    sql = re.sub(r'--.*', '', sql)
    sql = re.sub(r'/\*.*?\*/', '', sql, flags=re.S)
    sql = sql.strip()          # <-- add this line

    if not sql.startswith(ALLOWED):
        return False

    for keyword in BLOCKED:
        if re.search(rf"\b{keyword}\b", sql):
            return False

    return True