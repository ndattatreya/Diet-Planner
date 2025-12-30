import React from 'react';
import { 
  Box, Container, Typography, Button, Grid, 
  useMediaQuery 
} from '@mui/material';
import { styles } from '../styles/Hero.styles';
import ChatSection from './ChatSection';

const Hero = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box sx={styles.heroSection}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={6}>
            <Box sx={styles.imageWrapper}>
              <Box
                component="img"
                src="./images/hero-woman.png"
                alt="Nutrition Coach"
                sx={{ ...styles.heroImage, marginTop: -2 }}
              />
            </Box>
          </Grid>

          {/* Right Content */}
          <Grid item xs={12} md={6}>
            <Box sx={styles.contentWrapper}>
              <Typography variant={isMobile ? "h4" : "h1"} sx={{ ...styles.title, mt: -3 }}>
                Transform Your ❤️ Health with
              </Typography>
              <Typography variant={isMobile ? "h4" : "h1"} sx={styles.subtitle}>
                Personalized Nutrition Coaching
              </Typography>
              
              <Typography sx={styles.description}>
                Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.
              </Typography>

              <Box sx={styles.buttonGroup}>
                <Button
                  variant="contained"
                  sx={styles.primaryButton}
                >
                  Get Started Today
                </Button>
                <Button
                  variant="text"
                  sx={styles.secondaryButton}
                >
                  Book a Demo
                </Button>
              </Box>

              <Box sx={isMobile ? { display: 'none' } : styles.customersSection}>
                <Box sx={styles.customerAvatars}>
                  {[
                    'emily.png',
                    'jenifer.png', 
                    'mark.png',
                    'sara.png'
                  ].map((name, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={`./images/${name}`}
                      alt={`${name}'s testimonial`}
                      sx={{
                        ...styles.customerAvatar,
                        ml: index === 0 ? 0 : -1.5
                      }}
                    />
                  ))}
                </Box>
                <Typography sx={styles.customerCount}>
                  <span style={{ color: '#93C926', fontWeight: 600 }}>430+</span> Happy Customers
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Customers Section - Only for Mobile */}
      {isMobile && (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'center', 
          marginTop: -4 // Adjust as needed to position correctly
        }}>
          <Box sx={styles.customersSection}>
            <Box sx={styles.customerAvatars}>
              {[
                'emily.png',
                'jenifer.png', 
                'mark.png',
                'sara.png'
              ].map((name, index) => (
                <Box
                  key={index}
                  component="img"
                  src={`./images/${name}`}
                  alt={`${name}'s testimonial`}
                  sx={{
                    ...styles.customerAvatar,
                    ml: index === 0 ? 0 : -1.5
                  }}
                />
              ))}
            </Box>
            <Typography sx={styles.customerCount}>
              <span style={{ color: '#93C926', fontWeight: 900 }}>430+</span> Happy Customers
            </Typography>
          </Box>
        </Box>
      )}

      {/* Chat Section */}
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <ChatSection />
      </Container>
    </Box>
  );
};

export default Hero;
