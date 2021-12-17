import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey, teal } from '@mui/material/colors';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            light: '#2f3542',
            main: '#282c35',
            dark: '#1b1e26',
            contrastText: '#e6e6e6',
          },
          divider: deepOrange[700],
          background: {
            default: '#2f3542',
            paper: teal,
          },
          secondary: teal,
          text: {
            primary: '#e6e6e6',
            secondary: grey[500],
          },
        }),
  },
});

export default getDesignTokens;
