import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';

import AppStack from './AppStack.js';

const AppNav = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNav;
