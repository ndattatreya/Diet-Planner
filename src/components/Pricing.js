import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Switch } from '@mui/material';
import { styles } from '../styles/Pricing.styles';

const PricingCard = ({ title, price, description, features, isPopular, isYearly }) => (
  <Box sx={styles.pricingCard}>
    <Box sx={styles.planHeader}>
      <Box sx={styles.planType}>
        <Typography 
          sx={{
            ...styles.planTypeText,
            color: !isYearly ? '#93C926' : 'white'
          }}
        >
          Monthly
        </Typography>
        <Typography 
          sx={{
            ...styles.planTypeText,
            color: isYearly ? '#93C926' : 'white'
          }}
        >
          Yearly
        </Typography>
      </Box>
      {isPopular && (
        <Typography sx={styles.savingBadge}>
          Save 50% on Yearly
        </Typography>
      )}
    </Box>

    <Typography variant="h6" sx={styles.cardTitle}>
      {title}
    </Typography>
    <Typography sx={styles.yearlyText}>
      Up to 50% off on Yearly Plan
    </Typography>

    <Box sx={styles.priceWrapper}>
      <Typography sx={styles.price}>
        ${price}
        <Typography component="span" sx={styles.priceUnit}>/month</Typography>
      </Typography>
    </Box>

    <Box sx={styles.featuresList}>
      {features.map((feature, index) => (
        <Typography key={index} sx={styles.featureItem}>
          {feature}
        </Typography>
      ))}
    </Box>

    {title === 'Premium Plan' && (
      <Typography sx={styles.premiumNote}>
        The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.
      </Typography>
    )}

    <Button 
      variant="contained" 
      fullWidth 
      sx={styles.chooseButton}
    >
      Choose Plan
    </Button>
  </Box>
);

const FeatureRow = ({ feature, plans }) => (
  <Box sx={styles.featureRow}>
    <Typography sx={styles.featureText}>
      {feature}
    </Typography>
    <Box sx={styles.checkboxGroup}>
      {plans.map((isIncluded, index) => (
        <Box key={index} sx={styles.checkboxCell}>
          {isIncluded ? (
            <Box sx={styles.checkIcon}>✓</Box>
          ) : (
            <Box sx={styles.crossIcon}>✕</Box>
          )}
        </Box>
      ))}
    </Box>
  </Box>
);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const getPrice = (monthlyPrice) => {
    return isYearly ? Math.round(monthlyPrice * 0.5) : monthlyPrice;
  };

  const plans = [
    {
      title: 'Basic Plan',
      monthlyPrice: 49,
      features: [
        'Personalized nutrition plan tailored to your goals and dietary preferences.',
        'Access to our mobile app for convenient meal tracking and progress monitoring.',
        'Email support to address your questions and concerns.',
        'Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.'
      ],
      isPopular: false
    },
    {
      title: 'Premium Plan',
      monthlyPrice: 79,
      features: [
        'All the features included in the Basic Plan.',
        'One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.',
        'Recipe recommendations and meal planning assistance.',
        'Priority email support for quicker responses to your inquiries.',
        'Educational resources and guides to deepen your understanding of nutrition and healthy habits.'
      ],
      isPopular: true
    },
    {
      title: 'Ultimate Plan',
      monthlyPrice: 99,
      features: [
        'All the features included in the Plus Plan.',
        'Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.',
        'Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.',
        'Customized meal plans and recipe suggestions based on your preferences and nutritional needs.',
        'Priority email and phone support for immediate assistance.'
      ],
      isPopular: false
    }
  ];

  const features = [
    {
      name: "Personalized Nutrition Plan",
      included: [true, true, true]
    },
    {
      name: "Mobile App Access",
      included: [true, true, true]
    },
    {
      name: "Email Support",
      included: [true, true, true]
    },
    {
      name: "One-on-One Video Consultations",
      included: [false, true, true]
    },
    {
      name: "Recipe Recommendations and Meal Planning",
      included: [false, true, true]
    },
    {
      name: "Priority Support",
      included: [false, true, true]
    },
    {
      name: "Educational Resources and Guides",
      included: [false, true, true]
    },
    {
      name: "Advanced Progress Tracking Tools",
      included: [false, false, true]
    },
    {
      name: "Customized Meal Plans and Recipe Suggestions",
      included: [false, false, true]
    },
    {
      name: "Phone Support",
      included: [false, false, true]
    }
  ];

  return (
    <Box sx={styles.section}>
      <Container maxWidth="lg">
        <Box sx={styles.headerSection}>
          <Typography variant="h2" sx={styles.title}>
            Our Pricing
          </Typography>
          <Typography sx={styles.subtitle}>
            At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with expert-level personalized nutrition coaching that can transform your goals into reality. Choose from our flexible plans and find the right plan specific to your lifestyle.
          </Typography>
          
          <Box sx={styles.toggleWrapper}>
            <Box sx={styles.toggleContainer}>
              <Typography 
                sx={{ 
                  ...styles.toggleOption,
                  color: !isYearly ? '#1B3B27' : '#555',
                  fontWeight: !isYearly ? 600 : 400
                }}
              >
                Monthly
              </Typography>
              <Switch 
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
                sx={styles.switch}
              />
              <Typography 
                sx={{ 
                  ...styles.toggleOption,
                  color: isYearly ? '#1B3B27' : '#555',
                  fontWeight: isYearly ? 600 : 400
                }}
              >
                Yearly
              </Typography>
            </Box>
            {isYearly && (
              <Typography sx={styles.savingsText}>
                Save up to 50% with yearly billing
              </Typography>
            )}
          </Box>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <PricingCard 
                {...plan}
                price={getPrice(plan.monthlyPrice)}
                isYearly={isYearly}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={styles.comparisonSection}>
          <Box sx={styles.tableHeader}>
            <Typography sx={styles.tableTitle}>
              Features
            </Typography>
            <Box sx={styles.planTitles}>
              <Typography sx={styles.planTitle}>Free Plan</Typography>
              <Typography sx={styles.planTitle}>Free Plan</Typography>
              <Typography sx={styles.planTitle}>Free Plan</Typography>
            </Box>
          </Box>

          {features.map((feature, index) => (
            <FeatureRow 
              key={index}
              feature={feature.name}
              plans={feature.included}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing; 