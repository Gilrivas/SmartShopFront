import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screen/WelcomeScreen'
import SignUpScreen from '../screen/SignUpScreen';
import LoginScreen from '../screen/LoginScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    
    </Stack.Navigator>
  );
};

export default AuthStack;
