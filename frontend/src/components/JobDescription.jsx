function JobDescription({ jobDescription, setJobDescription }) {
  return (
    <div>
      <h3 className="mb-3">📋 Job Description</h3>

      <textarea
        className="form-control"
        rows="8"
        placeholder="Paste the job description here..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <small className="text-muted">
        Paste the complete job description for better AI analysis.
      </small>
    </div>
  );
}

export default JobDescription;
