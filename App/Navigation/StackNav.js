import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import firebase from '@react-native-firebase/app';
import { AuthContext } from './Context'
import { NavigationContainer } from '@react-navigation/native'
import PostLogOutScreen from './PostLogOutScreen'
import PreLoginScreen from './PreLoginScreen'
export default function StackNav() {
    const {isLogin,setIsLogin}=useContext(AuthContext)
    useEffect(() => {
      checkLoginStatus();
    }, []);
  
    const checkLoginStatus = () => {
      firebase.auth().onAuthStateChanged((user) => {
        setIsLogin(user);
      });
    };
  return (
    <NavigationContainer>
        {isLogin ?<PostLogOutScreen/>:<PreLoginScreen/>}
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})