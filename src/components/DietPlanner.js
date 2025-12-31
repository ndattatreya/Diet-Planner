import React, { useState } from 'react';
import axios from 'axios';
import '../styles/DietPlanner.css';

const API_BASE_URL = 'https://diet-planner-21py.onrender.com';

const DietPlanner = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Prevent double click / parallel requests
    if (loading) return;

    if (!question.trim()) {
      setError('Please enter a valid question.');
      return;
    }

    setLoading(true);
    setError('');
    setResponse(null);

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/ask`,
        { question },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const formatted = formatResponse(res.data?.answer);
      setResponse(formatted || 'No response received.');

    } catch (err) {
      console.error('API Error:', err);

      // ✅ Handle rate limit nicely
      if (err.response?.status === 429) {
        setError('Too many requests. Please wait a minute and try again.');
      } else {
        setError('Sorry, there was an error processing your request.');
      }

    } finally {
      setLoading(false);
    }
  };

  /* =========================
     RESPONSE FORMATTER
  ========================= */
  const formatResponse = (text) => {
    if (!text) return null;

    // Remove markdown ** stars
    const cleaned = text.replace(/\*\*/g, '');

    const lines = cleaned
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

    return (
      <div style={{ textAlign: 'left' }}>
        {lines.map((line, index) => {
          // Section headings
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

          // Sub-headings
          if (line.length < 60 && /^[A-Z]/.test(line)) {
            return (
              <strong key={index} style={{ display: 'block', marginTop: '0.5rem' }}>
                {line}
              </strong>
            );
          }

          // Normal text
          return (
            <p key={index} style={{ lineHeight: '1.6', marginBottom: '0.5rem' }}>
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div className="diet-planner">
      <h1>Diet Planning Assistant</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask your diet-related question..."
          disabled={loading}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Ask'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {response && (
        <div className="response">
          <h2>Response:</h2>
          {response}
        </div>
      )}
    </div>
  );
};

export default DietPlanner;
