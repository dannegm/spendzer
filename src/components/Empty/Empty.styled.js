import styled from 'styled-components/native';
import Icon from '@/icons/Icon';
import { rems } from '@/utils/helpers/styles';

const EmptyWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin: ${rems(1)};
`;

const EmptyIcon = styled(Icon)`
  color: #888;
  font-size: ${rems(5)};
`;

const EmptyText = styled.Text`
  font-family: Montserrat_400Regular;
  font-size: ${rems(1.4)};
  margin: ${rems(1)};
  color: #888;
`;

export {
  EmptyWrapper,
  EmptyIconWrapper,
  EmptyIcon,
  EmptyText,
}
