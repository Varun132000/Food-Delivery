/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackNavigation from './App/Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import { store } from './App/Store/Store';
function App() {
  React.useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
 <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({});