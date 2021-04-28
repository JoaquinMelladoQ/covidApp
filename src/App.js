import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './screen/Home';
import FlashMessage from 'react-native-flash-message';  
import RootNavigation from './routes/Root';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <FlashMessage 
        position="top" 
        canRegisterAsDefault
      />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
};

export default App;
      //<Home />
