import styled from 'styled-components/native';
import Icon from './Icon';
import { rems } from '@/utils/helpers/styles';

const HeaderIcon = styled(Icon)`
  margin-left: ${rems(1)};
  margin-right: ${rems(1)};
  font-size: ${rems(1.5)};
`;

export default HeaderIcon;
