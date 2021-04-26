import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Input from '../../components/Input'

const styles = StyleSheet.create({
  container: {},
  text: {},
})

const UseState = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  //console.log({ name });
  
  return (
   <SafeAreaView>
     <Header iconCallback={() => navigation.openDrawer()}/>
     <Text style={styles.text}>Profile</Text>
     <Input 
       placeholder="Nombre"
       value={name}
       onChangeText={(newName) => setName(newName)}
       autoCapitalize="words"
     />
     <Input 
       autoCorrect={false}
       autoCapitalize="none"
       placeholder="Correo"
       value={email}
       onChangeText={(newEmail) => setEmail(newEmail)}
       keyboardType="email-address"
     />
   </SafeAreaView> 
  )
}

export default UseState
