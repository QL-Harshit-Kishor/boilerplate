import {SafeAreaView, Text, } from 'react-native';
import React from 'react';
import Assets from './assets';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{color: 'red', fontFamily: Assets.font.Satoshi.bold, fontSize: 18}}>Hello</Text>
      <Text style={{color: 'red', fontFamily: Assets.font.Roboto.bold, fontSize: 18}}>Hello</Text>
    </SafeAreaView>
  );
};

export default App;
