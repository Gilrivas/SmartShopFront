import { Pressable, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';


const CustomSubmitButton = ({text , onPress}) => {


  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    container:{
      backgroundColor: '#D9D9D9',
      width: '80%',
      padding: 15,
      marginVertical: 10,
      borderRadius: 20,
      alignItems: 'center',
      color: 'black',

    },
    text: {
        color: 'black',
       
       
    },
  });
  

export default CustomSubmitButton