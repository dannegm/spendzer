import styled from 'styled-components/native';
import { rems } from '@/utils/helpers/styles';

const SafeAreaFull = styled.SafeAreaView`
  align-self: stretch;
  flex: 1;
`;

const CenteredRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${rems(0.5)} 0;
  margin: ${rems(0.5)} 0;
`;

export { SafeAreaFull, CenteredRow };
