import { useState } from "react";
import api from "../services/api";

function AnalyzeButton({ jobDescription, setResult }) {
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) {
      alert("Please enter a job description.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/analyze", {
        job_description: jobDescription,
      });

      console.log("Backend Response:", response.data);

      if (response.data.success) {
        setResult(response.data.data);
      } else {
        alert(response.data.message || "Analysis failed.");
      }
    } catch (error) {
      console.error("Analyze Error:", error);

      if (error.response) {
        console.log("Backend Error:", error.response.data);
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="btn btn-primary btn-lg px-5"
      onClick={handleAnalyze}
      disabled={loading}
    >
      {loading ? "⏳ Analyzing Resume..." : "🔍 Analyze Resume"}
    </button>
  );
}

export default AnalyzeButton;