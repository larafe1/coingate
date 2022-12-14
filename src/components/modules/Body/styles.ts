import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  Wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7.5rem',

    '@media (max-width: 768px)': {
      marginTop: '6.5rem'
    }
  },
  MarketInfoWrapper: {
    width: '75%',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',

    '@media (max-width: 1585px)': {
      width: '90%'
    },
    '@media (max-width: 768px)': {
      flexWrap: 'wrap',
      gap: '2rem'
    },
    '@media (max-width: 400px)': {
      flexDirection: 'column',
      gap: '1.25rem',
      paddingLeft: '1rem'
    }
  },
  BadgeWrapper: {
    width: '7rem',
    marginTop: '0.5rem'
  }
}));
