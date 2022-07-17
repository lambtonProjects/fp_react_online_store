import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';


const ListItem = ({item,  onTouch}) => {
    return (
      <TouchableOpacity style={styles.listItem} onPress={() => onTouch(item)}>
        <View style={styles.listItemView}>
       <View style={styles.listItemTextGroup}>
        <Text style={styles.listItemText} numberOfLines={1}>Order ID: {item.orderID}</Text>
       </View>
            
        </View>
      </TouchableOpacity>
    );
  };


const OrdList = ({navigateToDetail, items, user}) => {
  //todo add change status button
    return (
        <View>
          <FlatList data={items} renderItem={({item}) => <ListItem item={item} onTouch={(item) => navigateToDetail.navigate('UserOrderItems', {items: item.orderItems, user: user, order: item.orderID})} />} />

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

  export default OrdList;