import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
  } from "react-native";
  
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import React, { useContext, useState } from "react";
  import { Ionicons } from "@expo/vector-icons";
  import axios from "axios";
  import { value } from "../global_var/Globe";
    import { useNavigation } from "@react-navigation/native";
import { productupdate } from "../helper/productUpdate";




  
  const SellScreen = () => {
    const{productdata,setproductdata}=useContext(productupdate);
    const [name, setname] = useState();
    const [description, setdescription] = useState();
    const [price, setprice] = useState();
    const [image, setimage] = useState();
  
    const [val, setval] = useState([]);
  
    const navigation = useNavigation();
   
    const handlesave = async () => {
      let data = { name: name, description:description, price:price,image:image };
  
      try {
         await axios.post(value.base+"/product/add", data).then((response) => {
          alert("registered");

         
        })
        .catch((error) => {
       
          console.log(error);
        });
        await axios.get(value.base+"/product/view", data).then((response) => {
           setproductdata(response.data)

          navigation.navigate("saveload")
         
        })
        .catch((error) => {
       
          console.log(error);
        });
       
       

      } catch (error) {
        console.log(error);
      }
    };
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#E0F4FF",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
       
          <Text style={{ fontSize: 35, fontWeight: 800 }}>Fish Catalogue</Text>
          <View
            style={{
            
              borderTopWidth:5,
            
              padding: 15,
            
              margin: 10,
              marginBottom:15,
              height: 300,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 800 }}>NAME</Text>
            <TextInput
              placeholder="type name.."
              value={name}
              onChangeText={(value) => {
                setname(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:40
              }}
            />
            <Text style={{ fontSize: 25, fontWeight: 800 }}>Description</Text>
            <TextInput
              placeholder="type..."
              value={description}
              onChangeText={(value) => {
                setdescription(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:100
              }}
            />
            <Text style={{ fontSize: 25, fontWeight: 800 }}>price per kg</Text>
            <TextInput
              placeholder="type..."
              value={price}
              onChangeText={(value) => {
                setprice(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:40
              }}
            />
            <Text style={{ fontSize: 25, fontWeight: 800 }}>image link</Text>
            <TextInput
              placeholder="link...."
              value={image}
              onChangeText={(value) => {
                setimage(value);
              }}
              style={{
                marginLeft: 30,
                width: 300,
                backgroundColor: "white",
                borderRadius: 10,height:40
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: 150,
              marginTop: 70,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={handlesave}
          >
            <Text style={{ fontSize: 25, fontWeight: 800, color: "white" }}>
        SELL
            </Text>
          </TouchableOpacity>
          
        </View>
  

      
      </View>
    );
  };
  
  export default SellScreen;
  