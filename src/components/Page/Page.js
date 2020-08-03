import React from 'react';
import PropTypes from 'prop-types';
import { PageWrapper } from './Page.styled';

const Page = ({children }) => (
  <PageWrapper>
    {children}
  </PageWrapper>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
