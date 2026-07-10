function ResultTable({ data }) {

  if (!data || data.length === 0) {
    return <p>No data found.</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px"
      }}
    >
      <thead>
        <tr>
          {columns.map(col => (
            <th
              key={col}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                background: "#2563eb",
                color: "white"
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map(col => (
              <td
                key={col}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px"
                }}
              >
                {String(row[col])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>
  );
}

export default ResultTable;