export const styles = {
  section: {
    py: { xs: 6, md: 8 },
    position: 'relative'
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
  sectionTitle: {
    color: '#1B3B27',
    fontSize: { xs: '24px', sm: '28px', md: '32px' },
    fontWeight: 600,
    textAlign: 'center',
    mb: 6
  },
  stepsGrid: {
    mb: 8
  },
  processStep: {
    display: 'flex',
    gap: 3,
    bgcolor: 'white',
    p: 3,
    borderRadius: 2,
    height: '100%'
  },
  stepNumber: {
    color: '#93C926',
    fontSize: '24px',
    fontWeight: 'bold',
    minWidth: 'fit-content'
  },
  stepContent: {
    flex: 1
  },
  iconWrapper: {
    bgcolor: '#E9EDC9',
    width: 'fit-content',
    p: 1,
    borderRadius: 1,
    mb: 2
  },
  icon: {
    color: '#1B3B27',
    fontSize: 24
  },
  stepTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 1
  },
  stepDescription: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.8
  },
  ctaSection: {
    textAlign: 'center',
    maxWidth: 700,
    mx: 'auto'
  },
  ctaTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 2
  },
  ctaDescription: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.8,
    mb: 4
  },
  getStartedButton: {
    bgcolor: '#93C926',
    color: '#1B3B27',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    px: 4,
    py: 1.5,
    borderRadius: 2,
    '&:hover': {
      bgcolor: '#84b522'
    }
  }
}; 