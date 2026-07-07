import os
from pathlib import Path

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from services.ai_service import analyze_resume
from services.pdf_service import extract_resume_text

app = FastAPI(
    title="AI Resume Matcher API",
    description="""
AI-powered Resume Analyzer built with FastAPI and Google Gemini.

Features:
- Upload PDF Resume
- Extract Resume Text
- Analyze Resume Against Job Description
- ATS Score
- Resume Score
- Matching Skills
- Missing Skills
- Resume Improvements
- Interview Questions
""",
    version="1.0.0",
    contact={
        "name": "Sushma Anumalla",
        "email": "anumallasushma10@gmail.com",
    },
)

# -----------------------------
# CORS
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "http://127.0.0.1:5175",

        "https://ai-resume-matcher-lemon.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# Home API
# -----------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to AI Resume Matcher API"
    }


# -----------------------------
# Upload Resume API
# -----------------------------
@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    # Allow only PDF
    if not file.filename.lower().endswith(".pdf"):
        return {
            "success": False,
            "message": "Only PDF files are allowed."
        }

    # Create uploads folder
    os.makedirs("uploads", exist_ok=True)

    # Delete old resumes
    for old_file in Path("uploads").glob("*.pdf"):
        old_file.unlink()

    # Save uploaded resume
    file_path = Path("uploads") / file.filename

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # Save current resume filename
    with open("current_resume.txt", "w") as f:
        f.write(file.filename)

    # Extract text
    resume_text = extract_resume_text(file_path)

    return {
        "success": True,
        "message": "Resume uploaded successfully",
        "filename": file.filename,
        "resume_text": resume_text,
    }


# -----------------------------
# Job Description Model
# -----------------------------
class JobDescription(BaseModel):
    job_description: str


# -----------------------------
# Analyze Resume API
# -----------------------------
@app.post("/analyze")
async def analyze(data: JobDescription):

    if not os.path.exists("current_resume.txt"):
        return {
            "success": False,
            "message": "Please upload a resume first."
        }

    with open("current_resume.txt", "r") as f:
        filename = f.read().strip()

    file_path = Path("uploads") / filename

    if not file_path.exists():
        return {
            "success": False,
            "message": "Resume file not found."
        }

    resume_text = extract_resume_text(file_path)

    try:
        result = analyze_resume(
            resume_text,
            data.job_description
        )

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        return {
            "success": False,
            "message": str(e)
        }