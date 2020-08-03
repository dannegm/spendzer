import React from 'react';
import PropTypes from 'prop-types';
import { EmptyWrapper, EmptyIcon, EmptyIconWrapper, EmptyText } from './Empty.styled';

const Empty = ({ description }) => (
  <EmptyWrapper>
    <EmptyIconWrapper>
      <EmptyIcon set="outline" name="cube-outline" />
    </EmptyIconWrapper>
    <EmptyText>
      {description}
    </EmptyText>
  </EmptyWrapper>
);

Empty.propTypes = {
  description: PropTypes.string,
};

Empty.defaultProps = {
  description: 'Empty',
};

export default Empty;
