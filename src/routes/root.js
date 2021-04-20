import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screen/Screen1'

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Screen1" component={Screen1} />
    </RootStack.Navigator>
  </NavigationContainer>
)

export default RootNavigation
