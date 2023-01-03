import { createTheme } from '@mui/material';
import { COLORS } from './colors';

const palette = {
  primary: {
    main: COLORS.TURQUOISE,
    contrastText: COLORS.WHITE,
  },
  secondary: {
    main: COLORS.GRAY,
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

export const theme = createTheme({
  palette: {
    mode: 'light',
    ...palette,
  },
});
