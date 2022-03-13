import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme, UserDataProvider } from '@devlaunchers/utils';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to platform-website!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <UserDataProvider>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </UserDataProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
