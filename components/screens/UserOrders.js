import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import OrdList from '../views/OrdList';



const UserOrders = ({navigation, route}) => {
  const { orders } = route.params;
  const { user } = route.params;

   //const [orders, setOrders] = useState(route.params);

  // const getUsers = async () => {
  //   let users = await AsyncStorage.getItem('users');
  //   users = JSON.parse(users);
  //   setAllUsers(users);
    
  // };



 

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
     // getUsers();
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
              > Orders</Text>
        <OrdList items={orders}  navigateToDetail={navigation} user={user}/>
       
       </View>
    );
  }

export default UserOrders 