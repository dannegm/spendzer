import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import SubscriptionsNavigator from './pages/Subscriptions/navigator';
import CreateSubscriptionNavigator from './pages/CreateSubscription/navigator';

const HomeStack = createStackNavigator();

const pages = [
  SubscriptionsNavigator(HomeStack),
  CreateSubscriptionNavigator(HomeStack),
];

const Home = () => (
  <HomeStack.Navigator>
    {pages.map(page => page)}
  </HomeStack.Navigator>
);

export default Home;
