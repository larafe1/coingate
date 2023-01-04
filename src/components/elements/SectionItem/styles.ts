import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  Wrapper: {
    width: '6rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer'
  },
  Text: {
    display: 'flex',
    justifyContent: 'center',
    transition: 'all 0.2s ease',

    '&:hover': {
      padding: '0.2rem',
      borderRadius: '5px',
      color: theme.colors.text,
      backgroundColor: theme.colors.gray[1]
    }
  },
  Underline: {
    width: '100%',
    height: '2px',
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.colors.shapeDark
  }
}));
