import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Input from '../../components/Input'

const styles = StyleSheet.create({
  container: {},
  text: {},
})

const UseState = ({ navigation }) => {
  return (
   <SafeAreaView>
     <Header iconCallback={() => navigation.openDrawer()}/>
     <Text style={styles.text}>Profile</Text>
     <Input 
       placeholder="Nombre"
     />
   </SafeAreaView> 
  )
}

export default UseState
