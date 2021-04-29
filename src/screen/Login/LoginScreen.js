import React, { useState, } from 'react';
import { 
  View, StyleSheet, 
  Text, TextInput, 
  TouchableOpacity, 
} from 'react-native';
import colors from '../../config/colors.js';
import Icon from 'react-native-vector-icons/AntDesign';

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
    padding: 10,
    borderWidth: 1,
    borderColor: colors.black,
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 19,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: colors.black,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
  },
  loginButtonText: {
    fontSize: 20,
    marginRight: 5,
    color: colors.white,
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
        <TouchableOpacity
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Ingresar</Text>
          <Icon 
            name="login"
            color={colors.white}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </>
  )
};

export default Login;
