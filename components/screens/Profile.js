import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import OrdersList from '../views/OrdersList';



const ProfileScreen = ({navigation}) => {


  // const getLogged = async () => {
  //   let isLogged = await AsyncStorage.getItem('isLogged');
  //   console.log(isLogged);
  //   if(isLogged == null){
  //     setIsLogged(false);
  //     return false;
  //   }
  //   isLogged = JSON.parse(isLogged);
  //   setIsLogged(isLogged.isLogged);

  //   return isLogged.isLogged;
  // };

  // getLogged();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  const setUnlogged = async () => {
    try {
      let unloggedUser = {isLogged: false, user: {}};
      await AsyncStorage.setItem('isLogged', JSON.stringify(unloggedUser));
      navigation.navigate('Home', {});
      global.user = {};
      global.isLogged = false;
    } catch (error) {
      return error;
    }
};

    return (
      
      <View>
        <Text> Hi {global.user.name}</Text>
        <Text> My Orders</Text>
        <OrdersList items={global.user.orders}  navigateToDetail={navigation}/>
        <TouchableOpacity style={{
                width: 100,
                height: 40,
                margin:20,
                borderColor: 'black',
                borderWidth: 1,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: true,
                borderRadius:30

              }}>
                  <Text style={{
                    textAlign: 'center',
                    fontSize:20,

                  }} onPress={() => {
                    setUnlogged();
                    }}>LogOut</Text>
              </TouchableOpacity>
       </View>
    );
  }

export default ProfileScreen 