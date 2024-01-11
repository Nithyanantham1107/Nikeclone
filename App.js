
import { FlatList, StyleSheet, Text, View,Image, useAnimatedValue } from 'react-native';
import Navigater from './Navigation/Navigater';
import { NavigationContainer } from '@react-navigation/native';
import { productupdate } from './helper/productUpdate';
import { useState } from 'react';
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";
import { UserContext } from "./UserContext";

<<<<<<< HEAD
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personinfo from './screens/Personinfo';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
   
<View style={styles.container}>

<NavigationContainer>
 <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false }}>

 <Stack.Screen name="home" component={Productscreen}/>
  <Stack.Screen name="item" component={Productitemscreen}/>
  <Stack.Screen name="shop" component={Shoppingcart}/>
  <Stack.Screen name="info" component={Personinfo}/>
 </Stack.Navigator>
       </NavigationContainer>
{/*<Productitemscreen/>
<Productscreen/>
<Shoppingcart/>*/}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   marginHorizontal:10
   
   
  },
=======
const App=()=> {
  
  return (
>>>>>>> f524f3bf94e22b789f627fa8cbd87bbe04e8fe27
 
 <>
 <Provider store={store}>

   <Navigater/>
     <ModalPortal />
   
 </Provider>
</>
  );
};
export default App;
