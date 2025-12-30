import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styles } from '../styles/Testimonials.styles';

const TestimonialCard = ({ quote, author, image }) => (
  <Box sx={styles.testimonialCard}>
    <FormatQuoteIcon sx={styles.quoteIcon} />
    <Typography sx={styles.quote}>{quote}</Typography>
    <Box sx={styles.authorSection}>
      <Box
        component="img"
        src={`/images/${author.split(' ')[0].toLowerCase()}.png`}
        alt={author}
        sx={styles.authorImage}
      />
      <Typography sx={styles.authorName}>{author}</Typography>
    </Box>
  </Box>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      author: "Jenifer Smith",
      image: "./images/jennifer.png"
    },
    {
      quote: "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      author: "Robert Johnson",
      image: "./images/robert.png"
    },
    {
      quote: "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      author: "Emily Davis",
      image: "./images/emily.png"
    }
  ];

  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Box sx={styles.header}>
          <Typography variant="h4" component="h2" sx={styles.title}>
            Our Testimonials
          </Typography>
          <Typography sx={styles.subtitle}>
            Our satisfied clients share their success stories and experiences on their journey to better health and well-being.
          </Typography>
        </Box>

        <Box sx={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Box>

        <Box sx={styles.navigation}>
          <IconButton sx={styles.navButton}>
            <NavigateBeforeIcon />
          </IconButton>
          <Box sx={styles.dots}>
            {[0, 1, 2].map((dot) => (
              <Box
                key={dot}
                sx={{
                  ...styles.dot,
                  ...(dot === 0 && styles.activeDot)
                }}
              />
            ))}
          </Box>
          <IconButton sx={styles.navButton}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 