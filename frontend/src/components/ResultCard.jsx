import { jsPDF } from "jspdf";

function ResultCard({ result }) {
  const downloadReport = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);
    doc.text("AI Resume Analysis Report", 20, y);

    y += 15;

    doc.setFontSize(14);
    doc.text(`Resume Score: ${result.resume_score}%`, 20, y);

    y += 10;
    doc.text(`ATS Score: ${result.ats_score}%`, 20, y);

    y += 15;
    doc.setFontSize(16);
    doc.text("Matching Skills", 20, y);

    y += 10;
    result.matching_skills.forEach((skill) => {
      doc.text(`• ${skill}`, 25, y);
      y += 8;
    });

    y += 5;
    doc.text("Missing Skills", 20, y);

    y += 10;
    result.missing_skills.forEach((skill) => {
      doc.text(`• ${skill}`, 25, y);
      y += 8;
    });

    y += 5;
    doc.text("Strengths", 20, y);

    y += 10;
    result.strengths.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 8;
    });

    y += 5;
    doc.text("Weaknesses", 20, y);

    y += 10;
    result.weaknesses.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 8;
    });

    y += 5;
    doc.text("Resume Improvements", 20, y);

    y += 10;
    result.resume_improvements.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 8;
    });

    y += 5;
    doc.text("Interview Questions", 20, y);

    y += 10;
    result.interview_questions.forEach((item) => {
      doc.text(`• ${item}`, 25, y);
      y += 8;
    });

    doc.save("Resume_Analysis_Report.pdf");
  };

  return (
    <div className="container mt-4">

      <div className="text-end mb-3">
        <button
          className="btn btn-success"
          onClick={downloadReport}
        >
          📄 Download Report
        </button>
      </div>

      <h2 className="text-center mb-4">📊 Analysis Result</h2>

      <div className="row mb-4">

        <div className="col-md-6 mb-3">
          <div className="card shadow border-0 bg-primary text-white">
            <div className="card-body text-center">
              <h4>⭐ Resume Score</h4>
              <h1>{result.resume_score}%</h1>

              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  style={{ width: `${result.resume_score}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow border-0 bg-dark text-white">
            <div className="card-body text-center">
              <h4>🎯 ATS Score</h4>
              <h1>{result.ats_score}%</h1>

              <div className="progress">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: `${result.ats_score}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="card shadow mb-4">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">✅ Matching Skills</h5>
        </div>

        <div className="card-body">
          {result.matching_skills.map((skill, index) => (
            <span key={index} className="badge bg-success me-2 mb-2">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header bg-danger text-white">
          <h5 className="mb-0">❌ Missing Skills</h5>
        </div>

        <div className="card-body">
          {result.missing_skills.map((skill, index) => (
            <span key={index} className="badge bg-danger me-2 mb-2">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">💪 Strengths</h5>
        </div>

        <div className="card-body">
          <ul>
            {result.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header bg-warning">
          <h5 className="mb-0">⚠️ Weaknesses</h5>
        </div>

        <div className="card-body">
          <ul>
            {result.weaknesses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">📈 Resume Improvements</h5>
        </div>

        <div className="card-body">
          <ul>
            {result.resume_improvements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">🎤 Interview Questions</h5>
        </div>

        <div className="card-body">
          <ol>
            {result.interview_questions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>

    </div>
  );
}

export default ResultCard;