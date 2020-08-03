import React from 'react';
import PropTypes from 'prop-types';

import { IconPickerWrapper, IconPickerIcon } from './IconPicker.styled';

const IconPicker = ({ icon, onPress }) => (
  <IconPickerWrapper onPress={onPress}>
    <IconPickerIcon name={icon} />
  </IconPickerWrapper>
)

IconPicker.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default IconPicker;
