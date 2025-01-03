import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { styles } from '../styles/Footer.styles';
import CircleIcon from '@mui/icons-material/Circle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Team', url: '/team' },
    { label: 'Process', url: '/process' },
    { label: 'Pricing', url: '/pricing' },
    { label: 'Blog', url: '/blog' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box component="footer" sx={styles.footer}>
      {/* Main Navigation */}
      <Container maxWidth="xl" sx={styles.mainContainer}>
        {/* Logo */}
        <Box sx={styles.logoSection}>
          <Box sx={styles.logoWrapper}>
            <Typography variant="h6" sx={styles.brandName}>
              <img src="/images/Logo.png" alt="Nutritionist logo" style={{ height: '30px', marginLeft: '8px', verticalAlign: 'middle' }} />
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <Box sx={styles.navigation}>
          {navItems.map((item, index) => (
            <Link key={index} href={item.url} sx={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </Box>

        {/* Go to Top */}
        <Box sx={styles.goToTop} onClick={scrollToTop}>
          <Typography sx={styles.goToTopText}>
            Got To Top
          </Typography>
          <KeyboardArrowUpIcon sx={styles.goToTopIcon} />
        </Box>
      </Container>

      {/* Contact Info Bar */}
      <Box sx={styles.contactBar}>
        <Container maxWidth="xl" sx={styles.contactContainer}>
          <Box sx={styles.contactItem}>
            <EmailIcon sx={styles.contactIcon} />
            <Link href="mailto:hello@squareup.com" sx={styles.contactLink}>
              hello@squareup.com
            </Link>
          </Box>

          <Box sx={styles.contactItem}>
            <PhoneIcon sx={styles.contactIcon} />
            <Link href="tel:+919181232309" sx={styles.contactLink}>
              +91 91813 23 2309
            </Link>
          </Box>

          <Box sx={styles.contactItem}>
            <LocationOnIcon sx={styles.contactIcon} />
            <Typography sx={styles.contactText}>
              Somewhere in the World
            </Typography>
          </Box>

          <Typography sx={styles.copyright}>
            © {currentYear} Nutritionist. All rights reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer; 