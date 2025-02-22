/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Tabs from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';


function App() {

   return (

    <NavigationContainer>
      {/* <View> */}
      <Tabs />
      {/* </View> */}
    
    </NavigationContainer>
  
  
   )
}
export default App;
