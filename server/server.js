const express = require('express');
const cors = require('cors'); // Import the cors package
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const app = express();
const port = process.env.PORT || 4000

app.use(cors()); // Use the cors middleware
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY; 
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

app.get('/', (req, res) => {
  res.send('Diet Planner Backend is Live');
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
    const result = await chatSession.sendMessage(question);
    const formattedResponse = formatResponse(result.response.text());
    res.json({ answer: formattedResponse });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const formatResponse = (response) => {
  // Example: Remove unwanted symbols and format the response
  return response.replace(/[^a-zA-Z0-9 .,!?]/g, ''); // Remove unwanted symbols
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
