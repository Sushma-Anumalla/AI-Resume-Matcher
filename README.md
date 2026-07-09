# 🚀 AI Resume Matcher

An AI-powered Resume Matcher that analyzes resumes against job descriptions using **Google Gemini AI**. The application provides ATS scores, resume scores, skill matching, improvement suggestions, and interview questions to help job seekers optimize their resumes.

---

## 🌐 Live Demo

**Frontend (Vercel):**  
https://ai-resume-matcher-lemon.vercel.app/

**Backend (Render):**  
https://ai-resume-matcher-luup.onrender.com/

---

## ✨ Features

- 📄 Upload PDF Resume
- 🤖 AI Resume Analysis using Google Gemini
- 📊 Resume Score
- 🎯 ATS Score
- ✅ Matching Skills Detection
- ❌ Missing Skills Identification
- 💪 Resume Strengths
- ⚠️ Resume Weaknesses
- 📈 Resume Improvement Suggestions
- 🎤 AI-Generated Interview Questions
- 📥 Download Analysis Report as PDF
- 🌐 Fully Deployed on Vercel and Render

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Bootstrap
- Axios
- jsPDF

### Backend
- FastAPI
- Python
- Google Gemini API
- pdfplumber
- Uvicorn

### Deployment
- Vercel
- Render

### Version Control
- Git
- GitHub

---

## 📂 Project Structure

```
AI-Resume-Matcher/
│
├── backend/
│   ├── services/
│   ├── uploads/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ How It Works

1. Upload a PDF resume.
2. Extract resume text using Python.
3. Paste a job description.
4. Google Gemini compares the resume with the job description.
5. The application generates:
   - Resume Score
   - ATS Score
   - Matching Skills
   - Missing Skills
   - Strengths
   - Weaknesses
   - Resume Improvements
   - Interview Questions
6. Download the analysis report as a PDF.

---

## 📷 Screenshots

### Home Page

_Add screenshot here_

---

### Resume Upload

_Add screenshot here_

---

### Analysis Result

_Add screenshot here_

---

### PDF Report

_Add screenshot here_

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Sushma-Anumalla/AI-Resume-Matcher.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## 🎯 Future Improvements

- User Authentication
- Resume History
- Multiple Resume Support
- AI Cover Letter Generator
- Resume Template Generator
- Dark Mode
- Drag & Drop Upload
- Dashboard Analytics

---

## 👨‍💻 Author

**Sushma Anumalla**

GitHub: https://github.com/Sushma-Anumalla

LinkedIn: https://www.linkedin.com/in/sushma-anumalla/

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.
