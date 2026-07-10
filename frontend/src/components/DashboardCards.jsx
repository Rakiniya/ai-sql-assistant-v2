function DashboardCards({ dataset, history }) {

  if (!dataset) return null;

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginBottom: "25px"
      }}
    >

      <Card
        title="Rows"
        value={dataset.rows}
      />

      <Card
        title="Columns"
        value={dataset.columns.length}
      />

      <Card
        title="Table"
        value={dataset.table_name}
      />

      <Card
        title="Queries"
        value={history.length}
      />

    </div>

  );
}

function Card({ title, value }) {

  return (

    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)"
      }}
    >

      <h3>{title}</h3>

      <h1>{value}</h1>

    </div>

  );
}

export default DashboardCards;