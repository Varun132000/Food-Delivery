import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from '../Screen/Dashboard';
import DrawerNavigator from './DrawerNavigator';
import AddToCartScreen from '../Screen/AddToCartScreen';
import DrawerView from './DrawerView';
import SearchResultScreen from '../Screen/SearchResultScreen';
import RestaurantScreen from '../Screen/RestaurantScreen';

const Stack = createNativeStackNavigator()
export default function PostLogOutScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerView" component={DrawerView} options={{ headerTitle: '', gestureEnabled: false,headerShown: false, presentation: 'modal',}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})