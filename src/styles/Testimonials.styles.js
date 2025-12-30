export const styles = {
  section: {
    py: { xs: 6, md: 8 },
    bgcolor: '#FAFAFA'
  },
  header: {
    textAlign: 'center',
    mb: { xs: 4, md: 6 }
  },
  title: {
    color: '#1B3B27',
    fontWeight: 'bold',
    fontSize: { xs: '28px', md: '36px' },
    mb: 2
  },
  subtitle: {
    color: '#555',
    maxWidth: 800,
    mx: 'auto',
    fontSize: { xs: '14px', sm: '16px' }
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(3, 1fr)'
    },
    gap: { xs: 3, md: 4 },
    mb: 4
  },
  testimonialCard: {
    bgcolor: 'white',
    p: { xs: 3, md: 4 },
    borderRadius: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  quoteIcon: {
    color: '#93C926',
    fontSize: 40,
    mb: 2
  },
  quote: {
    color: '#1B3B27',
    fontSize: { xs: '14px', md: '16px' },
    lineHeight: 1.8,
    flex: 1,
    mb: 3,
    marginBottom: '0px'
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },
  authorImage: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    objectFit: 'cover',
    marginTop: '0px'
  },
  authorName: {
    color: '#1B3B27',
    fontWeight: 600,
    fontSize: '16px'
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    mt: { xs: 3, md: 4 }
  },
  navButton: {
    color: '#1B3B27',
    '&:hover': {
      bgcolor: 'rgba(27, 59, 39, 0.04)'
    }
  },
  dots: {
    display: 'flex',
    gap: 1
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    bgcolor: '#E0E0E0'
  },
  activeDot: {
    bgcolor: '#93C926'
  }
}; 