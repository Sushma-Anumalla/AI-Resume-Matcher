import os
import json
from pathlib import Path

from dotenv import load_dotenv
from google import genai

# Load .env from backend folder
load_dotenv(Path(__file__).parent.parent / ".env")

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_resume(resume_text, job_description):

    prompt = f"""
You are an expert ATS Resume Analyzer.

Compare the following resume and job description.

Resume:
{resume_text}

Job Description:
{job_description}

Return ONLY valid JSON.

Use this JSON format:

{{
  "resume_score": 0,
  "ats_score": 0,
  "matching_skills": [],
  "missing_skills": [],
  "strengths": [],
  "weaknesses": [],
  "resume_improvements": [],
  "interview_questions": []
}}

Do not return markdown.
Do not explain anything.
Only return JSON.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    result = response.text.strip()

    # Remove markdown if Gemini returns it
    if result.startswith("```json"):
        result = result.replace("```json", "", 1)

    if result.startswith("```"):
        result = result.replace("```", "", 1)

    if result.endswith("```"):
        result = result[:-3]

    result = result.strip()

    try:
        return json.loads(result)
    except json.JSONDecodeError:
        return {
            "raw_response": result,
            "error": "Gemini did not return valid JSON."
        }
