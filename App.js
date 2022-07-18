import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import ProfileScreen from './components/screens/Profile';
import LoginScreen from './components/screens/Login';
import SignUpScreen from './components/screens/SignUp';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import SeeAll from './components/screens/SeeAll';
import Search from './components/screens/Search';
import Admin from './components/screens/Admin';
import CustomersList from './components/screens/CustomersList';
import UserOrders from './components/screens/UserOrders';
import OrderDetails from './components/screens/OrderDetails';
import UserOrderItems from './components/screens/UserOrderItems';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { initializeApp } from "firebase/app";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBswUAtEYm7rp_66YJ_LXN2ns-xjgu9wJc",
  authDomain: "jsmanagment-15f9e.firebaseapp.com",
  projectId: "jsmanagment-15f9e",
  storageBucket: "jsmanagment-15f9e.appspot.com",
  messagingSenderId: "290004854452",
  appId: "1:290004854452:web:a57fa3359e0c48878119e1",
  measurementId: "G-3V7Y7J1QEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
global.user = {};
global.isLogged = false;
global.firstCheck = true;

const Tab = createBottomTabNavigator();

function HomeScreen() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SeeAll" component={SeeAll} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
      {/* <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="CustomersList" component={CustomersList} />
      <Stack.Screen name="UserOrders" component={UserOrders} />
      <Stack.Screen name="UserOrderItems" component={UserOrderItems} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />


    </Stack.Navigator>
  );
}


function MyTabs() {

  const getLogged = async () => {
    console.log("Calisti.....")
    let isLogged = await AsyncStorage.getItem('isLogged');
    if (isLogged == null) {
      setIsLogged(false);
      global.isLogged = false;
      return false;
    }
    isLogged = JSON.parse(isLogged);
    setIsLogged(isLogged.isLogged);
    setLoggedUser(isLogged.user)
    console.log(isLogged.user)
    global.user = isLogged.user;
    global.isLogged = isLogged.isLogged;
    return isLogged.isLogged;
  };
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState();
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    getLogged();
    console.log(getLogged())
  }, []);
  console.log("render tab")
  return (

    <Tab.Navigator >

      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{ tabBarIcon: ({ size, color }) => (<Icon name="home" color={color} size={size} />) }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (<Icon name="search" color={color} size={size} />)
        }} />


      <Tab.Screen
        name="Profile"
        // component={ProfileScreen}
        children={() => (!isLogged && isSignup) ?
          <SignUpScreen testProp={setIsLogged} isSignup={setIsSignup} /> :
          (global.firstCheck && isLogged || !global.firstCheck && (global.isLogged || isLogged)) ?
          <ProfileScreen testProp={setIsLogged} /> :
          <LoginScreen testProp={setIsLogged} isSignup={setIsSignup} />
        }
        options={{
          tabBarIcon: ({ size, color }) => (<Icon name="user" color={color} size={size} />)
        }} />


      {isLogged == true && global.user != undefined && global.user.name == "Admin" ?
        <Tab.Screen
          name="Admin"
          component={Admin}
          options={{ tabBarIcon: ({ size, color }) => (<Icon name="unlock" color={color} size={size} />) }}
        /> : null
      }


    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
