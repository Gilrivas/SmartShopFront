import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [username, setUsername] = useState(null); // Nuevo estado para almacenar el nombre de usuario
  
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('USER_TOKEN');
        setUserToken(token);
        setIsLoading(false);
      } catch (error) {
        console.error('Error retrieving token:', error);
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);



 
  const signUp = async (username, email, password, confirmPassword) => {
   
    if (password !== confirmPassword) {
      // Las contraseñas no coinciden, mostrar mensaje de error o realizar alguna acción adecuada
      console.log('Las contraseñas no coinciden');
      return;
    }

    const data = {
      user_name: username,
      user_email: email,
      user_password: password,
    };

    console.log(data);

    try {
      const response = await fetch('http://192.168.1.24:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        const responseData = await response.json();
        return 'success'; 

        
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


 const login = async (username, password) => {
    const data = {
      user_name: username,
      user_password: password,
    };

    try {
      const response = await fetch('http://192.168.1.24:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const { token, user_name  } = await response.json(); // Incluir el nombre de usuario en la respuesta
        await AsyncStorage.setItem('USER_TOKEN', token);
        setUserToken(token);
        
        setUsername(data.user_name); // Almacenar el nombre de usuario en el estado

      } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  const logout = async () => {
    await AsyncStorage.removeItem('USER_TOKEN');
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, login, logout, isLoading, userToken, username }}>
      {children}
    </AuthContext.Provider>
  );
};
