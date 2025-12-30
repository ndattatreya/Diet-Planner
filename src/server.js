const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = 4000;

app.use(cors()); // Use the cors middleware
app.use(express.json());

// Rate limiting middleware - very conservative for OpenRouter free tier
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 1, // limit each IP to 1 request per minute (very conservative)
  message: 'Too many requests. Please wait at least 1 minute between questions.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/ask', limiter);

const apiKey = process.env.OPENROUTER_API_KEY;
if (!apiKey) {
  console.error('OPENROUTER_API_KEY environment variable is not set');
  process.exit(1);
}

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: 'Question is required and must be a non-empty string' });
  }

  try {
    const result = await sendMessageWithRetry(question);
    const formattedResponse = formatResponse(result);
    res.json({ answer: formattedResponse });
  } catch (error) {
    console.error('Error processing request:', error);

    // Handle specific OpenRouter API errors
    if (error.message.includes('429')) {
      return res.status(429).json({
        error: 'AI service is temporarily busy. The free tier has very limited requests per minute.',
        suggestion: 'Please wait 1-2 minutes before trying again, or consider upgrading to a paid plan.',
        retryAfter: '60s'
      });
    }

    if (error.message.includes('401')) {
      return res.status(401).json({ error: 'Invalid API key. Please check your OpenRouter API key.' });
    }

    if (error.message.includes('403')) {
      return res.status(403).json({ error: 'API access forbidden. Please check your OpenRouter account and billing.' });
    }

    if (error.message.includes('400')) {
      return res.status(400).json({ error: 'Invalid request. Please check your input.' });
    }

    if (error.message.includes('500')) {
      return res.status(500).json({ error: 'OpenRouter service error. Please try again later.' });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to send message with retry logic and longer delays
async function sendMessageWithRetry(question, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://your-app.com', // Optional, for rankings
          'X-Title': 'Diet Planner App', // Optional, for rankings
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-exp:free",
          messages: [
            {
              role: "user",
              content: question
            }
          ],
          temperature: 1,
          max_tokens: 8192,
          top_p: 0.95,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenRouter API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      lastError = error;

      // If it's a rate limit error and we have retries left, wait and retry
      if (error.message.includes('429') && attempt < maxRetries) {
        // Use longer delays for free tier: 30s, 60s, 120s
        const retryDelays = [30000, 60000, 120000];
        const retryDelay = retryDelays[attempt - 1] || 120000;

        console.log(`Rate limit exceeded. Retrying in ${retryDelay}ms... (attempt ${attempt}/${maxRetries})`);
        await sleep(retryDelay);
        continue;
      }

      // If it's not a rate limit error or we've exhausted retries, throw the error
      throw error;
    }
  }

  throw lastError;
}

// Helper function to sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const formatResponse = (response) => {
  // Example: Remove unwanted symbols and format the response
  return response.replace(/[^a-zA-Z0-9 .,!?]/g, ''); // Remove unwanted symbols
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
