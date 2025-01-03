const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path to serve the React build folder
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Google Generative AI Setup
const apiKey = process.env.GOOGLE_API_KEY || "AIzaSyAvEuSfAA6EwVxKyqVkuO0m8bb4V_8djZw";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// API Endpoint
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

// Helper function to format responses
const formatResponse = (response) => {
  // Example: Remove unwanted symbols and format the response
  return response.replace(/[^a-zA-Z0-9 .,!?]/g, ''); // Remove unwanted symbols
};

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build'))); // Serve static files from the build folder

  // Catch-all route to serve the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
