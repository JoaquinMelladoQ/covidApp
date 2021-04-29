import React, { useState, } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import colors from '../../config/colors.js'

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    height: '40%',
    justifyContent: 'center',
  },
  headerText: {
    margin: 20,
    fontSize: 40,
    color: colors.white,
  },
  inputsContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    paddingTop: 10,
    borderWidth: 1,
    borderColor: colors.black,
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 19,
  },
})

const Login = () => {
  const [userName, updateUserName] = useState('');
  const [userPassword, updateUserPassword] = useState(''); 

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput 
          placeholder="Usuario"
          autoCapitalize="none"
          value={userName}
          onChangeText={(name) => updateUserName(name)}
          style={styles.textInput}
        />
        <TextInput 
          placeholder="Password"
          autoCapitalize="none"
          value={userPassword}
          secureTextEntry
          onChangeText={(password) => updateUserPassword(password)}
          style={styles.textInput}
        />
      </View>
    </>
  )
};

export default Login;
