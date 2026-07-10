import { useState } from "react";
import api from "../services/api";
import Loader from "./Loader";

function ChatBox({ dataset, onResult }) {

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {

    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);

    try {

      const response = await api.post("/chat", {
        question: question,
        table_name: dataset.table_name,
        columns: dataset.columns
      });

      onResult(response.data);

    } catch (error) {

      console.error(error);
      alert("Failed to get AI response.");

    }

    setLoading(false);
  };

  return (
  <div
    style={{
      background: "white",
      borderRadius: "12px",
      padding: "25px",
      marginTop: "20px",
      boxShadow: "0 2px 10px rgba(0,0,0,.1)",
    }}
  >
    <h2>🤖 Ask AI</h2>

    <input
      type="text"
      value={question}
      placeholder="Example: Show top 5 products"
      onChange={(e) => setQuestion(e.target.value)}
      style={{
        width: "80%",
        padding: "12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />

    <button
      onClick={askQuestion}
      style={{
        marginLeft: "15px",
        background: "#10B981",
        color: "white",
        border: "none",
        padding: "12px 22px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Ask
    </button>
  </div>
);
}

export default ChatBox;