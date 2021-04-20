import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenNavigator from './ScreensStack';
//import HomeNavigation from './HomeStack';
import BottomNavigation from './BottomTabStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="BottomTabs" component={BottomNavigation} />
      <RootStack.Screen name="Screens" component={ScreenNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
