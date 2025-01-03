export const styles = {
  section: {
    py: { xs: 6, md: 8 },
  },
  mainTitle: {
    color: '#1B3B27',
    fontSize: { xs: '28px', sm: '32px', md: '36px' },
    fontWeight: 'bold',
    textAlign: 'center',
    mb: 2
  }, 
  subtitle: {
    color: '#555',
    fontSize: { xs: '14px', sm: '16px' },
    textAlign: 'center',
    maxWidth: 800,
    mx: 'auto',
    mb: 6
  },
  achievementsGrid: {
    mb: 6
  },
  achievementCard: {
    bgcolor: 'white',
    p: 4,
    borderRadius: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 2
  },
  iconWrapper: {
    bgcolor: '#E9EDC9',
    p: 1.5,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    color: '#1B3B27',
    fontSize: 28
  },
  achievementTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    fontSize: '20px'
  },
  achievementDescription: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.8
  },
  bottomSection: {
    textAlign: 'center',
    maxWidth: 800,
    marginTop: 10,
    mx: 'auto'
  },
  bottomTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 2
  },
  bottomDescription: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.8,
    mb: 4
  },
  demoButton: {
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