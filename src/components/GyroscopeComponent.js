import React, { useState, useEffect } from 'react';
import { Gyroscope } from 'expo-sensors';

const GyroscopeComponent = ({ onGyroscopeData }) => {
  useEffect(() => {
    const subscription = Gyroscope.addListener(({ x, y }) => {
      onGyroscopeData({ x, y });
    });

    Gyroscope.setUpdateInterval(10);

    return () => {
      subscription.remove();
    };
  }, []);

  return null; // Este componente no renderiza nada en la interfaz
};

export default GyroscopeComponent;