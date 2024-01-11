import { View, Text,StyleSheet ,Image,FlatList,useWindowDimensions, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';


const Productitemscreen = () => {
  
    const product=products[0];
    const {Width}=useWindowDimensions();
    const navigation=useNavigation();
  return (

 <View style={{flex:1}} >
    
      <FlatList data={product.images} renderItem={({item})=>(<>
      
        <Image  style={styles.img}source={{uri:item,}}
        />

  
  </> )} horizontal  showsHorizontalScrollIndicator={false} pagingEnabled={true} />
  
<ScrollView style={{marginHorizontal:2}}>
  
  <Text style={styles.title}> {product.name}</Text>
  <Text style={styles.price}> {product.price} /.</Text>
 <Text style={styles.describe}> {product.description}</Text>
  </ScrollView>
  <TouchableOpacity style={styles.button} onPress={()=>{
    navigation.navigate("shop");

  }}>
    <Text style={{color:'white',fontWeight:'300'}}>Add To cart</Text>
  </TouchableOpacity>
 
   
 </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"black",
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
       width:300,
        aspectRatio:1,
        marginHorizontal:4,
        borderRadius:6
    },
    button:{
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
     
    },title:{
        fontSize:30,
    fontWeight:'300',
    
    },price:{fontSize:40,
        letterSpacing:0.5,
    },
    describe:{
        letterSpacing:0.5,
        marginVertical:10,
        lineHeight:30,
        
     

    }
    
   
  });
  
export default Productitemscreen;