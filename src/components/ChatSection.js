import React from 'react';
import DietPlanner from './DietPlanner';
import { Box, Typography } from '@mui/material';
import './ChatSection.css';

const ChatSection = () => {
  return (
    <Box className="chat-section">
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Chat with Our Nutritionist
      </Typography>
      <DietPlanner />
    </Box>
  );
};

export default ChatSection; 