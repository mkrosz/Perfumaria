import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from 'react-native';


import FlatList_  from './components/FlatList_';
import VerProdutos from './components/VerProduto';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Flat" component={FlatList_}
         options={{
              headerShown: false,
              gestureEnabled: false,
              detachPreviousScreen: false,
              headerLeft: null,}}
     
         />
         <Stack.Screen name="Produto" component={VerProdutos} />
      </Stack.Navigator>
    </NavigationContainer>
  );


 

}
