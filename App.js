import * as React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import ProfileScreen from './components/screens/Profile';
import LoginScreen from './components/screens/Login';
import SignUpScreen from './components/screens/SignUp';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import SeeAll from './components/screens/SeeAll';
import Search from './components/screens/Search';
import { StatusBar } from 'expo-status-bar';
import { useState , useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
  );
}
function SearchScreen() {
  
  return (
    <View style={styles.container}>
      <Text>search screen 
        </Text>
        </View>
  );
}

function MyTabs() {

  const getLogged = async () => {
    let isLogged = await AsyncStorage.getItem('isLogged');
    if(isLogged == null){
      setIsLogged(false);
      return false;
    }
    isLogged = JSON.parse(isLogged);
    setIsLogged(isLogged.isLogged);
    return isLogged.isLogged;
  };
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    getLogged();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Main" 
        component={HomeScreen}
        options={{ tabBarIcon: ({size, color}) => (<Icon name="home" color={color} size={size} />)}}
         />
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{
          tabBarIcon: ({size, color}) => (<Icon name="search" color={color} size={size} /> )}}/>
      <Tab.Screen 
        name="Profile" 
        component={isLogged?ProfileScreen:LoginScreen}
        options={{
          tabBarIcon: ({size, color}) => (<Icon name="user" color={color} size={size} /> )}}/>
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
