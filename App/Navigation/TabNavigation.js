import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientStack from './ClientStack';
import Order from '../Screen/Order';
import OrderHistory from '../Screen/OrderHistory';
import AddToFavourateScreen from '../Screen/Tabs/AddToFavourateScreen';
import MembershipScreen from '../Screen/MemberShip/MembershipScreen';
const Home = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name='Food' component={ClientStack} options={{
        headerShown: false,
        tabBarIcon: () => (
          <View>
            <Image source={require('../Assests/Images/foodicon.png')}
              style={{ height: 45, width: 45 }} />
          </View>
        )
      }}
      />
       <Tab.Screen name='MembershipScreen' component={MembershipScreen} options={{
        headerShown: false,
        tabBarIcon: () => (
          <View>
            <Image source={require('../Assests/Images/Account.png')}
              style={{ height: 25, width: 25 }} />
          </View>
        )
      }} />
      <Tab.Screen name='AddToFavourateScreen' component={AddToFavourateScreen} options={{
        headerShown: false,
        tabBarIcon: () => (
          <View>
            <Image source={require('../Assests/Images/Account.png')}
              style={{ height: 25, width: 25 }} />
          </View>
        )
      }} />
      

    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})