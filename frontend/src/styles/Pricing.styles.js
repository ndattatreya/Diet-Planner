export const styles = {
  section: {
    py: 8,
  },
  
  headerSection: {
    textAlign: 'center',
    mb: 6
  },

  title: { 
    color: '#1B3B27',
    fontSize: { xs: '28px', sm: '32px', md: '36px' },
    fontWeight: 700,
    mb: 2
  },

  subtitle: {
    color: '#555',
    fontSize: '16px',
    maxWidth: '900px',
    mx: 'auto',
    mb: 4,
    lineHeight: 1.6
  },

  toggleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: 4
  },

  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#93C926',
      '&:hover': {
        backgroundColor: 'rgba(147, 201, 38, 0.08)'
      }
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#93C926'
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#1B3B27'
    }
  },

  toggleLabels: {
    display: 'flex',
    alignItems: 'center',
    gap: 2
  },

  toggleText: {
    fontSize: '16px',
    fontWeight: 500,
    transition: 'color 0.3s ease'
  },

  comparisonSection: {
    bgcolor: 'white',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
  },

  tableHeader: {
    display: 'flex',
    bgcolor: '#1B3B27',
    p: 2,
    color: 'white'
  },

  tableTitle: {
    flex: 1,
    fontWeight: 600,
    fontSize: '18px',
    pl: 2
  },

  planTitles: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 2,
    width: '50%',
    textAlign: 'center'
  },

  planTitle: {
    fontWeight: 500,
    fontSize: '16px'
  },

  featureRow: {
    display: 'flex',
    borderBottom: '1px solid #E0E0E0',
    '&:last-child': {
      borderBottom: 'none'
    },
    p: 2
  },

  featureText: {
    flex: 1,
    color: '#1B3B27',
    fontSize: '16px',
    pl: 2
  },

  checkboxGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 2,
    width: '50%',
    textAlign: 'center'
  },

  checkboxCell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  checkIcon: {
    color: '#93C926',
    bgcolor: 'rgba(147, 201, 38, 0.1)',
    width: 24,
    height: 24,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px'
  },

  crossIcon: {
    color: '#FF5252',
    bgcolor: 'rgba(255, 82, 82, 0.1)',
    width: 24,
    height: 24,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px'
  },

  pricingCard: {
    bgcolor: 'white',
    borderRadius: 2,
    p: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
  },

  planHeader: {
    mb: 3
  },

  planType: {
    display: 'flex',
    gap: 2,
    justifyContent: 'center',
    bgcolor: '#1B3B27',
    borderRadius: '8px',
    p: 1,
    mb: 1
  },

  planTypeText: {
    color: 'white',
    fontSize: '14px',
    fontWeight: 500
  },

  savingBadge: {
    color: '#1B3B27',
    bgcolor: '#93C926',
    fontSize: '14px',
    fontWeight: 500,
    textAlign: 'center',
    py: 0.5,
    borderRadius: '4px'
  },

  cardTitle: {
    color: '#1B3B27',
    fontSize: '24px',
    fontWeight: 700,
    mb: 1
  },

  yearlyText: {
    color: '#555',
    fontSize: '14px',
    mb: 3
  },

  priceWrapper: {
    mb: 3
  },

  price: {
    color: '#1B3B27',
    fontSize: '36px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'baseline',
    gap: 1
  },

  priceUnit: {
    fontSize: '16px',
    color: '#555',
    fontWeight: 400
  },

  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mb: 4,
    flex: 1
  },

  featureItem: {
    color: '#555',
    fontSize: '14px',
    lineHeight: 1.6
  },

  premiumNote: {
    bgcolor: '#1B3B27',
    color: 'white',
    p: 2,
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: 1.6,
    mb: 3
  },

  chooseButton: {
    bgcolor: '#93C926',
    color: '#1B3B27',
    fontSize: '16px',
    fontWeight: 500,
    py: 1.5,
    textTransform: 'none',
    borderRadius: '8px',
    '&:hover': {
      bgcolor: '#84b522'
    }
  },

  toggleContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    bgcolor: 'rgba(147, 201, 38, 0.1)',
    borderRadius: '30px',
    p: 1,
    px: 3
  },

  toggleOption: {
    fontSize: '16px',
    transition: 'all 0.3s ease'
  },

  savingsText: {
    color: '#93C926',
    fontSize: '14px',
    fontWeight: 500,
    mt: 1
  },

  switch: {
    '& .MuiSwitch-switchBase': {
      color: '#1B3B27',
      '&.Mui-checked': {
        color: '#93C926',
        '& + .MuiSwitch-track': {
          backgroundColor: '#93C926'
        }
      }
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#1B3B27'
    }
  }
}; 