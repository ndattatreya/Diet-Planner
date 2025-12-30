const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

const apiKey = "AIzaSyD9ei7lBBm5ZRGEMj6INE5V7BFrunTpM0M";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash", // works with latest SDK
});

app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;
    const result = await model.generateContent(question);
    const text = result.response.text();
    res.json({ answer: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log("Server running at http://localhost:4000"));
