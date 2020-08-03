import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';

const StyledInput = styled.TextInput`
  flex: 1;
  font-size: ${rems(1)};
  text-align: right;
`;

const Input = ({ placeholder, value, onChange }) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (text) => {
    setInternalValue(text);
    onChange(text);
  };

  return <StyledInput placeholder={placeholder} value={internalValue} onChangeText={handleChange} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
