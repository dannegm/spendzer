import styled from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';

const CardWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({ color }) => color};
  padding: ${rems(1)};
  border-radius: 5px;
  margin: ${rems(1)};
  border: 1px solid #CECECE;
`;

export {
  CardWrapper,
}
