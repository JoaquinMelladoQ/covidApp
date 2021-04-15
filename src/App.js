import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#34495e' }}>
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

export default App;
