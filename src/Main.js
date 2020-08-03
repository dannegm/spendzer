import React from 'react';
import { AppLoading } from 'expo';

import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { Eva_Fill, Eva_Outline } from './icons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Home from './modules/Home';

const MainStack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="home" component={Home} />
    </MainStack.Navigator>
  </NavigationContainer>
);

const Main = () => {
  let [ fontsLoaded ] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Eva_Fill,
    Eva_Outline,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigation />;
};

export default Main;
