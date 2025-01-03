export const styles = {
  blogCard: {
    bgcolor: 'white',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    height: '100%'
  },
  blogImage: {
    width: '100%',
    height: { xs: 200, sm: 240 },
    objectFit: 'cover'
  },
  cardContent: {
    p: { xs: 2, md: 3 }
  },
  category: {
    color: 'primary.main',
    mb: 1,
    fontWeight: 600
  },
  blogTitle: {
    mb: 2,
    fontWeight: 'bold'
  },
  blogDescription: {
    color: 'text.secondary',
    mb: 3
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  authorAvatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    mr: 1
  },
  authorName: {
    fontWeight: 600
  },
  blogMeta: {
    color: 'text.secondary'
  },
  actionButtons: {
    display: 'flex',
    gap: 1
  },
  sectionContainer: {
    py: { xs: 6, md: 8 },
    px: { xs: 2, md: 0 },
    bgcolor: 'background.default'
  },
  sectionHeader: {
    textAlign: 'center',
    mb: { xs: 4, md: 6 }
  },
  sectionTitle: {
    mb: 2,
    fontWeight: 'bold',
    fontSize: { xs: '24px', sm: '32px', md: '36px' }
  },
  sectionDescription: {
    color: 'text.secondary',
    maxWidth: 800,
    mx: 'auto',
    fontSize: { xs: '14px', sm: '16px' },
    px: { xs: 2, md: 0 }
  }
}; 