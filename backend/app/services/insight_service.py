def generate_insight(result):

    if not result:
        return "No records were found."

    insight = []

    insight.append(f"Total records returned: {len(result)}")

    first = result[0]

    for key, value in first.items():
        if isinstance(value, (int, float)):
            insight.append(f"Highest {key}: {value}")
            break

    if len(first) > 0:
        first_column = list(first.keys())[0]
        insight.append(
            f"Top {first_column}: {first[first_column]}"
        )

    return "\n".join(insight)