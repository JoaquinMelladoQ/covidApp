import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './screen/Home'
import FlashMessage from 'react-native-flash-message'  

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#34495e' }}>
      <StatusBar barStyle={'dark-content'} />
      <Home />
      <FlashMessage 
        position="top" 
        canRegisterAsDefault
      />
    </SafeAreaView>
  );
};

export default App;
