export const styles = {
  section: {
    bgcolor: '#FAFAFA',
    pt: { xs: 4, md: 6 },
    pb: { xs: 6, md: 8 }
  },
  logoGrid: {
    mb: { xs: 4, md: 6 }
  },
  logoRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
    mb: 2
  },
  logoBox: {
    width: { xs: 80, sm: 120, md: 160 },
    height: { xs: 80, sm: 120, md: 160 },
    bgcolor: '#e9edc9',
    borderRadius: 2
  },
  centerLogoBox: {
    width: { xs: 80, sm: 120, md: 160 },
    height: { xs: 80, sm: 120, md: 160 },
    bgcolor: '#1B3B27',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
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
  content: {
    maxWidth: 900,
    mx: 'auto',
    px: { xs: 2, sm: 4 }
  },
  title: {
    color: '#1B3B27',
    fontSize: { xs: '28px', sm: '32px', md: '36px' },
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 4
  },
  paragraph: {
    color: '#555',
    fontSize: { xs: '14px', sm: '16px' },
    lineHeight: 1.8,
    mb: 3,
    '&:last-child': {
      mb: 0
    }
  }
}; 