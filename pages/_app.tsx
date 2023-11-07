import type {AppProps} from 'next/app';
import Head from 'next/head';

import {globalStyles} from '@/styles/globalStyle';
import {Global} from '@emotion/react';
import {Backdrop, CircularProgress, Theme, ThemeProvider} from '@mui/material';
import {createTheme} from '@/theme';

import {useLoadingStore} from '@/states/loading';

export default function App({Component, pageProps}: AppProps) {
  const theme = createTheme();
  const {loading} = useLoadingStore();

  return (
    <>
      <Head>
        <title>ILLHAB</title>
      </Head>
      <Global styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Backdrop
          sx={{
            color: '#fff',
            zIndex: (theme: Theme) => 99999,
          }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
