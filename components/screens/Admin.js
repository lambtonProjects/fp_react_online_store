import React,{useEffect, useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Admin = ({navigation}) => {



  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("keyword......")

    });

    
    return unsubscribe;
  }, [navigation]);

  
    return (
      <View>
        <TextInput style={styles.searchInput} placeholder='Product Name'  />
       </View>
    );
  }

  const styles = StyleSheet.create({
    searchInput: {
        padding: 10
    },
  }) 
export default Admin 