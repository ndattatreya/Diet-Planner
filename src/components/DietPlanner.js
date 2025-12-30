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

  const lines = text.split('\n').filter(Boolean);

  return (
    <div style={{ textAlign: 'left' }}>
      {lines.map((line, index) => {
        if (/procedures|considerations/i.test(line)) {
          return <h3 key={index}>{line}</h3>;
        }

        if (line.length < 60 && /^[A-Z]/.test(line)) {
          return <strong key={index}>{line}</strong>;
        }

        return <p key={index}>{line}</p>;
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
