import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon, { setList } from '@/icons/Icon';
import { rems } from '@/utils/helpers/styles';

const TriggerWrapper = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

const TriggerIcon = styled(Icon)`
  font-size: ${rems(1.2)};
  color: #000;
`;

const Trigger = ({ icon, onTrigger }) => (
  <TriggerWrapper onPress={onTrigger}>
    <TriggerIcon name={icon} />
  </TriggerWrapper>
);

Trigger.propTypes = {
  icon: PropTypes.string.isRequired,
  onTrigger: PropTypes.func.isRequired,
};

export default Trigger;
