import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screen/WelcomeScreen'
import HomeScreen from '../screen/HomeScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    
    </Stack.Navigator>
  );
};

export default AuthStack;
