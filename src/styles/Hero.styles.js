export const styles = {
  heroSection: {
    py: 5,
  },
  
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    gap: 10
  },
  
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  },
  
  title: {
    color: '#1B3B27',
    marginTop: 1,
    fontSize: { xs: '24px', md: '32px' },
    fontWeight: 500,
    lineHeight: 1.5,
    textAlign: 'center',
    '& span': {
      color: '#93C926'
    },
    mb: 0
  },
  
  subtitle: {
    color: '#1B3B27',
    fontSize: { xs: '32px', md: '40px' },
    fontWeight: 700,
    textAlign: 'center',
    fontFamily: 'Urbanist',
    lineHeight: 1.1,
    mb: 0
  },
  
  description: {
    color: '#555',
    fontSize: '16px',
    lineHeight: 1.6,
    mb: 1,
    textAlign: 'center'
  },
  
  buttonGroup: {
    display: 'flex',
    gap: 2,
    marginBottom: 5.5,
    justifyContent: 'center'
  },
  
  primaryButton: {
    bgcolor: '#93C926',
    color: '#1B3B27',
    fontSize: '16px',
    fontWeight: 500,
    py: 1.5,
    px: 3,
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
      bgcolor: '#84b522'
    }
  },
  
  secondaryButton: {
    color: '#1B3B27',
    fontSize: '16px',
    fontWeight: 500,
    textTransform: 'none',
    '&:hover': {
      bgcolor: 'transparent',
      opacity: 0.8
    }
  },
  
  customersSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  
  customerAvatars: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 5%',
    marginRight: '0'
  },
  
  customerAvatar: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    border: '2px solid white',
    objectFit: 'cover'
  },
  
  customerCount: {
    color: '#1B3B27',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'center'
  }
};