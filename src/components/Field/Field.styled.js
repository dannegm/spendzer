import styled from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';

const FieldWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${rems(0.5)} 0;
`;

const FieldLabel = styled.Text`
  flex: none;
  width: 35%;
`;

const FieldContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export {
  FieldWrapper,
  FieldLabel,
  FieldContent,
}
