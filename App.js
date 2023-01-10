import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home'
import Info from './components/Info/Info'
import About from './components/About/About'
import Card from './components/Card/Card'
// import './App.css'

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer  >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Card" component={Card} />
         {/* <Stack.Screen name="Info" component={Info} />   */}
      </Stack.Navigator>
    </NavigationContainer>
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
