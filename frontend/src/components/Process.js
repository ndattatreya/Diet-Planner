import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styles } from '../styles/Process.styles';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LoopIcon from '@mui/icons-material/Loop'; 
import SchoolIcon from '@mui/icons-material/School';
import UpdateIcon from '@mui/icons-material/Update';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const ProcessStep = ({ number, title, description, icon }) => (
  <Box sx={styles.processStep}>
    <Box sx={styles.stepNumber}>{number}</Box>
    <Box sx={styles.stepContent}>
      <Box sx={styles.iconWrapper}>
        {icon}
      </Box>
      <Typography variant="h6" sx={styles.stepTitle}>
        {title}
      </Typography>
      <Typography sx={styles.stepDescription}>
        {description}
      </Typography>
    </Box>
  </Box>
);

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Begin your journey with a detailed consultation where we discuss your health goals, current lifestyle, and dietary preferences to create a personalized plan.",
      icon: <PersonIcon sx={styles.icon} />
    },
    {
      number: "02",
      title: "Assessing Your Needs",
      description: "Our team of professionals will analyze and determine all the key factors that will help us create a personalized nutrition plan tailored to your unique needs.",
      icon: <AssessmentIcon sx={styles.icon} />
    },
    {
      number: "03",
      title: "Set Individualized Meal Plans",
      description: "Based on your assessment, we'll create a customized meal plan that aligns with your health goals, dietary preferences, and lifestyle needs.",
      icon: <TimelineIcon sx={styles.icon} />
    },
    {
      number: "04",
      title: "Start Planning and Preparation",
      description: "We'll help you get started with meal planning and preparation, providing you with detailed recipes and shopping lists for a successful nutrition plan.",
      icon: <TrendingUpIcon sx={styles.icon} />
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "Throughout your journey, our team will provide ongoing support, making sure you stay on track and addressing any concerns or questions you may have.",
      icon: <SupportAgentIcon sx={styles.icon} />
    },
    {
      number: "06",
      title: "Progress Tracking",
      description: "We'll regularly track your progress and make any necessary adjustments to your nutrition plan to ensure you're achieving your desired results.",
      icon: <TrackChangesIcon sx={styles.icon} />
    },
    {
      number: "07",
      title: "Regular Check-ins",
      description: "Schedule regular check-ins to review your progress, address any challenges, and make adjustments to keep you moving toward your goals.",
      icon: <LoopIcon sx={styles.icon} />
    },
    {
      number: "08",
      title: "Education and Resources",
      description: "Access our library of educational resources such as articles, guides, and videos to deepen your understanding of nutrition and healthy living.",
      icon: <SchoolIcon sx={styles.icon} />
    },
    {
      number: "09",
      title: "Continuous Improvement",
      description: "We'll continuously refine and adjust your nutrition plan based on your progress and feedback to ensure optimal results.",
      icon: <UpdateIcon sx={styles.icon} />
    },
    {
      number: "10",
      title: "Long-term Success",
      description: "Our goal is to help you build a sustainable healthy lifestyle that will support your long-term success and well-being.",
      icon: <AutoGraphIcon sx={styles.icon} />
    }
  ];

  return (
    <Box sx={styles.section}>
      {/* Logo */}
      <Box sx={styles.logoSection}>
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

      <Container maxWidth="lg">
        <Typography variant="h2" sx={styles.mainTitle}>
          Your Journey to Health and Wellness
        </Typography>
        <Typography sx={styles.subtitle}>
          At Nutritionist, we believe in providing a structured and supportive journey towards better health. Our process is designed to ensure you receive the guidance, knowledge, and tools you need to achieve lasting health and wellness goals.
        </Typography>

        <Typography variant="h3" sx={styles.sectionTitle}>
          How It Works
        </Typography>

        <Grid container spacing={4} sx={styles.stepsGrid}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ProcessStep {...step} />
            </Grid>
          ))}
        </Grid>

        <Box sx={styles.ctaSection}>
          <Typography variant="h5" sx={styles.ctaTitle}>
            Are you ready to embark on a transformative journey towards better health and wellness?
          </Typography>
          <Typography sx={styles.ctaDescription}>
            Take the first step towards a healthier you by scheduling a consultation with our expert team.
          </Typography>
          <Button
            variant="contained"
            sx={styles.getStartedButton}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Process; 