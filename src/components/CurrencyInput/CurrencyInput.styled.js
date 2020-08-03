import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { rems } from '@/utils/helpers/styles';

const StyledTextInputMask = styled(TextInputMask)`
  flex: 1;
  font-size: ${rems(1.2)};
  border: 1px solid #000;
  border-radius: 3px;
  padding: ${rems(0.5)};
  margin: 0 ${rems(1)};
  text-align: center;
`;

export {
  StyledTextInputMask,
}
