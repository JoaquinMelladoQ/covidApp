import React from 'react';
//import { useNavigation } from '@react-navigation/core'
import { View, Text, StyleSheet, Button } from 'react-native'
import colors from '../../config/colors'

const styles = StyleSheet.create({
  container: {},
})

const MenuContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Menú lateral</Text>
      <Button 
        color={colors.darkBlue}
        title="Navegar a Screens"
        onPress={() => navigation.navigate('ScreenNavigator')}
      />
      <Button 
        color={colors.darkBlue}
        title="Navegar a UseState"
        onPress={() => navigation.navigate('UseState')}
      />
    </View>
  )
}

export default MenuContent
