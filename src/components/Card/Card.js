import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from './Card.styled';

const Card = ({ color, children }) => {
  return (
    <CardWrapper color={color}>
      {children}
    </CardWrapper>
  );
};

Card.propTypes ={
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.number
    ),
  ]),
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  color: '#FFFFFF',
};

export default Card;
