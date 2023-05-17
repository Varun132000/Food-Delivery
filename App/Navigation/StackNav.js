/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Context'
import { NavigationContainer,DarkTheme,DefaultTheme } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native';
import PostLogOutScreen from './PostLogOutScreen'
import PreLoginScreen from './PreLoginScreen'
import { EventRegister } from 'react-native-event-listeners'
export default function StackNav() {
    const {isLogin}=useContext(AuthContext)
    const[darkApp,SetDarkApp]=useState(false);
    const appTheme = darkApp ?DarkTheme : DefaultTheme;

    useEffect (()=>{
      let eventListener= EventRegister.addEventListener('changeThemeEvent', (data) => {
            
                SetDarkApp(data)
        })
      return () =>{
        EventRegister.removeEventListener(eventListener)
      }
    },[]
    )

  return (
    <NavigationContainer theme={appTheme}>
        {isLogin!==null?<PostLogOutScreen/>:<PreLoginScreen/>}
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})