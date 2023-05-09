import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './App/Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen'
function App() {
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
   <StackNavigation/>
  );
}

export default App

const styles = StyleSheet.create({})