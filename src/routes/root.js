import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNavigator from './ScreensStack';
//import BottomNavigation from './BottomTabStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <ScreenNavigator />
  </NavigationContainer>
);

export default RootNavigation;
