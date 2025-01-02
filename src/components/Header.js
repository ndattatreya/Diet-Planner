import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography, IconButton, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import { styles } from '../styles/Header.styles';

const Header = () => {
  const location = useLocation();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Team', link: '/team' },
    { label: 'Process', link: '/process' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Blog', link: '/blog' }
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Top Banner */}
      <Box 
        sx={{ 
          bgcolor: '#1B3B27',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            bgcolor: '#1F432D',
            mx: 'auto',
            my: 1,
            py: 0.75,
            px: 3,
            maxWidth: 'fit-content',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            position: 'relative',
            zIndex: 1
          }}
        >
          <img src="/images/Vector.png" alt="vector" />
          <Typography 
            variant="body2" 
            component="span" 
            sx={{ 
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: 500
            }}
          >
            Join Our Personalized Nutrition Demo For Free
          </Typography>
          <ArrowForwardIcon sx={{ color: 'white', fontSize: 18 }} />
        </Box>
        
        {/* Decorative elements */}
        <Box 
          component="img"
          src="/images/path.png"
          alt=""
          sx={{
            position: 'absolute',
            left: -10,
            top: '50%',
            transform: 'translateY(-50%) rotate(-15deg)',
            height: '200%',
            opacity: 0.15
          }}
        />
        <Box 
          component="img"
          src="/images/path.png"
          alt=""
          sx={{
            position: 'absolute',
            right: -10,
            top: '50%',
            transform: 'translateY(-50%) rotate(15deg)',
            height: '200%',
            opacity: 0.15
          }}
        />
      </Box>

      {/* Main Navigation */}
      <AppBar 
        position="static" 
        sx={{ 
          bgcolor: '#1B3B27',
          boxShadow: 'none'
        }}
      >
        <Container 
          maxWidth="xl" 
          sx={styles.container}
        >
          <Toolbar 
            sx={styles.toolbar}
          >
            {/* Logo */}
            <Box 
              sx={styles.logoWrapper}
            >
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 0.3
                  }}
                >
                </Box>
              </Box>
              
                <img src="/images/Logo.png" alt="logo" />
              
            </Box>

            {/* Mobile menu button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={styles.mobileMenuButton}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop navigation */}
            <Box sx={isMobile ? { display: 'none' } : styles.navItems}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.link}
                  sx={{
                    color: '#C5E1A5',
                    textTransform: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    padding: '6px 8px',
                    minWidth: 'auto',
                    bgcolor: location.pathname === item.link ? 'rgba(197, 225, 165, 0.1)' : 'transparent',
                    '&:hover': {
                      bgcolor: 'rgba(197, 225, 165, 0.1)',
                      opacity: 0.85
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                sx={styles.contactButton}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile drawer */}
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better mobile performance
              }}
              sx={styles.mobileMenu}
            >
              <List>
                {navItems.map((item) => (
                  <ListItem
                    button
                    key={item.label}
                    component={RouterLink}
                    to={item.link}
                    onClick={handleDrawerToggle}
                    sx={{
                      bgcolor: location.pathname === item.link ? 'rgba(74, 124, 89, 0.1)' : 'transparent'
                    }}
                  >
                    <Typography sx={{ color: '#1B3B27' }}>{item.label}</Typography>
                  </ListItem>
                ))}
                <ListItem>
                  <Button
                    variant="contained"
                    fullWidth
                    component={RouterLink}
                    to="/contact"
                    sx={styles.contactButton}
                    onClick={handleDrawerToggle}
                  >
                    Contact Us
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header; 
