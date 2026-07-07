import { useState } from "react";

import UploadResume from "../components/UploadResume";
import JobDescription from "../components/JobDescription";
import AnalyzeButton from "../components/AnalyzeButton";
import ResultCard from "../components/ResultCard";

function Home() {
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const resetAnalysis = () => {
  setJobDescription("");
  setResult(null);
};

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">
          🤖 AI Resume Matcher
        </h1>

        <p className="text-muted">
          Upload your resume and compare it with any job description using AI.
        </p>
      </div>

      <div className="card shadow p-4 mb-4">
        <UploadResume />
      </div>

      <div className="card shadow p-4 mb-4">
        <JobDescription
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
      </div>

      <div className="text-center mb-4">
        <AnalyzeButton
          jobDescription={jobDescription}
          setResult={setResult}
        />
      </div>

      {result && (
  <>
    <div className="text-end mb-3">
      <button
        className="btn btn-outline-secondary"
        onClick={resetAnalysis}
      >
        🔄 New Analysis
      </button>
    </div>

    <div className="card shadow p-4">
      <ResultCard result={result} />
    </div>
  </>
)}

    </div>
  );
}

export default Home;