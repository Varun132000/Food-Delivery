import { StyleSheet, Text, View, Appearance } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { store } from './App/Redux/Store';
import Routes from './App/Navigation/Routes';
import { requestUserPermission ,NotificationListner} from './App/Components/Notification';
function App() {
  const [theme, setTheme] = useState(Appearance.getColorScheme())
  Appearance.addChangeListener((scheme) => {
    console.log(scheme);
  })
  React.useEffect(() => {
    SplashScreen.hide()
  }, [])
  useEffect(() => {
    requestUserPermission()
    NotificationListner()
  }, [])
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({})