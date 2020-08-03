import React from 'react';
import PropTypes from 'prop-types';

import { FieldWrapper, FieldLabel, FieldContent } from './Field.styled';

const Field = ({ label, children }) => (
  <FieldWrapper>
    {!!label && <FieldLabel>{label}</FieldLabel>}
    <FieldContent>{children}</FieldContent>
  </FieldWrapper>
);

Field.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Field.defaultProps = {
  label: '',
};

export default Field;
