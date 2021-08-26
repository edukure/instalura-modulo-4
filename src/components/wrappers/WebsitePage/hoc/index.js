/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

const websitePageHOC = (PageComponent, { pageWrapperProps }) => (props) => (
  <WebsiteGlobalProvider>
    <WebsitePageWrapper {...pageWrapperProps}>
      <PageComponent {...props} />
    </WebsitePageWrapper>
  </WebsiteGlobalProvider>
);

export default websitePageHOC;
