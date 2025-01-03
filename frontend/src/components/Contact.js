import React, { useState } from 'react';
import { 
  Box, Container, Typography, TextField, Button, Grid, 
  Card, CardContent, Snackbar, Alert, CircularProgress 
} from '@mui/material';
import { styles } from '../styles/Contact.styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactInfo = ({ icon, title, text, subText }) => (
  <Card sx={styles.contactCard}>
    <CardContent sx={styles.contactCardContent}>
      <Box sx={styles.iconWrapper}>
        {icon}
      </Box>
      <Typography variant="h6" sx={styles.contactTitle}>
        {title}
      </Typography>
      <Typography sx={styles.contactText}>
        {text}
      </Typography>
      {subText && (
        <Typography sx={styles.contactSubText}>
          {subText}
        </Typography>
      )}
    </CardContent>
  </Card>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSnackbar({
        open: true,
        message: 'Message sent successfully! We\'ll get back to you soon.',
        severity: 'success'
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 2000);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
          Contact Us
        </Typography>
        <Typography sx={styles.subtitle}>
          We value your feedback, questions, and concerns. Our dedicated team is here to assist you on your nutritional journey. Please don't hesitate to reach out through any of the following contact methods:
        </Typography>

        {/* Contact Information Cards */}
        <Grid container spacing={3} sx={styles.contactCardsContainer}>
          <Grid item xs={12} sm={6} md={3}>
            <ContactInfo 
              icon={<EmailIcon sx={styles.contactIcon} />}
              title="Email Us"
              text="support@nutritionist.com"
              subText="24/7 Support Available"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ContactInfo 
              icon={<PhoneIcon sx={styles.contactIcon} />}
              title="Call Us"
              text="+1 (555) 000-0000"
              subText="Mon-Fri: 9AM-6PM"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ContactInfo 
              icon={<WhatsAppIcon sx={styles.contactIcon} />}
              title="WhatsApp"
              text="+1 (555) 000-0000"
              subText="Quick Response"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ContactInfo 
              icon={<AccessTimeIcon sx={styles.contactIcon} />}
              title="Working Hours"
              text="Monday - Friday"
              subText="9:00 AM - 6:00 PM"
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={styles.contentContainer}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card sx={styles.formCard}>
              <CardContent>
                <Typography variant="h5" sx={styles.formTitle}>
                  Send Us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    variant="outlined"
                    sx={styles.input}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    sx={styles.input}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={styles.input}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={styles.input}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={styles.submitButton}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Send Message'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={6}>
            <Card sx={styles.mapCard}>
              <CardContent>
                <Typography variant="h5" sx={styles.mapTitle}>
                  Visit Our Office
                </Typography>
                <Typography sx={styles.mapSubtitle}>
                  Some Street in the US
                </Typography>
                <Box sx={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548727524!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043099075!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="location"
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card sx={styles.socialCard}>
              <CardContent>
                <Typography variant="h6" sx={styles.socialTitle}>
                  Follow Us
                </Typography>
                <Box sx={styles.socialLinks}>
                  <Button href="#" target="_blank" sx={styles.socialButton}>
                    <FacebookIcon />
                  </Button>
                  <Button href="#" target="_blank" sx={styles.socialButton}>
                    <TwitterIcon />
                  </Button>
                  <Button href="#" target="_blank" sx={styles.socialButton}>
                    <LinkedInIcon />
                  </Button>
                  <Button href="#" target="_blank" sx={styles.socialButton}>
                    <InstagramIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 