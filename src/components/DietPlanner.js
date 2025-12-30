import React, { useState } from 'react';
import axios from 'axios';
import '../styles/DietPlanner.css';

const DietPlanner = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const PORT = process.env.PORT || 4000;

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
      const res = await axios.post('/api/ask', { question });
      const formattedResponse = formatResponse(res.data.answer);
      setResponse(formattedResponse || 'No response received.');
    } catch (error) {
      console.error('Error fetching response:', error);
      setError('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatResponse = (response) => {
    // Split the response into paragraphs based on newlines
    const paragraphs = response.split('\n').map((para, index) => (
      <p
        key={index}
        style={{
          marginBottom: index < response.length - 1 ? '1.5rem' : '0', // Add space only between paragraphs
          lineHeight: '1.6', // Improve line spacing within each paragraph
        }}
      >
        {para.trim().replace(/[^a-zA-Z0-9 .,!?]/g, '')}
      </p>
    ));
    return <div>{paragraphs}</div>;
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
