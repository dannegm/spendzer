import styled from 'styled-components/native';
import Icon from '@/icons/Icon';
import { rems } from '@/utils/helpers/styles';


const IconPickerWrapper = styled.TouchableOpacity`
  width: ${rems(4)};
  height: ${rems(4)};
  border-radius: ${rems(2)};
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
`;
const IconPickerIcon = styled(Icon)`
  font-size: ${rems(1.5)};
  color: #000;
`;

export {
  IconPickerWrapper,
  IconPickerIcon,
}
