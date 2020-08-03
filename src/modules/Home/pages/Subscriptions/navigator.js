import React from 'react';

import Subscriptions from './Subscriptions';

import HeaderIcon from '@/icons/HeaderIcon';

import headerStyles from '@/styles/navitationHeaderStyles';

const navigator = (Stack) => (
  <Stack.Screen
    key="home.subscriptions"
    name="home.subscriptions"
    component={Subscriptions}
    options={({ navigation }) => ({
      ...headerStyles,
      title: 'Mis Subscripciones',
      headerRight: () => (
        <HeaderIcon name="plus" onPress={() => navigation.navigate('home.subscriptions.create')} />
      ),
    })}
  />
);

export default navigator;
