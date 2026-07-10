import { useState } from "react";
import api from "../services/api";

function FileUpload({ onUploadSuccess }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("✅ File uploaded successfully!");
      onUploadSuccess(response.data);

    } catch (error) {
      console.error(error);
      setMessage("❌ Upload failed!");
    }

    setUploading(false);
  };

  return (
  <div
    style={{
      background: "white",
      borderRadius: "12px",
      padding: "25px",
      marginBottom: "25px",
      boxShadow: "0 2px 10px rgba(0,0,0,.1)",
    }}
  >
    <h2>📂 Upload Dataset</h2>

    <input
      type="file"
      accept=".csv,.xlsx,.xls"
      onChange={(e) => setFile(e.target.files[0])}
    />

    <br />
    <br />

    <button
      onClick={uploadFile}
      style={{
        background: "#2563EB",
        color: "white",
        border: "none",
        padding: "10px 25px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Upload
    </button>

    <p>{message}</p>
  </div>
);
}

export default FileUpload;