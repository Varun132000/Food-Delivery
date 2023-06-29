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
import PreferenceScreen from '../Screen/MenuPreference/PreferenceScreen';
import EditProfileScreen from '../Screen/EditProfileScreen';
import LoadingScreen from '../Screen/LoadingScreen';
import Order from '../Screen/Order';
import Address from '../Screen/Address/Address';
import AddNewAddress from '../Screen/Address/AddNewAddress';
import Payment from '../Screen/Payment';
import AddPaymentCards from '../Screen/AddPaymentCards';
import MenuProductScreen from '../Screen/MenuProducts';
import PreferenceScreen2 from '../Screen/MenuPreference/PreferenceScreen2';
import PreferenceScreen3 from '../Screen/MenuPreference/PreferenceScreen3';
import PreferenceScreen4 from '../Screen/MenuPreference/PreferenceScreen4';
import MapScreen from '../Screen/MapScreen';
import OrderHistory from '../Screen/OrderHistory';
import Coupons from '../Screen/Coupon';
import TipScreen from '../Screen/TipScreen';
import MembershipBenefitScreen from '../Screen/MemberShip/MembershipBenefitScreen';
import AccountDetailsScreen from '../Screen/MemberShip/AccountDetailScreen';
import ChatScreen from '../Screen/ChatBot/ChatScreen';
import OrderMapScreen from '../Screen/Map/OrderMapScreen';
import SignUpScreen1 from '../Screen/SignUp/SignUpScreen1';
import SignUpScreen2 from '../Screen/SignUp/SignUpScreen2';
import SignUpScreen3 from '../Screen/SignUp/SignUpScreen3';
import SignUpScreen4 from '../Screen/SignUp/SignUpScreen4';
import SignUpScreen5 from '../Screen/SignUp/SignUpScreen5';
import SignUpScreen6 from '../Screen/SignUp/SignUpScreen6';


const Stack = createNativeStackNavigator()
export default function PostLogOutScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} options={{headerShown:false}}/>
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PreferenceScreen" component={PreferenceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PreferenceScreen2" component={PreferenceScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="PreferenceScreen3" component={PreferenceScreen3} options={{ headerShown: false }} />
        <Stack.Screen name="PreferenceScreen4" component={PreferenceScreen4} options={{ headerShown: false }} />
        <Stack.Screen name="MenuProductScreen" component={MenuProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{title:'Edit Profile' }} />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Address' component={Address} options={{ headerShown: false }} />
        <Stack.Screen name='MapScreen' component={MapScreen} options={{ headerShown: false }} />
        <Stack.Screen name='OrderMapScreen' component={OrderMapScreen} options={{ headerShown: false }} />
        <Stack.Screen name='AddNewAddress' component={AddNewAddress} options={{ headerShown: false }} />
        <Stack.Screen name='AddPaymentCards' component={AddPaymentCards}  />
        <Stack.Screen name='TipScreen' component={TipScreen}  />
        <Stack.Screen name='Order' component={Order} options={{ headerShown: false }} />
         <Stack.Screen name='OrderHistory' component={OrderHistory} options={{ headerShown: false }} />
         <Stack.Screen name='Coupons' component={Coupons} options={{ headerShown: false }} />
         <Stack.Screen name='ChatScreen' component={ChatScreen} options={{ headerShown: false }} />
         <Stack.Screen name='MembershipBenefitScreen' component={MembershipBenefitScreen} options={{ headerShown: false }} />
         <Stack.Screen name='AccountDetailsScreen' component={AccountDetailsScreen} options={{ headerShown: false }} />
         <Stack.Screen name='SignUpScreen1' component={SignUpScreen1} options={{ headerShown: false }} />
         <Stack.Screen name='SignUpScreen2' component={SignUpScreen2} options={{ headerShown: false }} />
         <Stack.Screen name='SignUpScreen3' component={SignUpScreen3} options={{ headerShown: false }} />
         <Stack.Screen name='SignUpScreen4' component={SignUpScreen4} options={{ headerShown: false }} />
         <Stack.Screen name='SignUpScreen5' component={SignUpScreen5} options={{ headerShown: false }} />
         <Stack.Screen name='SignUpScreen6' component={SignUpScreen6} options={{ headerShown: false }} />
       <Stack.Screen name="DrawerView" component={DrawerView} options={{ headerTitle: '', gestureEnabled: false,headerShown: false, presentation: 'modal',}}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})