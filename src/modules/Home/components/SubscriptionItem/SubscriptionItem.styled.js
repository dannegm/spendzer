import styled from 'styled-components/native';
import Icon from '@/icons/Icon';
import { rems } from '@/utils/helpers/styles';

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.View`
  flex: none;
`;
const IconComponent = styled(Icon)`
  font-size: ${rems(2)};
`;

const LabelWrapper = styled.View`
  flex: 1;
  margin: 0 ${rems(1)};
`;
const LabelName = styled.Text`
  font-size: ${rems(1.2)};
`;
const LabelDescription = styled.Text`
  font-size: ${rems(0.75)};
  text-transform: uppercase;
`;

const HintWrapper = styled.View`
  flex-basis: 30%;
`;
const HintCost = styled.Text`
  font-size: ${rems(1)};
  text-align: right;
`;
const HintWhen = styled.Text`
  font-size: ${rems(0.6)};
  text-transform: uppercase;
  text-align: right;
`;

export {
  // breakline
  Wrapper,
  IconWrapper,
  IconComponent,
  LabelWrapper,
  LabelName,
  LabelDescription,
  HintWrapper,
  HintCost,
  HintWhen,
};
