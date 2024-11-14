import { createTheme } from '@mui/material/styles';

/**
 * Creates a custom theme for the application.
 * 
 * @constant
 * @type {object}
 * @property {boolean} cssVariables - Indicates if CSS variables should be used.
 * @property {object} palette - Defines the color palette for the theme.
 * @property {object} palette.primary - Primary color settings.
 * @property {string} palette.primary.main - Main primary color.
 * @property {object} palette.secondary - Secondary color settings.
 * @property {string} palette.secondary.main - Main secondary color.
 * @property {object} palette.error - Error color settings.
 * @property {string} palette.error.main - Main error color.
 */
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#000000',
    },
    error: {
      main: '#ff1744',
    },
  },
});

export default theme;