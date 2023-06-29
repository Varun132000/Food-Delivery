import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../Screen/Login';
import SignUp from '../Screen/SignUp';
import OnBoardingScreen from '../Screen/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgotPassword from '../Screen/ForgotPassword';
import OTPScreen from '../Screen/OTP/OTPScreen';
import PhoneLogin from '../Screen/OTP/PhoneLogin';
import MpinScreen from '../Screen/MpinScreen';
const Stack = createNativeStackNavigator()
export default function PreLoginScreen() {
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
  
  return (
    firstLaunch != null && (
      <Stack.Navigator>
        {firstLaunch && (<Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{ headerShown: false }} />)}
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='MpinScreen' component={MpinScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PhoneLogin' component={PhoneLogin} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='OTPScreen' component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />
      </Stack.Navigator>)
  )
}

const styles = StyleSheet.create({})