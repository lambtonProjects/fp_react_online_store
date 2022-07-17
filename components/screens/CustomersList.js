import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import CustList from '../views/CustList';



const CustomersList = ({navigation}) => {

  const [users, setAllUsers] = useState({});

  const getUsers = async () => {
    let users = await AsyncStorage.getItem('users');
    users = JSON.parse(users);
    setAllUsers(users);
    
  };

 

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUsers();
    });

    return unsubscribe;
  }, [navigation]);



    return (
      
      <View>
      
        <Text style={{
                textAlign:'center',
                alignItems: 'center',
                alignContent: 'center',
                fontSize: 20,
                margin:10
              }}
              > Customers</Text>
        <CustList items={users}  navigateToDetail={navigation}/>
       
       </View>
    );
  }

export default CustomersList 