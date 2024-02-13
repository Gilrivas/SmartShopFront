import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const CustomButton = ({destination, parameter, goBack  }) => {
const navigation = useNavigation();

  const handleNavigation = () => {
    if (goBack) {
        navigation.goBack();
      } else {
        navigation.navigate(destination, { parameter });
      }
  };

  return (
    <Pressable onPress={handleNavigation} style={styles.button}>
      <Text style={styles.text}>{destination}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
