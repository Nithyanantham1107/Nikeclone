import { View, Text,StyleSheet,Image,ScrollView, SafeAreaView} from 'react-native'
import React, { useEffect } from 'react'
import { Feather } from "@expo/vector-icons";


const Cartscreen= ({item}) => {
    const increaseQuantity = () => {};

    const decreaseQuantity = () => {};


  return (
    <SafeAreaView style={styles.container}>
<View style={styles.imgcontainer}>
   <Image  style={styles.img}source={{uri:item.product.image}}/>

<View style={{ flexDirection:"col",}}>
<View style={{marginTop:5,}}><Text>{item.product.name}</Text>
<Text>{item.size}</Text></View>
<View style={{ flexDirection:"row", marginTop:75, }}>
<Feather
            onPress={increaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
           <Text style={{marginHorizontal:4}} >{item.quantity}</Text>
          <Feather
            onPress={decreaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          /></View>
</View>





    </View><Text style={{marginTop:115}}>{item.product.price}</Text></SafeAreaView>
  );
}


export default Cartscreen;
const styles = StyleSheet.create({
    container: {
     flex:1,
     flexDirection:'row',
    
     

  },img:{
    width:'50%',

    aspectRatio:1,
  },imgcontainer:{
    padding:14,
    flexDirection:'row',

  }
   
  });
  