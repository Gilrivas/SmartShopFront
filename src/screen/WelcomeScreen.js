import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import GyroscopeComponent from '../components/GyroscopeComponent';
import CustomButton from '../components/CustomButton';

const WelcomeScreen = () => {
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0 });
  const [movementFactor, setMovementFactor] = useState(1.5); // Factor de movimiento

  const handleGyroscopeData = ({ x, y }) => {
    setGyroscopeData({ x, y });
  };


  return (
    <ImageBackground
      source={require('../assets/img/bg.jpg')}
      style={[styles.background, {
        transform: [
          { translateX: gyroscopeData.y * movementFactor }, // Ajustar la velocidad horizontal
          { translateY: gyroscopeData.x * movementFactor * 2  }, // Ajustar la velocidad vertical
        ]
      }]}
      resizeMode="cover"
    >

      <View style={styles.titleContainer}>
        <Text style={styles.title}>SmartSHOP</Text>

      </View>

      <GyroscopeComponent onGyroscopeData={handleGyroscopeData} />

      <CustomButton destination="Login" parameter="Login" />
      <CustomButton destination="SignUp" parameter="SignUp" />
      

    </ImageBackground>
  );
};

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
