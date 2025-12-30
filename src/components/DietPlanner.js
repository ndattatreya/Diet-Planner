import React, { useState } from 'react';
import axios from 'axios';
import '../styles/DietPlanner.css';

const DietPlanner = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = 'https://diet-planner-21py.onrender.com';

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');
    setError('');

    if (!question.trim()) {
      setError('Please enter a valid question.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/ask`,
        { question },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const formattedResponse = formatResponse(res.data.answer);
      setResponse(formattedResponse || 'No response received.');
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatResponse = (text) => {
  if (!text) return null;

  // 1. Remove markdown stars (**)
  const cleaned = text.replace(/\*\*/g, '');

  // 2. Split into paragraphs
  const lines = cleaned.split('\n').filter(line => line.trim() !== '');

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

        // Sub-headings
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

  return (
    <div className="diet-planner">
      <h1>Diet Planning Assistant</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask your diet-related question..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Asking...' : 'Ask'}
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
