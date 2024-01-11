import { View, Text ,TextInput,StyleSheet,FlatList,Image,StatusBar,TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import products from '../data/products';
import { value } from "../global_var/Globe";

import Productitemscreen from './Productitemscreen';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Scanscreen from './Scanscreen';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { productupdate } from '../helper/productUpdate';
import { UserType } from '../UserContext';


const Productscreen = () => {
  const navigation=useNavigation();
  const[val,setval]=useState();
  const { userId, setUserId }= useContext(UserType);
  const{productdata,setproductdata}=useContext(productupdate);
  const [selectedAddress,setSelectedAdress] = useState("");
  const [addresses, setAddresses] = useState([]);
  
 
    const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (userId) {
      fetchAddresses();
     
    
    }
  }, [userId, modalVisible]);
  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        value.base+`/addresses/${userId}`
      );
      const { addresses } = response.data;

      setAddresses(addresses);
      
     
    } catch (error) {
      console.log("error", error);
    }
  };

    
 
  return (
    <View style={styles.container}>
        <View style={{height:60,justifyContent:"center",alignItems:"center",backgroundColor:"white",marginTop:30,flexDirection:"row",borderRadius:10,marginHorizontal:3}}>
  <FontAwesome name="search" size={30} color="black" style={{marginLeft:10}}/>
  <TextInput value ="type here.." style={{justifyContent:"center",alignItems:"center",fontSize:20,width:300,backgroundColor:"white",borderRadius:10}}/>
<TouchableOpacity onPress={()=>{console.log(userId)}} >
  <Ionicons name="person" size={30} color="black" /></TouchableOpacity>
  </View>

  <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              padding: 10,
              backgroundColor: "#AFEEEE",
            }}
          >
            <Ionicons name="location-outline" size={24} color="black" />

            <Pressable>
            {selectedAddress ? (
                <Text>
                  Deliver to {selectedAddress?.name} - {selectedAddress?.street}
                </Text>
              ) : (
                <TouchableOpacity onPress={()=>{navigation.navigate("Address")}}>
                <Text style={{ fontSize: 13, fontWeight: "500" }}>
                    Add a Address
                </Text></TouchableOpacity>
              )}
            </Pressable>

            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </Pressable>

    <FlatList  data={productdata} showsVerticalScrollIndicator={false} renderItem={({item})=>(
     <TouchableOpacity style={{margin:8,borderRadius:10,backgroundColor:"#CDF5FD",padding:7}}onPress={()=>{

 navigation.navigate("item",item);
 
     }}><View style={{width:'50%'}}>
      <Image source={{uri:item.image}} style={styles.itemview}/>
        </View>
        <View style={{flexDirection:"row" ,justifyContent:"space-between"}}>
        <Text style={{fontWeight:"700",fontSize:15,}}>{item.name}</Text>
        <Text style={{fontWeight:"700",fontSize:15,}}>{item.price}/-</Text></View></TouchableOpacity> )
    
      
      } numColumns={2} contentContainerStyle={{}}/>

      <View style={{justifyContent:"flex-end",alignItems:"center"}}>
        <TouchableOpacity style={{position:'absolute',backgroundColor:"black",width:200,justifyContent:"center",alignItems:"center",height:40,borderRadius:10}}
        onPress={()=>{navigation.navigate("scan")}}>
          <Text style={{color:"white",fontSize:20}}>SCAN NOW</Text>
        </TouchableOpacity>
      </View>
        
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  itemview:{
    width:170,
    height:170,
    borderRadius:10
    
   
  }
});

export default Productscreen;