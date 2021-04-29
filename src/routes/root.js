import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import ScreenNavigator from './ScreensStack';
//import BottomNavigation from './BottomTabStack';
import DrawerNavigator from './DrawerStack';
import LoginNavigator from './LoginStack';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="LoginNavigator" component={LoginNavigator} />
      <RootStack.Screen name="MenuLateral" component={DrawerNavigator} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
//      <RootStack.Screen name="BottomTabs" component={BottomNavigation} />
      //<RootStack.Screen name="Screens" component={ScreenNavigator} />
