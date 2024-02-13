import * as React from 'react';
import {StyleSheet, StatusBar } from 'react-native';


import AppNav from './src/navigation/AppNav';

export default function App() {
  return (
    <>
      <AppNav />
    </>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    marginTop:StatusBar.currentHeight,
   backgroundColor:' black',
  },
});




