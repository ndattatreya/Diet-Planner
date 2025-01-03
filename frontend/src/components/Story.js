import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styles } from '../styles/Story.styles';

const StoryCard = ({ image, title, description }) => (
  <Box sx={styles.storyCard}>
    <Box
      component="img"
      src={image}
      alt={title}
      sx={styles.storyImage}
    />
    <Box sx={styles.storyContent}>
      <Typography variant="h6" sx={styles.storyTitle}>
        {title}
      </Typography>
      <Typography sx={styles.storyDescription}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const Story = () => {
  const stories = [
    {
      title: "Inspiring Transformation Story",
      description: "Discover stories of real people who have transformed their lives through our personalized nutrition programs. Each journey is unique, and we celebrate every success story.",
      image: "./images/1.png"
    },
    {
      title: "Recognition and Accreditation Story",
      description: "Our team of certified nutritionists and dietitians brings years of expertise and credentials to help you achieve your health goals safely and effectively.",
      image: "./images/2.png"
    },
    {
      title: "Practiced Growth Story",
      description: "From humble beginnings to becoming a trusted name in nutrition coaching, our journey reflects our commitment to helping people live healthier lives.",
      image: "./images/3.png"
    },
    {
      title: "Enhanced Support Story",
      description: "We've continuously evolved our support system to provide comprehensive guidance, ensuring you have all the tools needed for success.",
      image: "./images/4.png"
    },
    {
      title: "Nurturing in Client Story",
      description: "Our approach focuses on building lasting relationships with clients, understanding their unique needs, and providing personalized support throughout their journey.",
      image: "./images/5.png"
    },
    {
      title: "Celebrating Success Stories",
      description: "We take pride in celebrating our clients' achievements, from small victories to major transformations, creating a supportive community of success.",
      image: "./images/6.png"
    },
    {
      title: "Expanding Reach Story",
      description: "Our mission to make professional nutrition guidance accessible has led us to expand our services, reaching more people who seek healthier lifestyles.",
      image: "./images/7.png"
    },
    {
      title: "Research and Expertise Story",
      description: "We stay at the forefront of nutritional science, incorporating evidence-based practices and the latest research into our coaching methods.",
      image: "./images/8.png"
    },
    {
      title: "The Complete Story",
      description: "From day one, our vision has been clear: to empower people with the knowledge and support they need to make lasting changes in their health and well-being.",
      image: "./images/9.png"
    }
  ];

  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.mainTitle}>
          Our Story
        </Typography>
        <Typography sx={styles.subtitle}>
          Watch how we've grown and evolved as we continue to help our clients achieve their health and wellness goals
        </Typography>

        <Grid container spacing={3} sx={styles.storyGrid}>
          {stories.map((story, index) => (
            <Grid item xs={12} md={index === 2 ? 12 : 6} key={index}>
              <StoryCard {...story} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Story; 