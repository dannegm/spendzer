import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import useCurrency from '@/utils/hooks/useCurrency';
import { $currency } from '@/utils/helpers/filters';

import Card from '@/components/Card';
import { setList } from '@/icons/Icon';

import {
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
} from './SubscriptionItem.styled';

const SubscriptionItem = (props) => {
  const fromNow = moment(props.startDate).fromNow();

  const { rates } = useCurrency();
  const realCost = props.cost / rates[props.currency];

  return (
    <Card color={props.color}>
      <Wrapper>
        <IconWrapper>
          <IconComponent name={props.icon} />
        </IconWrapper>
        <LabelWrapper>
          <LabelName>{props.name}</LabelName>
          {props.description !== '' &&
            <LabelDescription>{props.description}</LabelDescription>
          }
        </LabelWrapper>
        <HintWrapper>
          <HintCost>
            {realCost ? $currency(realCost) : '--'}
          </HintCost>
          <HintWhen>
            {fromNow}
          </HintWhen>
        </HintWrapper>
      </Wrapper>
    </Card>
  );
};

SubscriptionItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  cost: PropTypes.number.isRequired,
  startDate: PropTypes.string.isRequired,
  currency: PropTypes.oneOf(['MXN', 'USD']),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.number)]).isRequired,
  icon: PropTypes.string.isRequired,
};

SubscriptionItem.defaultProps = {
  description: '',
};

export default SubscriptionItem;
