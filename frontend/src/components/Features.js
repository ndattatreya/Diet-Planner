import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SchoolIcon from '@mui/icons-material/School';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { styles } from '../styles/Features.styles';

const FeatureCard = ({ icon, title, description }) => { 
  return (
    <Box sx={{ p: 3, height: '100%' }}>
      <Box
        sx={{
          bgcolor: '#e9edc9',
          width: 60,
          height: 60,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2
        }}
      >
        {icon}
      </Box>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

const Features = () => {
  const features = [
    {
      icon: <RestaurantMenuIcon sx={{ color: '#4a7c59', fontSize: 30 }} />,
      title: 'Personalized Nutrition Plans',
      description: 'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.'
    },
    {
      icon: <SchoolIcon sx={{ color: '#4a7c59', fontSize: 30 }} />,
      title: 'Guidance from Certified Nutritionists',
      description: 'Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.'
    },
    {
      icon: <TrackChangesIcon sx={{ color: '#4a7c59', fontSize: 30 }} />,
      title: 'Food Tracking and Analysis',
      description: 'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.'
    },
    {
      icon: <MenuBookIcon sx={{ color: '#4a7c59', fontSize: 30 }} />,
      title: 'Meal Planning and Recipes',
      description: 'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.'
    },
    {
      icon: <PsychologyIcon sx={{ color: '#4a7c59', fontSize: 30 }} />,
      title: 'Lifestyle and Behavior Coaching',
      description: 'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.'
    },
    {
      icon: <CastForEducationIcon sx={{ color: '#4a7c59', fontSize: 30 }} />,
      title: 'Nutritional Education and Workshops',
      description: 'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
            Features
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;