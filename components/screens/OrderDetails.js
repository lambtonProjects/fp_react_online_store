import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import ItemsList from '../views/ItemsList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  //blue: '#0043F9',
  blue: '#014C78',
  backgroundLight: '#D9D9D9',
  backgroundMedium: '#014C78',
  backgroundDark: '#777777',
};



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
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundDark,
                padding: 12,
                margin: 10,
                backgroundColor: COLOURS.backgroundLight,
                borderRadius: 12,
                
                width:40
              }}
            />
          </TouchableOpacity>
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