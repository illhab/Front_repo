import type {AppProps} from 'next/app';
import Head from 'next/head';

import {globalStyles} from '@/styles/globalStyle';
import {Global} from '@emotion/react';
import {ThemeProvider} from '@mui/material';
import {createTheme} from '@/theme';

export default function App({Component, pageProps}: AppProps) {
  const theme = createTheme();

  return (
    <>
      <Head>
        <title>ILLHAB</title>
      </Head>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
