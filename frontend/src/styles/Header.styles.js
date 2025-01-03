export const styles = {
  topBanner: {
    bgcolor: '#1B3B27',
    position: 'relative',
    overflow: 'hidden',
    display: { xs: 'none', md: 'block' }
  },
  bannerContent: {
    bgcolor: '#1F432D',
    mx: 'auto',
    my: 1,
    px: { xs: 2, md: 3 },
    maxWidth: 'fit-content',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 0,
    position: 'relative',
    zIndex: 1,
    fontSize: { xs: '0.8rem', md: '0.9rem' }
  },
  statusDot: {
    color: '#93C926',
    fontSize: 10
  },
  bannerText: {
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 500
  },
  bannerArrow: {
    color: 'white',
    fontSize: 18
  },
  decorativeLeaf: {
    position: 'absolute',
    height: '200%',
    opacity: 0.15,
    top: '50%',
    transform: 'translateY(-50%)'
  },
  navbar: {
    bgcolor: '#1B3B27',
    boxShadow: 'none',
    position: { xs: 'fixed', md: 'static' },
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1100,
    py: { xs: 1, md: 1 }
  },
  container: {
    px: { xs: 2, sm: 4, md: 6, lg: 4 }
  },
  toolbar: {
    justifyContent: 'space-between',
    py: { xs: 2, md: 0 },
    px: { xs: 3, md: 0 },
    minHeight: { xs: '64px', md: '64px' }
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
    width: 8,
    height: 8,
    bgcolor: '#93C926',
    borderRadius: '50%'
  },
  brandName: {
    color: 'white',
    fontWeight: 600,
    fontSize: '1.25rem'
  },
  navItems: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: 3
  },
  navLink: {
    color: '#C5E1A5',
    textTransform: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    padding: '6px 8px',
    minWidth: 'auto',
    '&:hover': {
      bgcolor: 'transparent',
      opacity: 0.85
    }
  },
  contactButton: {
    bgcolor: '#C5E1A5',
    color: '#1B3B27',
    textTransform: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    px: 3,
    py: 1,
    borderRadius: 2,
    '&:hover': {
      bgcolor: '#b4d290'
    }
  },
  mobileMenuButton: {
    display: { xs: 'block', md: 'none' },
    color: 'white',
    padding: 0
  },
  mobileMenu: {
    display: { xs: 'block', md: 'none' }
  }
}; 