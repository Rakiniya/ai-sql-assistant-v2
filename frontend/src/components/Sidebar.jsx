import {
 FaUpload,
 FaComments,
 FaHistory,
 FaChartBar
} from "react-icons/fa";

function Sidebar() {
  return (
    <div
      style={{
        width: "230px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        paddingTop: "20px"
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Dashboard
      </h2>

      <div style={{ padding: 20 }}>

        <p><FaUpload /> Upload Dataset</p>

        <p><FaComments /> Ask AI</p>

        <p><FaHistory /> History</p>

        <p><FaChartBar /> Analytics</p>

      </div>

    </div>
  );
}

export default Sidebar;