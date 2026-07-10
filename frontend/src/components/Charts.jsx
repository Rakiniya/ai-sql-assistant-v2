import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function Charts({ data }) {

  if (!data || data.length === 0) {
    return null;
  }

  const keys = Object.keys(data[0]);

  const labelKey = keys.find(
    key => typeof data[0][key] === "string"
  );

  const valueKey = keys.find(
    key => typeof data[0][key] === "number"
  );

  if (!labelKey || !valueKey) {
    return (
      <p style={{ marginTop: 20 }}>
        No chart can be generated for this query.
      </p>
    );
  }

  return (
    <div style={{ marginTop: 30 }}>

      <h2>📊 Data Visualization</h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={labelKey} />

          <YAxis />

          <Tooltip />

          <Bar dataKey={valueKey} />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default Charts;