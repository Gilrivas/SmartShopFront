import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const InputComponent = ({placeholder,value, setValue, secureTextEntry}) => {

  return (
    
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder= {placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={secureTextEntry} // Agrega esta línea para hacer que el input sea de tipo contraseña
    
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default InputComponent;