import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import { useMemo, useState } from 'react';
import ThemeContext from '../context/context';
import getDesignTokens from '../src/theme';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(true);

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode ? 'dark' : 'light')),
    [mode],
  );

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
