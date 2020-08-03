import styled from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';

const Separator = styled.View`
  border: 0 solid rgba(0,0,0,0.2);
  border-bottom-width: 1px;
  margin: ${rems(0.5)} 0;
`;

export default Separator;
