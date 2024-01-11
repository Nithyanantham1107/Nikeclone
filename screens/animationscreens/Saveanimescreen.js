import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import LottieView from "lottie-react-native";
import { useNavigation ,useIsFocused} from "@react-navigation/native";

const Saveanimescreen = () => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 2000);
  }, []);
 
    const navigation = useNavigation()
  
  return (
    <View style={{flex:1,justifyContent:"center"}}>
     <View>
      
    <LottieView
  style={{
    height: 300,
    width: 300,
    alignSelf: "center",
    justifyContent: "center",
  }}
  
    source={require("../../assets/saveload.json")}
    autoPlay 
    loop 
     />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
       Fishing...... Hooray!!!
      </Text>
     </View>
    </View>
  )
}

export default Saveanimescreen;