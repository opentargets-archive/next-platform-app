import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import createEmotionCache from '../src/components/Layout/createEmotionCache';
import theme from '../src/theme';
import client from '../src/client';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ApolloProvider client={client}>
      <CacheProvider value={emotionCache}>
        <MuiThemeProvider theme={createTheme(theme)}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default MyApp;
