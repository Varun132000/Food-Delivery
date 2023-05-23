import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from '../Screen/Dashboard';
import DrawerNavigator from './DrawerNavigator';
import AddToCartScreen from '../Screen/AddToCartScreen';
import DrawerView from './DrawerView';
import SearchResultScreen from '../Screen/SearchResultScreen';
import RestaurantScreen from '../Screen/RestaurantScreen';
import MenuProducts from '../Screen/MenuProducts';
import PreferenceScreen from '../Screen/PreferenceScreen';
import EditProfileScreen from '../Screen/EditProfileScreen';
import LoadingScreen from '../Screen/LoadingScreen';
import Order from '../Screen/Order';


const Stack = createNativeStackNavigator()
export default function PostLogOutScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MenuProducts" component={MenuProducts} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{title:'Edit Profile' }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Order' component={Order} options={{ headerShown: false }} />
       <Stack.Screen name="DrawerView" component={DrawerView} options={{ headerTitle: '', gestureEnabled: false,headerShown: false, presentation: 'modal',}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})