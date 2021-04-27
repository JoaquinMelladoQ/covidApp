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
  keyboardType = 'default',
  placeholder, 
  value,
  onChangeText = () => {},
  autoCapitalize,
  autoCorrect,
  placeholderTextColor = 'gray',
  style,
}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={style}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  )
}

export default Input
