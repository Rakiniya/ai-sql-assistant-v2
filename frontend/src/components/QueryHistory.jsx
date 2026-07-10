function QueryHistory({ history }) {
  if (history.length === 0) return null;

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
      }}
    >
      <h2>🕘 Query History</h2>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default QueryHistory;