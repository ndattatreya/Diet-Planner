import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { styles } from '../styles/Achievements.styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GroupsIcon from '@mui/icons-material/Groups';

const AchievementCard = ({ icon, title, description }) => (
  <Box sx={styles.achievementCard}>
    <Box sx={styles.iconWrapper}>
      {icon}
    </Box>
    <Typography variant="h6" sx={styles.achievementTitle}>
      {title}
    </Typography>
    <Typography sx={styles.achievementDescription}>
      {description}
    </Typography>
  </Box>
);

const Achievements = () => {
  const achievements = [
    {
      icon: <RestaurantIcon sx={styles.icon} />,
      title: "10,000+ Transformations",
      description: "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle."
    },
    {
      icon: <SchoolIcon sx={styles.icon} />,
      title: "Recognition for Excellence",
      description: "Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success."
    },
    {
      icon: <ThumbUpIcon sx={styles.icon} />,
      title: "Positive Client Reviews",
      description: "We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program."
    },
    {
      icon: <GroupsIcon sx={styles.icon} />,
      title: "Collaborate With Top Health Experts",
      description: "Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support."
    }
  ];

  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.mainTitle}>
          Company Achievements
        </Typography>
        <Typography sx={styles.subtitle}>
          At Nutritionist, we take pride in our accomplishments and the positive impact we have made on the lives of our clients. Here are some of our notable achievements:
        </Typography>

        <Grid container spacing={4} sx={styles.achievementsGrid}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <AchievementCard {...achievement} />
            </Grid>
          ))}
        </Grid>

        <Box sx={styles.bottomSection}>
          <Typography variant="h5" sx={styles.bottomTitle}>
            We Are Proud of Our Achievements
          </Typography>
          <Typography sx={styles.bottomDescription}>
            But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.
          </Typography>
          <Button 
            variant="contained" 
            sx={styles.demoButton}
          >
            Book a Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Achievements; 