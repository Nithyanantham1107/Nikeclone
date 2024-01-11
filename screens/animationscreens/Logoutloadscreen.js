import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from "lottie-react-native";
import { useNavigation ,useIsFocused} from "@react-navigation/native";

const Logoutloadscreen = () => {
  
  const navigation =useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000);
  }, []);
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     
    <LottieView
    style={{width:300,height:300}}
    source={require("../../assets/logout.json")}
    autoPlay 
    loop />
     
     <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
       See yah...Later!!
      </Text>
    </View>
  )
}

export default Logoutloadscreen;