import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import Dashboard from '../Screen/Dashboard';
import OnBoardingScreen from '../Screen/OnBoardingScreen';
import Home from './TabNavigation';
import DrawerView from './DrawerView';
const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  const [firstLaunch, setFirstLaunch] = React.useState(null);
  React.useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);
  return ( firstLaunch != null && ( 
    <NavigationContainer>
      <Stack.Navigator>
      {firstLaunch &&(<Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{headerShown:false}}/>)}
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="DrawerView" component={DrawerView} options={{ headerTitle: '', gestureEnabled: false,headerShown: false, presentation: 'modal',}}/>
      </Stack.Navigator>
    </NavigationContainer>)
  )
}

export default StackNavigation

const styles = StyleSheet.create({})