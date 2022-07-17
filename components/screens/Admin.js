import React,{useEffect, useState} from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';


const Admin = ({navigation}) => {



  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("keyword......")

    });

    
    return unsubscribe;
  }, [navigation]);

  
    return (
      <View>
        <Button  title='Go To customers list'  onPress={() => navigation.navigate('CustomersList')}/>
       </View>
    );
  }

  const styles = StyleSheet.create({
    searchInput: {
        padding: 10
    },
  }) 
export default Admin 