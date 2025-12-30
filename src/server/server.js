const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

/* =========================
   CORS CONFIG
========================= */
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://ndattatreya-diet-planner.vercel.app'
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

/* =========================
   RATE LIMITING
========================= */
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: 'Too many requests. Please wait before trying again.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/ask', limiter);

/* =========================
   ENV VALIDATION
========================= */
if (!process.env.OPENROUTER_API_KEY) {
  console.error('❌ OPENROUTER_API_KEY not set');
  process.exit(1);
}

/* =========================
   API ROUTE
========================= */
app.post('/api/ask', async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== 'string' || !question.trim()) {
    return res.status(400).json({ error: 'Valid question is required' });
  }

  try {
    const aiResponse = await sendMessageWithRetry(question);
    const cleanedResponse = formatResponse(aiResponse);

    // ✅ SEND TEXT ONLY
    res.json({ answer: cleanedResponse });

  } catch (error) {
    console.error('API Error:', error.message);

    if (error.message.includes('401')) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    if (error.message.includes('429')) {
      return res.status(429).json({
        error: 'Rate limit exceeded. Try again later.'
      });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/* =========================
   OPENROUTER CALL
========================= */
async function sendMessageWithRetry(question, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://ndattatreya-diet-planner.vercel.app',
            'X-Title': 'Diet Planner App',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.0-flash-exp:free',
            messages: [{ role: 'user', content: question }],
            temperature: 1,
            max_tokens: 2048,
          }),
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(`${response.status} ${err?.error?.message}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;

    } catch (error) {
      lastError = error;

      if (error.message.includes('429') && attempt < maxRetries) {
        await sleep(60000); // wait 1 min
        continue;
      }

      throw error;
    }
  }

  throw lastError;
}

/* =========================
   TEXT FORMATTER (NO JSX)
========================= */
function formatResponse(text) {
  if (!text) return '';

  return text
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/* =========================
   UTILITY
========================= */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});}

app.post('/api/ask', async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== 'string' || question.trim().length === 0) {
    return res.status(400).json({ error: 'Question is required and must be a non-empty string' });
  }

  try {
    const result = await sendMessageWithRetry(question);
    const formatResponse = (text) => {
  if (!text) return null;

  const lines = text.split('\n').filter(line => line.trim() !== '');

  return (
    <div style={{ textAlign: 'left' }}>
      {lines.map((line, index) => {
        // Headings
        if (
          line.toLowerCase().includes('procedures') ||
          line.toLowerCase().includes('considerations')
        ) {
          return (
            <h3 key={index} style={{ marginTop: '1rem', color: '#2e7d32' }}>
              {line}
            </h3>
          );
        }

        // Sub-headings (like Gastric Balloon)
        if (line.length < 60 && line[0] === line[0].toUpperCase()) {
          return (
            <strong key={index} style={{ display: 'block', marginTop: '0.5rem' }}>
              {line}
            </strong>
          );
        }

        // Normal paragraph
        return (
          <p key={index} style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
            {line}
          </p>
        );
      })}
    </div>
  );
};
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
