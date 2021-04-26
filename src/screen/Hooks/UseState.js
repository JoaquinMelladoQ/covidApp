import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../../components/Header'

const UseState = ({ navigation }) => {
  return (
   <SafeAreaView>
     <Header iconCallback={() => navigation.openDrawer()}/>
   </SafeAreaView> 
  )
}

export default UseState
