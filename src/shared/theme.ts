import { createTheme } from '@mui/material';

enum COLORS {
  YELLOW = '#ffba16',
  TURQUOISE = '#21b0a7',

  BLACK = '#222222',
  WHITE = '#ffffff',

  INFO = '#21b0a7',
  SUCCESS = '#66bb6a',
  WARNING = '#ffba16',
  ERROR = '#ff5722',
}

const yellowPalette = {
  primary: {
    main: COLORS.TURQUOISE,
    contrastText: COLORS.WHITE,
  },
  secondary: {
    main: COLORS.YELLOW,
    contrastText: COLORS.WHITE,
  },
  info: {
    main: COLORS.INFO,
    contrastText: COLORS.WHITE,
  },
  success: {
    main: COLORS.SUCCESS,
    contrastText: COLORS.WHITE,
  },
  warning: {
    main: COLORS.WARNING,
    contrastText: COLORS.WHITE,
  },
  error: {
    main: COLORS.ERROR,
    contrastText: COLORS.WHITE,
  },
  text: {
    primary: COLORS.BLACK,
  },
  background: {
    default: COLORS.WHITE,
  },
};

export const yellowTheme = createTheme({
  palette: {
    mode: 'light',
    ...yellowPalette,
  },
});
