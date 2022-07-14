import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  global.firstCheck = false;
  
  
  const onChangeEmail = (textValue) => {setEmail(textValue)};
  const onChangePassword = (textValue) => {setPassword(textValue)};

  const setLogged = async (user) => {
    try {
      let loggedUser = {isLogged: true, user: user};
      await AsyncStorage.setItem('isLogged', JSON.stringify(loggedUser));
      global.user = user;
      global.isLogged = true;
      global.firstCheck = false;
      navigation.navigate('ProfileScreen', {user: user})
      console.log(global.user)
    } catch (error) {
      return error;
    }
};


  const getUser = async () => {
    let users = await AsyncStorage.getItem('users');
    users = JSON.parse(users);
    let user = {};
    var found = false;
    if (users) {
      users.forEach(data => {
        if (data.email === email && data.password === password) {
          user = data;
          found = true;
          setLogged(data);
          return;
        }
         
    
      }); 
      if(!found){
        Toast.show('Email and/or Password are incorrect', {
            duration: Toast.durations.SHORT,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            shadow: true,
            animation: true
        });
      }
      
    } 
  };


    return (
      <View style={{
          alignItems: 'center',
      }}>
        <Text style={{
                flexDirection: 'row',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: 20,
                margin:20,

              }}>Login</Text>
      <TextInput placeholder="Email"
              style={{
                width: 300,
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
                textAlign: 'center',
                fontSize: 20,
                margin:20,

              }}
               onChangeText={onChangeEmail} 
               value={email}/>
      <TextInput secureTextEntry={true} 
                placeholder="Password"
                style={{
                  width: 300,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: 'black',
                  borderWidth: 1,
                  textAlign: 'center',
                  fontSize: 20,
                  margin:20,
              }} 
              onChangeText={onChangePassword} 
              value={password}/>

              <View style={{
                    flexDirection: "row",
                     alignContent: 'center',
                      justifyContent: true,
                  }}
                  >
                <Text style={{
                    fontSize:18,
                  }}>Don't have an account? </Text>
                <TouchableOpacity style={{
                }}>
                  <Text style={{
                    color: 'blue',
                    fontSize:18,
                  }} onPress={() => navigation.navigate(('SignUpScreen'), {})}>SignUp</Text>
                </TouchableOpacity>
              </View>
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
                    
                    getUser();

                    // getUser from DB (if exist), 
                    //set Logged as true (+ user data) , 
                    //if not exist - show message
                    // navigation.navigate(('ProfileScreen'), {});
                    }}>Login</Text>
              </TouchableOpacity>

       </View>
    );
  }

export default LoginScreen 