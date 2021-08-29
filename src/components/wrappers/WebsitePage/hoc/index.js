/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

const websitePageHOC = (
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) => (props) => (
  <WebsiteGlobalProvider>
    <WebsitePageWrapper
      {...pageWrapperProps}
      {...props.pageWrapperProps}
    >
      <PageComponent {...props} />
    </WebsitePageWrapper>
  </WebsiteGlobalProvider>
);

export default websitePageHOC;
