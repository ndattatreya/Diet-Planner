export const styles = {
  section: {
    py: { xs: 6, md: 8 },
    bgcolor: '#FAFAFA'
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
  storyGrid: {
    mt: 4
  },
  storyCard: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 3,
    height: '100%',
    bgcolor: 'white',
    borderRadius: 2,
    overflow: 'hidden'
  },
  storyImage: {
    width: { xs: '100%', sm: '40%' },
    height: { xs: 240, sm: 'auto' },
    objectFit: 'cover'
  },
  storyContent: {
    flex: 1,
    p: { xs: 2, sm: 3 },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  storyTitle: {
    color: '#1B3B27',
    fontWeight: 600,
    mb: 1
  },
  storyDescription: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.8
  }
}; 