import type { AppProps } from 'next/app';
import { useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(true);

  return <Component {...pageProps} />;
}

export default MyApp;
