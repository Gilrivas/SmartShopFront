import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Login = () => {
  const handleLogin = async () => {
    try {
      // Envía una solicitud al backend para iniciar sesión con Google
      const response = await fetch('/auth/google');
      const data = await response.json();

      // Si la autenticación fue exitosa, realiza las acciones necesarias
      console.log(data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión con Google</Text>
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Login;
