const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.set('trust proxy', 1);

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
   ENV CHECK
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
    const aiText = await sendMessageWithRetry(question);
    const cleanedText = cleanText(aiText);

    res.json({ answer: cleanedText });

  } catch (error) {
    console.error('API Error:', error.message);

    if (error.message.includes('401')) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    if (error.message.includes('429')) {
      return res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
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
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
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
      throw error;
    }
  }

  throw lastError;
}

/* =========================
   TEXT CLEANER (NO JSX)
========================= */
function cleanText(text) {
  if (!text) return '';
  return text.replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim();
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
});
