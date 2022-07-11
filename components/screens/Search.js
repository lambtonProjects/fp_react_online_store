import React,{useEffect} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ProductList from '../views/ProductList';
import { Items } from '../database/Database';

const Search = ({navigation}) => {

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  
    return (
      <View>
        <TextInput style={styles.searchInput} placeholder='Product Name' />
        <ProductList items={Items}  navigateToDetail={navigation}/>
       </View>
    );
  }

  const styles = StyleSheet.create({
    searchInput: {
        padding: 10
    },
  }) 
export default Search 