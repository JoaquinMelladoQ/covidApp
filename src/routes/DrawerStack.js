import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './BottomTabStack';
import ScreenNavigator from './ScreensStack';
import MenuContent from '../screen/Menu/MenuContent';

const styles = StyleSheet.create({
  drawerContainer: {
    marginVertical: 100,
    padding: 5,
    borderRadius: 10,
  },
});

const MenuDrawer = createDrawerNavigator();

const DrawerNavigator = props => (
  <MenuDrawer.Navigator
    drawerStyle={styles.drawerContainer}
    drawerContent={MenuContent}>
    <MenuDrawer.Screen name="BotomNavigator" component={BottomNavigation} />
    <MenuDrawer.Screen name="ScreenNavigator" component={ScreenNavigator} />
  </MenuDrawer.Navigator>
);

export default DrawerNavigator;
