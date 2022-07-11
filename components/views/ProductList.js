import React, {useState} from 'react';
import { View, Text, Image, StyleSheet,TextInput, TouchableOpacity, Button, FlatList } from 'react-native';


const ListItem = ({item, deleteItem, onTouch}) => {
    return (
      <TouchableOpacity style={styles.listItem} onPress={() => onTouch(item)}>
        <View style={styles.listItemView}>
        <Image source={item.productImage}
       style={{width: 30, height: 30}} />
       <View style={styles.listItemTextGroup}>
        <Text style={styles.listItemText} numberOfLines={1}>{item.productName}</Text>
        <Text style={styles.listItemDescriptionText} numberOfLines={1}>Price: $ {item.productPrice}</Text>
       </View>
            
            {/* <Button title="X" color="#841584" onPress={() => deleteItem(item.id)} /> */}
        </View>
      </TouchableOpacity>
    );
  };


const ProductList = ({deleteItem, navigateToDetail, items}) => {
    
    return (
        <View>
            <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} onTouch={(item) => navigateToDetail.navigate('ProductInfo', {productID: item.id}
            )} />} />
        </View>
    );
  };


  const styles = StyleSheet.create({
    input: {
        height:60,
        padding:8,
        fontSize:16
    },
    navButtonsContainer: {
        flexDirection: "row",
      },
    listItem:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderColor:'#eee'
    },
    listItemView: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listItemTextGroup:{
        width:'85%'
    },
    listItemText:{
        fontSize:14,
        textAlign:'left',
        fontWeight:'bold'
    },
    listItemDescriptionText:{
        fontSize:12,
        textAlign:'left',
    }
  })

  export default ProductList;