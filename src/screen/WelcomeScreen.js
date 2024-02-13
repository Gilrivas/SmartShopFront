import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import CustomButton from '../components/CustomButton';




const WelcomeScreen = () => {
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0});
  const [movementFactor, setMovementFactor] = useState(1.5); // Factor de movimiento

  useEffect(() => {
    const subscription = Gyroscope.addListener(({ x, y, z }) => {
      setGyroscopeData({ x, y });
    });
  
    Gyroscope.setUpdateInterval(10);
  
    return () => {
      subscription.remove();
    };
  }, []);

  const handleIncreaseMovement = () => {
    setMovementFactor(prevFactor => prevFactor * 2); // Duplicar el factor de movimiento
  };

  const handleDecreaseMovement = () => {
    setMovementFactor(prevFactor => prevFactor / 2); // Reducir a la mitad el factor de movimiento
  };

  return (
    <ImageBackground 
      source={require('../assets/img/bg.jpg')} 
      style={[styles.background, {
        transform: [
          { translateX: gyroscopeData.y * movementFactor }, // Ajustar la velocidad horizontal
          { translateY: gyroscopeData.x * movementFactor }, // Ajustar la velocidad vertical
        ]
      } ]}
      resizeMode="cover"
    >
  
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SmartSHOP</Text>

      </View>

      <CustomButton destination="Home" parameter="Home" />
      <CustomButton destination="Sign In" parameter="Home" />
       
   

    </ImageBackground>

   
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch',    
    position: 'relative',

  
  },
  
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {
    fontSize: 48,
  },

});

export default WelcomeScreen;
