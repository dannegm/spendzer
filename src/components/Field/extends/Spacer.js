import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';

const SpacerWrapper = styled.View`
  height: ${({ size }) => rems(size)};
`;

const Spacer = ({ size }) => <SpacerWrapper size={size} />;

Spacer.propTypes = {
  size: PropTypes.number,
};

Spacer.defaultProps = {
  size: 1,
};

export default Spacer;
