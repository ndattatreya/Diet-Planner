export const styles = {
  footer: {
    bgcolor: '#1B3B27',
    width: '100%'
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    py: 3,
    px: { xs: 2, sm: 4, md: 6, lg: 8 }
  }, 
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  logoDotsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5
  },
  logoDotPair: {
    display: 'flex',
    gap: 0.3
  },
  logoDot: {
    color: '#93C926',
    fontSize: 8
  },
  brandName: {
    color: 'white',
    fontWeight: 600,
    fontSize: '1.25rem'
  },
  navigation: {
    display: { xs: 'none', md: 'flex' },
    gap: 3,
    alignItems: 'center'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.95rem',
    '&:hover': {
      color: '#C5E1A5'
    }
  },
  goToTop: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    cursor: 'pointer',
    '&:hover': {
      '& .MuiTypography-root, & .MuiSvgIcon-root': {
        color: '#C5E1A5'
      }
    }
  },
  goToTopText: {
    color: 'white',
    fontSize: '0.95rem'
  },
  goToTopIcon: {
    color: 'white',
    fontSize: 20
  },
  contactBar: {
    bgcolor: '#1F432D',
    py: 2
  },
  contactContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 2,
    px: { xs: 2, sm: 4, md: 6, lg: 8 }
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  },
  contactIcon: {
    color: '#93C926',
    fontSize: 20
  },
  contactLink: {
    color: '#C5E1A5',
    textDecoration: 'none',
    fontSize: '0.9rem',
    '&:hover': {
      color: 'white'
    }
  },
  contactText: {
    color: '#C5E1A5',
    fontSize: '0.9rem'
  },
  copyright: {
    color: '#C5E1A5',
    fontSize: '0.9rem'
  }
}; 