import { View, Text ,StyleSheet,FlatList,Image,StatusBar,TouchableOpacity, Pressable } from 'react-native'
import React from 'react';
import products from '../data/products';


import Productitemscreen from './Productitemscreen';
import { useNavigation } from '@react-navigation/native';

const Productscreen = () => {
  const navigation=useNavigation();
 
  return (
    <View style={styles.container}>
    <FlatList  data={products} showsVerticalScrollIndicator={false} renderItem={({item})=>(
     <TouchableOpacity onPress={()=>{
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