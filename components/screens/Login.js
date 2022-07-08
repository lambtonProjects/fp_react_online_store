import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onChangeEmail = (textValue) => {setEmail(textValue)};
  const onChangePassword = (textValue) => {setPassword(textValue)};
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
                    //todo 
                    // getUser from DB (if exist), 
                    //set Logged as true (+ user data) , 
                    //if not exist - show message
                    navigation.navigate(('ProfileScreen'), {});
                    }}>Login</Text>
              </TouchableOpacity>

       </View>
    );
  }

export default LoginScreen 