import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Signature from "./Signature";
import Start from "./Start";
import Size from "./Size";
import Base from "./Base";
import Protein from "./Protein";
import Veggies from "./Veggies";
import Toppings from "./Toppings";
import Delivery from "./Delivery";
import GlobalPrice from "./GlobalPrice";

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

export default function App() {

    const Stack = createNativeStackNavigator();
    const [globalprice,setGlobalPrice] = useState(0);

  return (

      <GlobalPrice.Provider value={[globalprice, setGlobalPrice]}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Start} options={{headerShown:false}} />
        <Stack.Screen name="Signature" component={Signature} options={{headerShown:false}}/>
        <Stack.Screen name="Size" component={Size} options={{headerShown:false}}/>
        <Stack.Screen name="Base" component={Base} options={{headerShown:false}}/>
        <Stack.Screen name="Protein" component={Protein} options={{headerShown:false}}/>
        <Stack.Screen name="Veggies" component={Veggies} options={{headerShown:false}}/>
        <Stack.Screen name="Toppings" component={Toppings} options={{headerShown:false}}/>
        <Stack.Screen name="Delivery" component={Delivery} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
      </GlobalPrice.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
