import React from 'react';
import ReactDOM from 'react-dom';

// global style theme
import { ThemeProvider } from 'styled-components';

// to apply global styles in all over our app with theme
import { GlobalStyles, theme } from './styles';

import App from './App';

// service worker
import { unregister } from './core';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// unregister function from service worker
unregister();
