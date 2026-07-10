import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardCards from "./components/DashboardCards";
import Footer from "./components/Footer";

import FileUpload from "./components/FileUpload";
import ChatBox from "./components/ChatBox";
import QueryHistory from "./components/QueryHistory";
import ResultTable from "./components/ResultTable";
import ExportButtons from "./components/ExportButtons";
import Charts from "./components/Charts";


function App() {
  const [dataset, setDataset] = useState(null);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleResult = (response) => {
    setResult(response);

    setHistory((prev) => [response.question, ...prev]);
  };

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "#F3F4F6",
            minHeight: "100vh",
          }}
        >
          <DashboardCards
            dataset={dataset}
            history={history}
          />

          <FileUpload onUploadSuccess={setDataset} />

          {dataset && (
            <>
              <ChatBox
                dataset={dataset}
                onResult={handleResult}
              />

              <QueryHistory history={history} />
            </>
          )}

          {result && (
            <div
              style={{
                marginTop: 25,
                background: "white",
                borderRadius: 12,
                padding: 20,
                boxShadow: "0 2px 10px rgba(0,0,0,.1)",
              }}
            >
              <h2>Generated SQL</h2>

              <div
  style={{
    background: "#F9FAFB",
    padding: "15px",
    borderRadius: "8px",
    overflowX: "auto",
    border: "1px solid #E5E7EB",
    fontFamily: "monospace",
  }}
>
  {result.sql}
</div>

              <ResultTable data={result.result} />

<h2 style={{ marginTop: "25px" }}>📊 AI Insight</h2>

<div
  style={{
    background: "#EEF7FF",
    border: "1px solid #BFDBFE",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    color: "#1E3A8A",
    lineHeight: "1.7",
  }}
>
  {result.insight}
</div>

<ExportButtons data={result.result} />

<Charts data={result.result} />
            
            </div>
          )}

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;