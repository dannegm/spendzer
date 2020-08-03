import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';

const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
  padding: ${rems(1)};
  border: 1px solid rgba(0,0,0,0.5);
  border-radius: 3px;
`;

const ButtonLabel = styled.Text`
  font-size: ${rems(1)};
  text-align: center;
  text-transform: uppercase;
`;

const Button = ({ label, onPress }) => (
  <ButtonWrapper onPress={onPress}>
    <ButtonLabel>{label}</ButtonLabel>
  </ButtonWrapper>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
