import React, { 
  useState, 
  useEffect, 
  useRef, 
} from 'react';
import { 
  View, StyleSheet, 
  Text, TextInput, 
  TouchableOpacity, 
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../config/colors.js';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    height: '40%',
    justifyContent: 'flex-end',
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
  inputFocusBorderColor: {
    borderColor: colors.orange,
  },
})

const Login = () => {
  const [userName, updateUserName] = useState('');
  const [userPassword, updateUserPassword] = useState(''); 
  const [focusNameInput, updateFocusNameInput] = useState(false);
  const [focusPasswordInput, updateFocusPasswordInput] = useState(false); 

  const passwordInputRef = useRef(null);
  MaterialIcon.loadFont();

  useEffect(() => {

  }, []) 

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <KeyboardAwareScrollView extraScrollHeight={20}>
        <View style={styles.inputsContainer}>
          <TextInput
            placeholder="Usuario"
            autoCapitalize="none"
            value={userName}
            onChangeText={name => updateUserName(name)}
            style={[
              styles.textInput,
              focusNameInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusNameInput(true)}
            onBlur={() => {
              updateFocusNameInput(false);
              passwordInputRef.current.focus();
            }}
          />
          <TextInput
            ref={passwordInputRef}
            placeholder="Password"
            autoCapitalize="none"
            value={userPassword}
            onChangeText={password => updateUserPassword(password)}
            style={[
              styles.textInput,
              focusPasswordInput && styles.inputFocusBorderColor,
            ]}
            onFocus={() => updateFocusPasswordInput(true)}
            onBlur={() => updateFocusPasswordInput(false)}
          />
          <TouchableOpacity
            onPress={() => loginCallback()}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Ingresar</Text>
            <MaterialIcon 
              name="login" 
              color={colors.white} 
              size={20} 
            />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Login;
