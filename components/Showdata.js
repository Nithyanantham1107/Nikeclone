import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { value } from '../global_var/Globe';


const Showdata = ({dummy,key}) => {
    
 const[val,setval]=useState();
    const Deleteapi= async (id)=>{
     try{  
        const res = await axios.delete(value.base+`/user/delete/${id}`);
      
        setval(res.data);
        console.log(res.data)
      } catch (error) {
        console.log(error);
      }

    
        
    }
    const Updateapi= async (id)=>{
      try{  
         const res = await axios.delete(value.base+`/user/update/${id}`);
       
         setval(res.data);
         console.log(res.data)
       } catch (error) {
         console.log(error);
       }
 
     
         
     }
  return (
    <View style={{flexDirection:"row" ,justifyContent:"space-between"}}>
      <Text>{dummy.name}</Text>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity style={{}} onPress={()=>{
        Updateapi(dummy._id)
      }}>
      <MaterialCommunityIcons name="update" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{Deleteapi(dummy._id)}}><AntDesign name="delete" size={24} color="black" /></TouchableOpacity>
      </View>
    </View>
  )
}

export default Showdata;