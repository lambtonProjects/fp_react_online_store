import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const updateStatus = async (user, orderID, status) => {

  try {
    let usersArray = await AsyncStorage.getItem('users');
    usersArray = JSON.parse(usersArray);
    var array = usersArray;
    const index = array.findIndex(object => {return object.email === user});
    var user = array[index];
    var orders = array[index].orders;
    var orderIndex = orders.findIndex(object => {return object.orderID === orderID});
    let updatedOrder = {orderID: orderID, orderStatus: status, orderItems: orders[orderIndex].orderItems };
    orders[orderIndex] = updatedOrder;
    let updatedUser = user;
    updatedUser.orders = orders;
    array[index] = updatedUser;

    await AsyncStorage.setItem('users', JSON.stringify(array));

  } catch (error) {
    return error;
  }
}



const ListItem = ({item,  onTouch, user}) => {
  const statuses = ["pending", "completed", "ready for shipment", "shipped"]
    return (
      <TouchableOpacity style={styles.listItem} onPress={() => onTouch(item)}>
        <View style={styles.listItemView}>
       <View style={styles.listItemTextGroup}>
        <Text style={styles.listItemText} numberOfLines={1}>Order ID: {item.orderID}</Text>
       </View>
       <SelectDropdown
	data={statuses}
	onSelect={(selectedItem, index) => {
		console.log(item.orderID, index);
    updateStatus(user, item.orderID, statuses[index]);
    
	}}
  defaultValueByIndex={(item.orderStatus === 'pending')? 0: ((item.orderStatus === 'completed')? 1: ((item.orderStatus === 'shipped')?3:2))}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
        </View>
      </TouchableOpacity>
    );
  };


const OrdList = ({navigateToDetail, items, user}) => {
    return (
        <View>
          <FlatList data={items} renderItem={({item}) => <ListItem item={item} user={user} onTouch={(item) => navigateToDetail.navigate('UserOrderItems', {items: item.orderItems, user: user, order: item.orderID})} />} />

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
        width:'40%'
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