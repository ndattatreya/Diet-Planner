import React, { useState } from 'react';
import { Box, Container, Typography, Button, Tabs, Tab } from '@mui/material';
import { styles } from '../styles/Team.styles';

const TeamMember = ({ image, name, position }) => (
  <Box sx={styles.teamMember}>
    <Box
      component="img"
      src={image}
      alt={name}
      sx={styles.memberImage}
    />
    <Box sx={styles.memberInfo}>
      <Typography variant="h6" sx={styles.memberName}>
        {name}
      </Typography>
      <Typography sx={styles.memberPosition}>
        {position}
      </Typography>
    </Box>
  </Box>
);

const Team = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const departments = [
    'Management Team',
    'Nutritionists and Dietitians',
    'Customer Support',
    'Marketing and Communications',
    'Technology and Development'
  ];

  const teamMembers = {
    0: [
      {
        name: 'Sarah Mitchell',
        position: 'Founder and CEO',
        image: './images/sara.png'
      }
    ],
    1: [
      {
        name: 'Emily Thompson',
        position: 'Chief Operating Officer',
        image: './images/emily.png'
      }
    ],
    2: [
      {
        name: 'Robert Smith',
        position: 'Chief Financial Officer',
        image: './images/robert.png'
      }
    ],
    3: [
      {
        name: 'Jennifer Adams',
        position: 'Chief Marketing Officer',
        image: './images/jenifer.png'
      }
    ]
  };

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
          Meet Our Team of Experts
        </Typography>
        <Typography sx={styles.subtitle}>
          Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.
        </Typography>

        {/* Department Tabs */}
        <Box sx={{ ...styles.tabsContainer, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              ...styles.tabs,
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {departments.map((dept, index) => (
              <Tab
                key={index}
                label={dept}
                sx={styles.tab}
              />
            ))}
          </Tabs>
        </Box>

        {/* Team Members Grid */}
        <Box sx={{
          ...styles.teamGrid,
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 3
        }}>
          {teamMembers[currentTab]?.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </Box>

        {/* Join Team Section */}
        <Box sx={styles.joinSection}>
          <Typography variant="h5" sx={styles.joinTitle}>
            Join Our Team
          </Typography>
          <Typography sx={styles.joinDescription}>
            We're always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.
          </Typography>
          <Button
            variant="contained"
            sx={styles.applyButton}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Team; 