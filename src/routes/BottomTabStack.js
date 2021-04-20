import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './HomeStack'
import World from '../screen/World'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import colors from '../config/colors'

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const BottomTabs = createBottomTabNavigator()

const BottomNavigation = () => (
  <BottomTabs.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: colors.darkBlue,
      inactiveTintColor: colors.ice
    }}
  >
    <BottomTabs.Screen 
      name="Home" 
      component={HomeNavigation}
      options={{
        tabBarIcon: ({
          focused,
          size,
          color,
        }) => {
          Icon.loadFont()
          const iconSize = focused ? 40 : 35
          return (
            <View style={styles.icon}>
              <Icon 
                name="home" 
                color={color}
                size={iconSize}
              />
            </View>  
          )
        }
      }}
    />
    <BottomTabs.Screen 
      name="World" 
      component={World}
      options={{
        tabBarIcon: ({ focused, size, color }) => {
          Fontisto.loadFont()
          const iconSize = focused ? 30 : 25
          return (
           <View style={styles.icon}>
             <Fontisto name="world" color={color} size={iconSize} />
           </View> 
          )
        }
      }}
    />
  </BottomTabs.Navigator>
)

export default BottomNavigation
