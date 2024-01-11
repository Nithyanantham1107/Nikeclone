
import { FlatList, StyleSheet, Text, View,Image, useAnimatedValue } from 'react-native';
import Navigater from './Navigation/Navigater';
import { NavigationContainer } from '@react-navigation/native';
import { productupdate } from './helper/productUpdate';
import { useState } from 'react';
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import store from "./store";
import { UserContext } from "./UserContext";

const App=()=> {
  
  return (
 
 <>
 <Provider store={store}>

   <Navigater/>
     <ModalPortal />
   
 </Provider>
</>
  );
};
export default App;
