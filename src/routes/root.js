import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screen/Screen1'
import Screen2 from '../screen/Screen2'
import Screen3 from '../screen/Screen3'

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator 
      initialRouteName="Screen1"
      headermod="screen"
    >
      <RootStack.Screen name="Screen1" component={Screen1} 
        options={{ header: () => (
          <View>
            <Text>Custom</Text>
          </View>
        ) }}
      />
      <RootStack.Screen name="Screen2" component={Screen2} />
      <RootStack.Screen name="Screen3" component={Screen3} />
    </RootStack.Navigator>
  </NavigationContainer>
)

export default RootNavigation
