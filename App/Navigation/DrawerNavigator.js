import * as React from 'react';
import { Image, Settings, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './TabNavigation';
import CustomDrawer from '../Components/CustomDrawer';
import Profile from '../Screen/Profile';
import Payment from '../Screen/Payment';
import Setting from '../Screen/Setting';
import Refer from '../Screen/Refer';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />}>
            <Drawer.Screen name='Home' component={Home} options={{
                headerShown: false,
                title: 'Food',
                drawerIcon: () => (
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image style={{
                            width: 30,
                            height: 30,
                            alignContent: 'center',
                            borderRadius: 10,
                        }} source={require('../Assests/Images/foodicon.png')} />
                    </View>
                )
            }} />
            <Drawer.Screen name="Profile" component={Profile} options={{
                headerShown:false,
                drawerIcon: () => (
                    <View style={styles.profileContainer}>
                        <Image source={require('../Assests/Images/profile.png')} style={styles.profileImg} />
                    </View>
                )
            }} />
            <Drawer.Screen name="Payment" component={Payment} options={{
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 25 },
                drawerIcon: () => (
                    <View style={styles.profileContainer}>
                        <Image source={require('../Assests/Images/payment.png')} style={styles.profileImg} />
                    </View>
                )
            }} />
            <Drawer.Screen name="Setting" component={Setting} options={{headerShown:false,
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 25 },
                drawerIcon: () => (
                    <View style={styles.profileContainer}>
                        <Image source={require('../Assests/Images/setting.png')} style={styles.profileImg} />
                    </View>
                )
            }} />
            <Drawer.Screen name="Refer" component={Refer} options={{
                title:'Refer & Earn',
                headerTitleAlign: 'center',
                headerTitleStyle: { fontSize: 25 },
                drawerIcon: () => (
                    <View style={styles.profileContainer}>
                        <Image source={require('../Assests/Images/refer.png')} style={styles.referImg} />
                    </View>
                )
            }} />
        </Drawer.Navigator>
    )
}
const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 4
    },
    profileImg: {
        width: 30,
        height: 30,
        alignContent: 'center'
      },
      referImg:{
        width: 30,
        height: 35,
        alignContent: 'center'
      }
})