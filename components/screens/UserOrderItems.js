import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import UserOrderItemsList from '../views/UserOrderItemsList';



const UserOrderItems = ({navigation, route}) => {
  const { order } = route.params;
  const { user } = route.params;
  const { items } = route.params;


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
              > Items</Text>
        <UserOrderItemsList items={items}  navigateToDetail={navigation} user={user} order={order}/>
       
       </View>
    );
  }

export default UserOrderItems 