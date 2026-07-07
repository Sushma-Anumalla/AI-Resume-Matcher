import { useState } from "react";
import api from "../services/api";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post("/upload-resume", formData);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
    }
  };

  return (
    <div>
      <h3 className="mb-3">📄 Upload Resume</h3>

      <input
        className="form-control mb-3"
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="btn btn-primary"
        onClick={handleUpload}
      >
        Upload Resume
      </button>

      {message && (
        <div className="alert alert-success mt-3">
          {message}
        </div>
      )}
    </div>
  );
}

export default UploadResume;