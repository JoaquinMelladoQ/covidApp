import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screen/Home'

const HomeStack = createStackNavigator()

const HomeNavigation = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
)

export default HomeNavigation
