import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from './Context'
import { NavigationContainer } from '@react-navigation/native'
import PostLogOutScreen from './PostLogOutScreen'
import PreLoginScreen from './PreLoginScreen'
export default function StackNav() {
    const {isLogin}=useContext(AuthContext)
  return (
    <NavigationContainer>
        {isLogin!==null?<PostLogOutScreen/>:<PreLoginScreen/>}
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})