import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import theme from '../src/theme';
import client from '../src/client';
import '../styles/globals.css';

function MyApp(props) {
  const { Component, pageProps } = props;

  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
