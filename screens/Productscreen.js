import { View, Text ,TextInput,StyleSheet,FlatList,Image,StatusBar,TouchableOpacity, Pressable } from 'react-native'
import React from 'react';
import products from '../data/products';


import Productitemscreen from './Productitemscreen';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Productscreen = () => {
  const navigation=useNavigation();
 
  return (
    <View style={styles.container}>
        <View style={{height:60,justifyContent:"center",alignItems:"center",backgroundColor:"white",marginTop:30,flexDirection:"row",borderRadius:10,marginHorizontal:3}}>
  <FontAwesome name="search" size={30} color="black" style={{marginLeft:10}}/>
  <TextInput value ="type here.." style={{justifyContent:"center",alignItems:"center",fontSize:20,width:300,backgroundColor:"white",borderRadius:10}}/>
<TouchableOpacity onPress={()=>{navigation.navigate("info");}} >
  <Ionicons name="person" size={30} color="black" /></TouchableOpacity>
  </View>
    <FlatList  data={products} showsVerticalScrollIndicator={false} renderItem={({item})=>(
     <TouchableOpacity style={{margin:2,borderRadius:10}}onPress={()=>{
 navigation.navigate("item");
 
     }}><View style={{width:'50%'}}>
      <Image source={{uri:item.image,}} style={styles.itemview}/>
        </View></TouchableOpacity> )
    
      
      } numColumns={2} contentContainerStyle={{}}/>
        
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  
  },
  itemview:{
    width:200,
    height:200
    
   
  }
});

export default Productscreen;