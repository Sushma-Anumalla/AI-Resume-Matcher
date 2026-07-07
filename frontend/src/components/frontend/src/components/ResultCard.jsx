function ResultCard({ result }) {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Analysis Result</h2>

      <h3>Resume Score: {result.resume_score}</h3>

      <h3>ATS Score: {result.ats_score}</h3>

      <h3>Matching Skills</h3>
      <ul>
        {result.matching_skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Missing Skills</h3>
      <ul>
        {result.missing_skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;