import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ProductList from '../views/ProductList';
import { Items } from '../database/Database';

const Search = () => {

    return (
      <View>
        <TextInput style={styles.searchInput} value='Hello World' />
        <ProductList items={Items} />
       </View>
    );
  }

  const styles = StyleSheet.create({
    searchInput: {
        padding: 10
    },
  }) 
export default Search 