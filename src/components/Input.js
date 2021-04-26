import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import colors from '../config/colors'

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderColor: colors.darkBlue,
  },
})

const Input = ({ 
  placeholder, 
  value,
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType="default"
      />
    </View>
  )
}

export default Input
