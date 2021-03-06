import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginScreen'
import HomeScreen from './screens/homescreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppDrawernavigator} from './components/AppDrawerNavigator';
export default function App() {
  return (
    <AppContainer/>

  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  Drawer:{screen:AppDrawernavigator}

})
const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
