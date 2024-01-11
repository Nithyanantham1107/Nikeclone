import { View, Text,StyleSheet ,Image,FlatList,useWindowDimensions, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import products from '../data/products';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';


const Productitemscreen = ({route}) => {
  console.log(route.params)
    const product=route.params;
    const {Width}=useWindowDimensions();
   
    const navigation=useNavigation();
   const [addedToCart, setAddedToCart] = useState(false);
   const dispatch = useDispatch();
   const addItemToCart = (item) => {
     setAddedToCart(true);
     dispatch(addToCart(item));
     setTimeout(() => {
       setAddedToCart(false);
     }, 60000);
     
   };
   const cart = useSelector((state) => state.cart.cart);
   console.log(cart);
   return (

 <View style={{flex:1}} >
    
      
      
        <Image  style={styles.img}source={{uri:product.image,}}
        />

  
 
  
<ScrollView style={{marginHorizontal:2}}>
  
  <Text style={styles.title}> {product.name}</Text>
  <Text style={styles.price}> {product.price} /.</Text>
 <Text style={styles.describe}> {product.description}</Text>
  </ScrollView>
  

{addedToCart ? (
         <TouchableOpacity style={{ backgroundColor:"white",
         padding:4,
         margin:10,
         height:40,
         alignItems:'center',
         justifyContent:'center',
         bottom:10, 
         width:"80%",
         alignSelf:'center',
 
         borderRadius:100,}} onPress={()=>
          addItemToCart(product)
      
        }>
            <Text style={{color:'black',fontWeight:'300'}}>Added to Cart</Text>
          
  </TouchableOpacity>
        ) : (<TouchableOpacity style={{ backgroundColor:"black",
        padding:4,
        margin:10,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        bottom:10, 
        width:"80%",
        alignSelf:'center',

        borderRadius:100,}} onPress={()=>
          addItemToCart(product)
      
        }>
          <Text style={{color:'white',fontWeight:'300'}}>Add to Cart</Text>
           
  </TouchableOpacity>
        )}
   
 
 
   
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
       width:400,
        aspectRatio:1,
        marginHorizontal:4,
        borderRadius:6,
        
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
        fontSize:40,
    fontWeight:'500',
    
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