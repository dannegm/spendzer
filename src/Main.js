import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Template from './modules/Template';

const MainStack = createStackNavigator();

// TODO: Completely remove the Template screen from here, it's just an example, every module entry should be listed here
const Main = () => (
  <NavigationContainer>
    <MainStack.Navigator>
      <MainStack.Screen name="Template" component={Template} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default Main;
