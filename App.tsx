import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import StackNavigation from './App/Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen'
import { store } from './App/Redux/Store';
function App() {
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <Provider store={store}>
      <StackNavigation/>
    </Provider>
   
  );
}

export default App

const styles = StyleSheet.create({})