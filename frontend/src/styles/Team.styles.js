export const styles = {
  section: {
    py: { xs: 6, md: 8 },
    bgcolor: '#FFF5F5',
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
    maxWidth: 900,
    mx: 'auto',
    mb: 6,
    lineHeight: 1.8
  },
  tabsContainer: {
    bgcolor: '#1B3B27',
    borderRadius: 2,
    mb: 6
  },
  tabs: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#93C926'
    }
  },
  tab: {
    color: '#C5E1A5',
    textTransform: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    '&.Mui-selected': {
      color: 'white'
    }
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap: 3,
    mb: 8
  },
  teamMember: {
    bgcolor: '#E9EDC9',
    borderRadius: 2,
    overflow: 'hidden'
  },
  memberImage: {
    width: '100%',
    height: 280,
    objectFit: 'cover'
  },
  memberInfo: {
    p: 2,
    textAlign: 'center'
  },
  memberName: {
    color: '#1B3B27',
    fontWeight: 600,
    fontSize: '18px',
    mb: 0.5
  },
  memberPosition: {
    color: '#555',
    fontSize: '14px'
  },
  joinSection: {
    textAlign: 'center',
    maxWidth: 600,
    mx: 'auto',
    mt: 8
  },
  joinTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 2
  },
  joinDescription: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.8,
    mb: 3
  },
  applyButton: {
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