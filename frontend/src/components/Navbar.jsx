import { FaDatabase } from "react-icons/fa";

function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#1E3A8A",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        fontSize: "24px",
        fontWeight: "bold",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)"
      }}
    >
      <FaDatabase style={{ marginRight: 10 }} />
      AI SQL Assistant
    </div>
  );
}

export default Navbar;