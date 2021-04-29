import React, { useState, } from 'react';
import { View, StyleSheet, Text } from 'react-native';
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
})

const Login = () => {
  const [user, updateUserName] = useState('');
  const [userPassword, updateUserPassword] = useState(''); 

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
    </>
  )
};

export default Login;
