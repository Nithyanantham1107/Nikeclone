import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Personinfo = () => {
    const navigation=useNavigation();
  return (<View style={{flex:1,}}>
   

    <View style={{backgroundColor:"#E0F4FF" ,flex:1,justifyContent:"center",alignItems:"center"}}>
 <TouchableOpacity
 onPress={()=>{navigation.navigate("home")}}
 ><Ionicons name="arrow-back" size={30} style={{marginRight:350,alignSelf:"flex-start"}} color="black" /></TouchableOpacity>
           <Text style={{fontSize:35,fontWeight:800}}>PERSONAL INFO</Text>
     <View style={{borderWidth:1,padding:5,margin:10,height:300,justifyContent:"space-between"}}>
      <Text style={{fontSize:25,fontWeight:800}}>Name</Text>
      <TextInput  value ="type name.." style={{marginLeft:30,width:300,backgroundColor:"white",borderRadius:10}}/>
      <Text style={{fontSize:25,fontWeight:800}}>Mail</Text>
      <TextInput  value ="type mail.." style={{marginLeft:30,width:300,backgroundColor:"white",borderRadius:10}}/>
      <Text style={{fontSize:25,fontWeight:800}}>Phone no</Text>
      <TextInput  value ="type number.." style={{marginLeft:30,width:300,backgroundColor:"white",borderRadius:10}}/>
      <Text style={{fontSize:25,fontWeight:800}}>place</Text>
      <TextInput  value ="type place.." style={{marginLeft:30,width:300,backgroundColor:"white",borderRadius:10}}/>
  
  
    </View>
      <TouchableOpacity style={{backgroundColor:"black",width:150,marginTop:20,justifyContent:"center",alignItems:"center",borderRadius:10}}>
        <Text  style={{fontSize:25,fontWeight:800,color:"white"}}>Register</Text>
      </TouchableOpacity>
    </View></View>
  )
}

export default Personinfo;