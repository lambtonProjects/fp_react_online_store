import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


const ListItem = ({item}) => {
  
    return (
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
       <View style={styles.listItemTextGroup}>
       <Text style={styles.listItemText} numberOfLines={2}>Product Name{item.productName}</Text>
        <Text style={styles.listItemDescriptionText} numberOfLines={1}>Product Price: {item.productPrice}</Text>
        <Text style={styles.listItemDescriptionText} numberOfLines={1}>Category: {item.category}</Text>
       </View>
            
        </View>
      </TouchableOpacity>
    );
  };


const UserOrderItemsList = ({items}) => {
  console.log("DDD");
  console.log(items);

    
    return (
        <View>
          <FlatList data={items} renderItem={({item}) => <ListItem item={item}/>} />

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
        fontSize:14,
        textAlign:'left',
    }
  })

  export default UserOrderItemsList;