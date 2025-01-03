export const styles = {
  section: {
    py: { xs: 6, md: 8 },
    position: 'relative',
    minHeight: '100vh',
    bgcolor: '#FAFAFA'
  },
  logoSection: {
    position: 'absolute',
    top: 40,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  logo: {
    bgcolor: '#1B3B27',
    p: 2,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5
  },
  logoDotPair: {
    display: 'flex',
    gap: 0.5
  },
  logoDot: {
    width: 8,
    height: 8,
    bgcolor: '#93C926',
    borderRadius: '50%'
  },
  mainTitle: {
    color: '#1B3B27',
    fontSize: { xs: '28px', sm: '32px', md: '36px' },
    fontWeight: 'bold',
    textAlign: 'center',
    mt: 12,
    mb: 2
  },
  subtitle: {
    color: '#555',
    fontSize: { xs: '14px', sm: '16px' },
    textAlign: 'center',
    maxWidth: 800,
    mx: 'auto',
    mb: 6,
    lineHeight: 1.8
  },
  contactCardsContainer: {
    mb: 6
  },
  contactCard: {
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)'
    }
  },
  contactCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    p: 3
  },
  iconWrapper: {
    bgcolor: '#E9EDC9',
    p: 2,
    borderRadius: '50%',
    mb: 2
  },
  contactIcon: {
    color: '#1B3B27',
    fontSize: 28
  },
  contactTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 1
  },
  contactText: {
    color: '#555',
    fontSize: '16px',
    mb: 0.5
  },
  contactSubText: {
    color: '#777',
    fontSize: '14px'
  },
  contentContainer: {
    mb: 4
  },
  formCard: {
    height: '100%',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  formTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 3,
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },
  input: {
    bgcolor: 'white',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E0E0',
      },
      '&:hover fieldset': {
        borderColor: '#1B3B27',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#93C926',
      },
    },
  },
  submitButton: {
    bgcolor: '#93C926',
    color: '#1B3B27',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    py: 1.5,
    mt: 2,
    '&:hover': {
      bgcolor: '#84b522'
    },
    '&:disabled': {
      bgcolor: '#E0E0E0'
    }
  },
  mapCard: {
    mb: 3,
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
  },
  mapTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 1
  },
  mapSubtitle: {
    color: '#555',
    mb: 2
  },
  mapContainer: {
    width: '100%',
    height: 300,
    borderRadius: 1,
    overflow: 'hidden'
  },
  socialCard: {
    bgcolor: '#1B3B27',
    color: 'white'
  },
  socialTitle: {
    textAlign: 'center',
    mb: 2
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2
  },
  socialButton: {
    color: 'white',
    '&:hover': {
      color: '#93C926'
    }
  }
}; 