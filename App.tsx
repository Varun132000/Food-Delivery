import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { store } from './App/Redux/Store';
import Routes from './App/Navigation/Routes';
function App() {
  React.useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({})