import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const InputComponent = () => {
  const [text, setText] = useState('');

  const handleChangeText = newText => {
    setText(newText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe aquí..."
        value={text}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default InputComponent;