import { StyleSheet, Text, View,SafeAreaView } from "react-native";
import React ,{useEffect} from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Scanbackscreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
      setTimeout(() => {
        navigation.replace("Main");
      }, 2000);
    }, []);
  
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <LottieView
        source={require("../../assets/run.json")}
        // ref={animation}
        style={{
          height: 300,
          width: 300,
          alignSelf: "center",
          marginTop: 80,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
       Home.. Home.. Hooray!!
      </Text>
      <LottieView
        source={require("../../assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  );
};

export default Scanbackscreen;

const styles = StyleSheet.create({});
