import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function ExportButtons({ data }) {
  if (!data || data.length === 0) return null;

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);

    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Results");

    XLSX.writeFile(wb, "query_results.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [Object.keys(data[0])],
      body: data.map(Object.values),
    });

    doc.save("query_results.pdf");
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <button
        onClick={exportExcel}
        style={{
          marginRight: 10,
          background: "#059669",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Export Excel
      </button>

      <button
        onClick={exportPDF}
        style={{
          background: "#DC2626",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Export PDF
      </button>
    </div>
  );
}

export default ExportButtons;