import React from 'react';
import { View, Text, SafeAreaView } from 'react-native'
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
      <RootStack.Screen 
        name="Screen1" 
        component={Screen1} 
        options={{
          header: () => (
            <SafeAreaView>
              <Text>Header screen 1</Text>
            </SafeAreaView>
          )
        }}
      />
      <RootStack.Screen 
        name="Screen2" 
        component={Screen2} 
        options={{
          header: () => (
            <SafeAreaView>
              <Text>Header screen 2</Text>
            </SafeAreaView>
          )
        }}
      />
      <RootStack.Screen 
        name="Screen3" 
        component={Screen3} 
        options={{
          header: () => (
            <SafeAreaView>
              <Text>Header screen 3</Text>
            </SafeAreaView>
          )
        }}
      />
    </RootStack.Navigator>
  </NavigationContainer>
)

export default RootNavigation
