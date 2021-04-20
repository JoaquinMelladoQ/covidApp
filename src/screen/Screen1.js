import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors'

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

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen1</Text>
    </View>
  )
}

export default Screen1
