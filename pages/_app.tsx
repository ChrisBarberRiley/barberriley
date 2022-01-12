import { deepOrange, grey, teal } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import ThemeContext from '../context/context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(true);

  const theme = createTheme({
    palette: {
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
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
