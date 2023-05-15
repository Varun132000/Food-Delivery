import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchResultScreen from '../Screen/SearchResultScreen';
import Food from '../Screen/Tabs/Food';
import RestaurantScreen from '../Screen/RestaurantScreen';
const Stack = createNativeStackNavigator()
export default function ClientStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Food Screen" component={Food} options={{ headerShown: false }} />
      <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} options={{
        title: ''
      }} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})