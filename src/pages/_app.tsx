import { AppProps } from 'next/app'
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apis/apolloClient';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import GlobalStyle from '../assets/styles/global-style';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return <>
    <Head>
      <meta charSet="utf-8" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="description" content="itez" />
      <meta name="robots" content="noindex, nofollow" />
      <title>타이틀</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  </>
}

export default MyApp
