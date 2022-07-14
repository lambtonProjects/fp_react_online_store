import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import ItemsList from '../views/ItemsList';



const OrderDetails = ({navigation, route}) => {

  const { orderItems } = route.params;

  // const getLogged = async () => {
  //   let isLogged = await AsyncStorage.getItem('isLogged');
  //   isLogged = JSON.parse(isLogged);
  //   if(isLogged.isLogged === false){
  //     navigation.navigate('LoginScreen');
  //     return;
  //   }
  //   setCurrUser(isLogged.user);

  //   return isLogged.user;
  // };


  //  const [user, setCurrUser] = useState({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //getLogged();
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
        <ItemsList items={orderItems}/>
        
       </View>
    );
  }

export default OrderDetails 