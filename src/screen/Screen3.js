import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  text: {
    fontSize: 25,
    color: colors.white,
    fontWeight: 'bold',
  },
})

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen3</Text>
    </View>
  )
}

export default Screen3
