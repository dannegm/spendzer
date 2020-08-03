import React from 'react';

import CreateSubscription from './CreateSubscription';

import HeaderIcon from '@/icons/HeaderIcon';

import headerStyles from '@/styles/navitationHeaderStyles';

const navigator = (Stack) => (
  <Stack.Screen
    key="home.subscriptions.create"
    name="home.subscriptions.create"
    component={CreateSubscription}
    options={({ navigation }) => ({
      ...headerStyles,
      title: 'Nueva Suscripción',
      headerLeft: () => (
        <HeaderIcon name="arrow-back-outline" onPress={() => navigation.goBack()} />
      ),
    })}
  />
);

export default navigator;
