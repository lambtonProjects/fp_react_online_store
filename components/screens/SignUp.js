import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onChangeName = (textValue) => {setName(textValue)};
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

              }}>SignUp</Text>
      <TextInput placeholder="Name"
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
               onChangeText={onChangeName} 
               value={name}/>

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

      <TextInput placeholder="Password"
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
                    // addUser to DB (orders []), 
                    //set Logged as true (+ user data) , 
         
                    navigation.navigate(('ProfileScreen'), {});
                    }}>SignUp</Text>
              </TouchableOpacity>

       </View>
    );
  }

export default SignUpScreen 