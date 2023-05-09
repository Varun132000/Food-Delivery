import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from '../Screen/Dashboard';

const Stack = createNativeStackNavigator()
export default function PostLogOutScreen() {
  return (
    <Stack.Navigator>
       <Stack.Screen name='Dashboard' component={Dashboard}/> 
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})