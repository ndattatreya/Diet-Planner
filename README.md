# 🥗 Diet Planner – AI Nutrition Assistant

Diet Planner is a full-stack AI-powered web application that helps users get personalized diet and weight-loss guidance using **Google Gemini (via OpenRouter)**.

* 🌐 **Frontend**: React (deployed on Vercel)
* ⚙️ **Backend**: Node.js + Express (deployed on Render)
* 🤖 **AI Model**: Google Gemini (OpenRouter Free Tier)

🔗 **Live App**:
👉 [https://ndattatreya-diet-planner.vercel.app/](https://ndattatreya-diet-planner.vercel.app/)

🔗 **Backend API**:
👉 [https://diet-planner-21py.onrender.com](https://diet-planner-21py.onrender.com)

---

## ✨ Features

* Ask diet & nutrition-related questions in natural language
* AI-generated structured responses (headings, paragraphs)
* Rate-limited API to prevent abuse
* Clean UI with loading & error handling
* Mobile & desktop responsive

---

## 🛠 Tech Stack

### Frontend

* React
* Axios
* CSS

### Backend

* Node.js
* Express
* express-rate-limit
* CORS
* OpenRouter API (Gemini model)

---

## 📁 Project Structure

```
Diet-Planner/
│
├── src/                # React frontend
│   ├── components/
│   ├── styles/
│   └── App.js
│
├── src/server/         # Express backend
│   └── server.js
│
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Backend Setup (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ndattatreya/Diet-Planner.git
cd Diet-Planner
```

### 2️⃣ Install backend dependencies

```bash
cd src/server
npm install
```

### 3️⃣ Create `.env` file

Inside `src/server/.env` add:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
PORT=4000
```

> ⚠️ Do **NOT** commit this file. It is ignored via `.gitignore`.

### 4️⃣ Run the backend

```bash
node server.js
```

Server runs at:
👉 [http://localhost:4000](http://localhost:4000)

---

## 🌐 Frontend Setup (Local)

```bash
npm install
npm start
```

Frontend runs at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

### Health Check

```http
GET /
```

### Ask AI a Question

```http
POST /api/ask
Content-Type: application/json

{
  "question": "Suggest a weight loss procedure without diet changes"
}
```

### Sample Response

```json
{
  "answer": "Here are some non-surgical options..."
}
```

---

## 🚨 Rate Limiting (Important)

* Free OpenRouter tier has **strict limits**
* Backend enforces rate-limiting to avoid API bans
* If you see **429 Too Many Requests**, wait ~1 minute before retrying

This is **expected behavior**, not a bug.

---

## 🖼 Demo Screenshots

<img width="1919" height="912" alt="Demo 1" src="https://github.com/user-attachments/assets/95333e78-6e91-492e-bc53-d5450a7ec70b" />
<img width="1915" height="913" alt="Demo 2" src="https://github.com/user-attachments/assets/13fdb6a7-0828-428f-8758-1bb7e7ed54f4" />
<img width="1919" height="907" alt="Demo 3" src="https://github.com/user-attachments/assets/71339a43-5c1d-46cc-baa0-48baf7b478bc" />
<img width="1918" height="910" alt="Demo 4" src="https://github.com/user-attachments/assets/075299db-0157-4740-a3a0-e5598a6cbd13" />

---

## 🧠 Common Issues & Fixes

### ❌ 429 Too Many Requests

* Wait 60 seconds
* Avoid clicking the button multiple times
* Free tier limitation

### ❌ No response / slow response

* OpenRouter free tier can be slow
* First request may take longer (cold start)

### ❌ API Key Error

* Verify `OPENROUTER_API_KEY`
* Restart server after changing `.env`

---

## 🚀 Future Improvements (Planned)

* Streaming AI responses
* Conversation history
* User authentication
* Paid tier model support
* Nutrition chart & calorie tracking

---

## 👤 Author

**Dattatreya Nammina**
Final Year Project | AI + Web
🔗 [https://github.com/ndattatreya](https://github.com/ndattatreya)
🔗 [https://www.linkedin.com/in/ndattatreya](https://www.linkedin.com/in/ndattatreya)
---
