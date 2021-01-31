import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import { useApollo } from '../apis/apolloClient';
import GlobalStyle from '../assets/styles/global-style';
import { TodoProvider } from '../context/todo-context';
import Router, { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="itez" />
        <meta name="robots" content="noindex, nofollow" />
        <title>타입스크립트투두</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <TodoProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </TodoProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
