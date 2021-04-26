import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import colors from '../config/colors'
import Header from '../components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue,
  },
  text: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
  },
})

const Screen1 = ({ navigation }) => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Screen1</Text>
        <Button 
          color={colors.white}
          onPress={() => navigation.navigate('Screen2')}
          title="navegar" 
        />
      </View>
    </>
  )
}

export default Screen1
