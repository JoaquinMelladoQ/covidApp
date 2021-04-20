import React from 'react'
import { View, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './HomeStack'
import World from '../screen/World'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

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
          return (
            <View style={styles.icon}>
              <Icon 
                name="home" 
                color={color}
                size={40}
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
          return (
           <View style={styles.icon}>
             <Fontisto name="world" color={color} size={30} />
           </View> 
          )
        }
      }}
    />
  </BottomTabs.Navigator>
)

export default BottomNavigation
