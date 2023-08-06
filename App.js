import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,Image } from 'react-native';
import products from './data/products';
import Productscreen from './screens/Productscreen';
import Productitemscreen from './screens/Productitemscreen';
import Shoppingcart from './screens/Shoppingcart';
import Cartscreen from './screens/Cartscreen';

import { NavigationContainer } from '@react-navigation/native';
import CartListItem from './screens/CartListItem';
import cart from './data/cart';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
   
<View style={styles.container}>

<NavigationContainer>
 <Stack.Navigator screenOptions={{headerShown:false}}>

 <Stack.Screen name="home" component={Productscreen}/>
  <Stack.Screen name="item" component={Productitemscreen}/>
  <Stack.Screen name="shop" component={Shoppingcart}/>
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
 
});
