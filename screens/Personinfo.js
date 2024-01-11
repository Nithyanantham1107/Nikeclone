<<<<<<< HEAD
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
=======
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { value } from "../global_var/Globe";

import axios from "axios";
import jwt_decode, { jwtDecode } from "jwt-decode"
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#5A4AE3 ",
      },
      headerLeft: () => (
        <Image
          style={{ width: 140, height: 120, resizeMode: "contain" }}
          source={require("../assets/fishery.png")}
        />
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginRight: 12,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />

          <AntDesign name="search1" size={24} color="black" />
        </View>
      ),
    });
  }, []);
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
       
          const token = await AsyncStorage.getItem("authToken");
         
        
    
  
      
        console.log("hello")
        console.log(userId)
        const response = await axios.get(
          value.base+`/profile/${userId}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);
  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    navigation.replace("logout");
  };
  useEffect(() => {
    const fetchOrders = async () => {
      try {
         await axios.get(
          value.base+`/orders/${userId}`
        ).then((response)=>{
          setOrders(response.data.orders);
          console.log("hello"+response.data)
        }).catch( (err)=>{
          console.log(err)
        });
        
       

        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchOrders();
  }, []);
  console.log("orders", orders);
  return (
    <ScrollView style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Welcome {user?.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Your orders</Text>
        </Pressable>

        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Your Account</Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 12,
        }}
      >
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Buy Again</Text>
        </Pressable>

        <Pressable
          onPress={logout}
          style={{
            padding: 10,
            backgroundColor: "#E0E0E0",
            borderRadius: 25,
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Logout</Text>
        </Pressable>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {loading ? (
          <Text>Loading...</Text>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <Pressable
              style={{
                marginTop: 20,
                padding: 15,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#d0d0d0",
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={order._id}
            >
              {/* Render the order information here */}
              {order.products.slice(0, 1)?.map((product) => (
                <View style={{ marginVertical: 10 }} key={product._id}>
                  <Image
                    source={{ uri: product.image }}
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                  />
                   <Text>{product.name}</Text>
                  <Text>QUANTITY:{product.quantity}</Text>
                </View>
              ))}
            </Pressable>
          ))
        ) : (
          <Text>No orders found</Text>
        )}
      </ScrollView>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
>>>>>>> f524f3bf94e22b789f627fa8cbd87bbe04e8fe27
