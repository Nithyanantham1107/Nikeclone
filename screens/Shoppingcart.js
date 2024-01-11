import { View, Text,StyleSheet, TouchableOpacity ,FlatList} from 'react-native'
import React from 'react'
import Cartscreen from './Cartscreen';
import cart from '../data/cart';
import CartListItem from './CartListItem';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Shoppingcart = () => {
  
  const navigation=useNavigation();
  return (

    <View style={styles.container}>
       <TouchableOpacity
 onPress={()=>{navigation.navigate("home")}}
 ><Ionicons name="arrow-back" size={30} style={{marginRight:350,marginTop:20,alignSelf:"flex-start"}} color="black" /></TouchableOpacity>
     <FlatList data={cart} renderItem={ ({item})=>(
      <Cartscreen item={item}/>
  )}
  ListFooterComponent={<View style={{marginTop:10,padding:3}}>
      <View style={styles.footer}> 
   <Text style={{fontWeight:"600",fontSize:20}}>subtotal</Text>
   <Text style={{fontWeight:"600",fontSize:20}}>${160+169+129}</Text>
  
  
  </View>
   <View style={styles.footer}> 
   <Text style={{fontWeight:"600",fontSize:20}}>Delivery</Text>
   <Text style={{fontWeight:"600",fontSize:20}}>$100</Text>
  
  
  </View>
   <View style={styles.footer}> 
   <Text style={{fontWeight:"600",fontSize:20}}>total</Text>
   <Text style={{fontWeight:"600",fontSize:20}}>${100+160+169+129}</Text>
  
  
  </View></View>
}/>
<TouchableOpacity style={styles.button}>
  <Text style={{color:'white',fontWeight:400,fontSize:20}}> Check Out</Text>
</TouchableOpacity>
  
    </View>
  );
}

export default Shoppingcart;
const styles = StyleSheet.create({
    container: {
     flex:1,
    
  
     
    },
    footer:{
      flexDirection:"row",
      justifyContent:"space-between"
    },button:{
      backgroundColor:"black",
      padding:4,
      margin:10,
      height:40,
      alignItems:'center',
      justifyContent:'center',
      bottom:10, 
      width:"80%",
      alignSelf:'center',

      borderRadius:100,
   
  }
   
  });