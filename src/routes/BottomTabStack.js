import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './HomeStack'

const BottomTabs = createBottomTabNavigator()

const BottomNavigation = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="Home" component={HomeNavigation}/>
  </BottomTabs.Navigator>
)

export default BottomNavigation
