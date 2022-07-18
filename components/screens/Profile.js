import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import OrdersList from '../views/OrdersList';
import { useNavigation } from '@react-navigation/native';



const ProfileScreen = ({navigation,testProp}) => {
  navigation=useNavigation();
  const getLogged = async () => {
    let isLogged = await AsyncStorage.getItem('isLogged');
    isLogged = JSON.parse(isLogged);
    if(isLogged.isLogged === false){
      // navigation.navigate('LoginScreen');
      global.isLogged=false;
      testProp(false)
      setisl
      return;
    }
    updateLoggedUser();
    //setCurrUser(isLogged.user);

    return isLogged.user;
  };

  const updateLoggedUser = async () => {
    let isLogged = await AsyncStorage.getItem('isLogged');
    isLogged = JSON.parse(isLogged);
    let usersArray = await AsyncStorage.getItem('users');
    usersArray = JSON.parse(usersArray);
    var array = usersArray;
    const index = array.findIndex(object => {return object.email === isLogged.user.email});
    var user = array[index];
    setCurrUser(user);
    var newUser = {isLogged: true, user: user};
    await AsyncStorage.setItem('isLogged', JSON.stringify(newUser));

    

  };

   const [user, setCurrUser] = useState({});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getLogged();
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
        <Text style={{
                textAlign:'center',
                alignItems: 'center',
                alignContent: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                margin:10
              }}> Hi {user.name}!</Text>
        <Text style={{
                textAlign:'center',
                alignItems: 'center',
                alignContent: 'center',
                fontSize: 20,
                margin:10
              }}
              > My Orders</Text>
        <OrdersList items={user.orders}  navigateToDetail={navigation}/>
        <View style={{alignItems: 'center',
                alignContent: 'center',}}>
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
        
       </View>
    );
  }

export default ProfileScreen 