import React,{useEffect, useState} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ProductList from '../views/ProductList';
import { Items } from '../database/Database';

const Search = ({navigation}) => {

  const [keyword, setKeyword] = useState('');
  const[items, setItems] = useState([]);

  const onTextChanged = (text) => {
    setKeyword(text);
    setItems(Items.filter((item) => {
      return item.productName.includes(text);
    }));
    
  }


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // getDataFromDB();
      setItems(Items)
      console.log("keyword......")

    });

    
    return unsubscribe;
  }, [navigation]);

  
    return (
      <View>
        <TextInput style={styles.searchInput} placeholder='Product Name' value={keyword} onChangeText={(item) => { onTextChanged(item)  }} />
        <ProductList items={items}  navigateToDetail={navigation}/>
       </View>
    );
  }

  const styles = StyleSheet.create({
    searchInput: {
        padding: 10
    },
  }) 
export default Search 