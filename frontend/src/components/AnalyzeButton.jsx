import { useState } from "react";
import api from "../services/api";

function AnalyzeButton({ jobDescription, setResult }) {
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!jobDescription) {
      alert("Please enter a job description.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/analyze", {
        job_description: jobDescription,
      });

      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      alert("Analysis failed.");
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