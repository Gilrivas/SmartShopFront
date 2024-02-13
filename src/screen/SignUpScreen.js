import { View, Text, StyleSheet, SafeAreaView, Image, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import CustomButton from '../components/CustomButton';
import InputComponent from '../components/inputComponent';
import CustomSubmitButton from '../components/CustomSubmitButton';
import { AuthContext } from '../context/AuthContext'
import GyroscopeComponent from '../components/GyroscopeComponent';

const SignUpScreen = () => {
    const {signUp} = useContext(AuthContext);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onConfirmPressed = () => {
        signUp(username, email, password, confirmPassword);
    };

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
                <Text style={styles.title}>Registro</Text>

                <View style={styles.inputsContainer}>
                    <InputComponent
                        placeholder="Name"
                        value={username}
                        setValue={setUserName}
                    />

                    <InputComponent
                        placeholder="Email"
                        value={email}
                        setValue={setEmail}
                    />

                    <InputComponent
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry
                    />

                    <InputComponent
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        setValue={setConfirmPassword}
                        secureTextEntry
                    />

                </View>
            </View>

            <CustomSubmitButton text='Enviar' onPress={onConfirmPressed}  />
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

export default SignUpScreen;
