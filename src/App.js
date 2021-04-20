import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './screen/Home'
import FlashMessage from 'react-native-flash-message'  
import RootNavigation from './routes/root'

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <FlashMessage 
        position="top" 
        canRegisterAsDefault
      />
      <RootNavigation />
    </>
  );
};

export default App;
      //<Home />
