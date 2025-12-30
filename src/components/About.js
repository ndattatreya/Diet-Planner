import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styles } from '../styles/About.styles';

const About = () => {
  return (
    <Box sx={styles.section}>
      {/* Logo Grid */}
      <Box sx={styles.logoGrid}>
        <Box sx={styles.logoRow}>
          <Box sx={styles.logoBox} />
          <Box sx={styles.logoBox} />
          <Box sx={styles.centerLogoBox}>
            <Box sx={styles.logo}>
              <Box sx={styles.logoDotPair}>
                <Box sx={styles.logoDot} />
                <Box sx={styles.logoDot} />
              </Box>
              <Box sx={styles.logoDotPair}>
                <Box sx={styles.logoDot} />
                <Box sx={styles.logoDot} />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.logoBox} />
          <Box sx={styles.logoBox} />
        </Box>
        <Box sx={styles.logoRow}>
          <Box sx={styles.logoBox} />
          <Box sx={styles.logoBox} />
          <Box sx={styles.logoBox} />
          <Box sx={styles.logoBox} />
          <Box sx={styles.logoBox} />
        </Box>
      </Box>

      {/* Content */}
      <Container maxWidth="lg">
        <Box sx={styles.content}>
          <Typography variant="h2" component="h1" sx={styles.title}>
            Welcome to Nutritionist
          </Typography>
          
          <Typography sx={styles.paragraph}>
            Your trusted source for personalized nutrition coaching. Our mission is to help you achieve your weight loss and health goals through tailored nutrition plans and expert guidance. We understand that every individual is unique, and that's why we believe in providing personalized solutions that fit your lifestyle and preferences.
          </Typography>

          <Typography sx={styles.paragraph}>
            With our team of qualified nutritionists and dietitians, we are dedicated to empowering you with the knowledge and tools you need to make lasting changes. Whether you want to shed those extra pounds, improve your overall well-being, or develop a healthier relationship with food, we are here to support you every step of the way.
          </Typography>

          <Typography sx={styles.paragraph}>
            At Nutritionist, we believe that healthy eating should be enjoyable and sustainable. We emphasize the importance of balanced nutrition, focusing on whole foods and mindful eating practices. Our approach is rooted in scientific research and evidence-based strategies, ensuring that you receive the most up-to-date and accurate information.
          </Typography>

          <Typography sx={styles.paragraph}>
            Join our community of individuals committed to transforming their lives through nutrition. Take control of your health, boost your energy levels, and discover the joy of nourishing your body with wholesome foods. We are here to guide you towards a healthier, happier you.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 