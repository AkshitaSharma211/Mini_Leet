# Mini LeetCode

A mini coding practice platform where users can solve programming problems, submit code, and track their progress — inspired by LeetCode, focused on the **core experience**:

**Choose Problem → Read Question → Write Code → Run → Submit → See Result**

> Goal: build something that *feels like a real product* without recreating LeetCode from scratch.

---

## Features

### MVP (build these first)

#### 🔐 Authentication
- Register
- Login / Logout
- Protected routes (JWT)
- Password hashing (bcrypt)

#### 📚 Problems
- Problem list
- Problem description page
- Difficulty: Easy / Medium / Hard
- Topics/tags + category
- Sample input/output
- Constraints
- Public + hidden test cases

#### 💻 Code Editor
- Integrated code editor (Monaco Editor or CodeMirror)
- Language selection (start with 1 language for MVP)
- Write solution
- **Run** code with sample/custom input
- **Submit** solution against hidden tests

#### 🧪 Submission Result
Possible verdicts:
- ✅ Accepted
- ❌ Wrong Answer
- ⚠ Runtime Error
- ⏱ Time Limit Exceeded (optional for later)

#### 📊 Progress Tracking
- Problems solved
- Easy/Medium/Hard counts
- Submission history
- Simple user dashboard

---

## Run vs Submit (important)

### ▶ Run
Uses **sample or custom input** and shows output immediately.

### 🚀 Submit
Uses **hidden test cases** and returns a verdict (Accepted/Wrong Answer/etc.).

---

## Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router
- Axios

### Code Editor
Choose one:
- Monaco Editor (recommended)
- CodeMirror

### Backend
- Node.js
- Express.js
- JWT (Auth)
- bcrypt (Password hashing)

### Database
- MongoDB
- Mongoose
- MongoDB Atlas (recommended)

### Code Execution
For the first version, use a **sandboxed code execution service** (do not execute arbitrary code directly on your server).
- Suggested: Judge0 (later / optional)

---

## Architecture (high-level)


<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/44a31157-fe1f-45ea-af3f-37185f44385c" />

---

## Check Frontend Here!


https://forum-scuba-97660747.figma.site/

---

## Local Setup

### Environment Variables

This project uses environment variables for API configuration. Before running locally:

1. Copy the example env file:
```bash
   cp .env.example .env
```
2. Fill in your local values in `.env` (do not commit this file — it's gitignored).

Required variables (see `.env.example` for the full template):
- `VITE_API_BASE_URL` — base URL of the backend API (e.g. `http://localhost:5000/api`)
- `VITE_JUDGE_API_KEY` — API key for Judge0 code execution service (once integrated)

### Running the app

```bash
npm install
npm run dev
```
