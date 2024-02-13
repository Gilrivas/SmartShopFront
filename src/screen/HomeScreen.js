import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import CustomSubmitButton from '../components/CustomSubmitButton';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
  const { logout } = useContext(AuthContext);
  return (
    <SafeAreaView>
        <View style={styles.header}>
        <CustomSubmitButton text='logout' onPress={() => {logout()}} />
          <Text style={styles.title}>hello</Text>
            
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
      width: "100%",
      
      alignItems: 'center',
      justifyContent: 'center'
   
  },
  body:{
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   
  },

  title:{
      color: 'black',
      marginVertical: 15,
      fontSize: 34,
      fontWeight: 'bold',
  },

  text:{
      color: 'white',
      marginVertical: 10,
      fontSize: 12,
      
  },



});

export default HomeScreen