import * as React from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function HomeScreen() {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
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
function ProfileScreen(){
  return (
    <View style={styles.container}>
      <Text>profile screen
        </Text>
        </View>
  );

}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
