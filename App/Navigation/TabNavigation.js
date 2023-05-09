import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Food from '../Screen/Tabs/Food';
import Order from '../Screen/Tabs/Order';
import Account from '../Screen/Tabs/Account';
const Home = () => {
    const Tab = createBottomTabNavigator();
    return (
    <Tab.Navigator>
        <Tab.Screen name='Food' component={Food} options={{headerShown:false,
      tabBarIcon:()=>(
        <View>
          <Image source={require('../Assests/Images/foodicon.png')}
          style={{height:45,width:45}}/>
        </View>
      )  
      }}
        />
        <Tab.Screen name='Order' component={Order}options={{
            tabBarIcon:()=>(
              <View>
                <Image source={require('../Assests/Images/Vector.png')}
                style={{height:25,width:25}}/>
              </View>
            ) 
        }}/>
        <Tab.Screen name='Account' component={Account}options={{
            tabBarIcon:()=>(
              <View>
                <Image source={require('../Assests/Images/Account.png')}
                style={{height:25,width:25}}/>
              </View>
            ) 
        }}/>
    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})