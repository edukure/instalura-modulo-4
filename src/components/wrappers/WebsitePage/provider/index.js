import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../theme';
import GlobalStyle from '../../../../theme/GlobalStyle';

const WebsiteMasterProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

WebsiteMasterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WebsiteMasterProvider;
