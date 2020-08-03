import React from 'react';

import { FlatList } from 'react-native';

import Page from '@/components/Page';
import Empty from '@/components/Empty';

import SubscriptionItem from '../../components/SubscriptionItem';

import subscriptions from '@/mocks/subscriptions.json';

const Subscriptions = () => (
  <Page>
    {
      !subscriptions.length ? (
        <Empty description="Aún no tienes suscripciones" />
      ) : (
        <FlatList
          data={subscriptions}
          renderItem={({ item }) => (
            <SubscriptionItem {...item} />
          )}
          keyExtractor={item => item.itemId}
        />
      )
    }
  </Page>
);

export default Subscriptions;
