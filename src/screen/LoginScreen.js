import { View, Text, StyleSheet, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import CustomButton from '../components/CustomButton';
import InputComponent from '../components/inputComponent';
import CustomSubmitButton from '../components/CustomSubmitButton';
import { AuthContext } from '../context/AuthContext'
import GyroscopeComponent from '../components/GyroscopeComponent';

const LoginScreen = () => {
    const {login} = useContext(AuthContext);
  
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0 });
    const [movementFactor, setMovementFactor] = useState(1.5); // Factor de movimiento
  
    const handleGyroscopeData = ({ x, y }) => {
      setGyroscopeData({ x, y });
    };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={[styles.container, {
        transform: [
          { translateX: gyroscopeData.y * movementFactor }, // Ajustar la velocidad horizontal
          { translateY: gyroscopeData.x * movementFactor * 2 }, // Ajustar la velocidad vertical
        ]
      }]}>
          <GyroscopeComponent onGyroscopeData={handleGyroscopeData} />
        <CustomButton css={styles.btn} goBack />
            <View style={styles.body}>
                <Text style={styles.title}>Login</Text>

                <View style={styles.inputsContainer}>
                    <InputComponent
                        placeholder="Username"
                        value={username}
                        setValue={setUserName}
                    />

                    <InputComponent
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry
                    />

                   

                </View>
            </View>

            <CustomSubmitButton text='Enviar' onPress={() => {login(username, password)}}  />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Ajusta el ancho a tu preferencia
  },
  title: {
    color: 'black',
    marginVertical: 15,
    fontSize: 34,
    fontWeight: 'bold',
  },
  btn: {
    position: 'absolute',
    top: 50,
    left: 10,
    width: 50,
  },
  inputsContainer: {
    width: '70%',
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
