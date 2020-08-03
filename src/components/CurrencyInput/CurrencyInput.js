import React from 'react';
import PropTypes from 'prop-types';

import { StyledTextInputMask } from './CurrencyInput.styled';

const CurrencyInput = ({ value, onChange }) => (
  <StyledTextInputMask
    type="money"
    options={{
      precision: 2,
      separator: '.',
      delimiter: ',',
      unit: '$',
    }}
    value={value}
    onChangeText={onChange}
  />
);

CurrencyInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CurrencyInput;
