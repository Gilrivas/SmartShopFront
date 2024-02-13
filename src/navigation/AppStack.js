import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';


const Tab = createBottomTabNavigator();

const AppStack = () => {
 
    return (
   
        <Tab.Navigator screenOptions={{headerShown: false}}>
            
           <Tab.Screen name="Home" component={HomeScreen} />
          
          
  
        </Tab.Navigator>
      
    )
  }
  
  


export default AppStack