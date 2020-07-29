import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Page1 from './pages/Page1';

const TemplateStack = createStackNavigator();

// TODO: Each module will have it's own navigation, list all the pages here
const Template = () => (
  <TemplateStack.Navigator>
    <TemplateStack.Screen name="Page1" component={Page1} />
  </TemplateStack.Navigator>
);

export default Template;
