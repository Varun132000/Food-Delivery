/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { EventRegister } from 'react-native-event-listeners'
import { AuthContext } from '../Navigation/Context'
 import { colors } from '../Screen/styles';
const CustomDrawer = (props, { navigation }) => {
    const { logout } = useContext(AuthContext)
    const [isEnabled, setIsEnabled] = useState(false)
    const [darkMode,setDarkMode ]=useState(false)
   
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <>
            <DrawerContentScrollView {...props} >
                <View style={styles.border}>
                    <View style={styles.drawer}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <Image source={require('../Assests/Images/bitmoji.png')} style={styles.logoImage} />
                        </TouchableOpacity>
                        <Text style={styles.logoText}>
                            Varun
                        </Text>
                    </View>
                    <Text style={styles.text}>
                        Varunsinghal13200@gmail.com
                    </Text>
                </View>
                <View style={{ marginTop: 12, borderBottomWidth: 1, borderBottomColor: '#ccc', }}>
                    <DrawerItemList{...props} />
                </View>
                <View>
                    <Text style={styles.preference}>
                        Preference
                    </Text>
                    <View style={styles.switchText}>
                        <Text style={styles.darkText}>
                            Dark Theme
                        </Text>
                        <View style={{ paddingRight: 10 }}>
                            {/*<Switch
                                trackColor={{ false: 'white', true: 'black' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />*/}
                            <Switch
                                value={darkMode}
                                onValueChange={val => {
                                    setDarkMode(val);
                                    EventRegister.emit('changeThemeEvent',val

                                    );
                                }}
                            />
                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>
            <View style={styles.logout}>
                <TouchableOpacity onPress={() => { logout() }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../Assests/Images/logout.jpg')} style={styles.img} />
                        <Text style={styles.logtext}>
                            Logout
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawer: {
        marginTop: 15,
        flexDirection: 'row',
        //backgroundColor:colors.grey5,
    },
    logoImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    logoText: {
        fontSize: 20,
        marginLeft: 12,
        color: colors.grey1,
        alignSelf: 'center',
        fontWeight: '700'
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        marginBottom: 12,
        marginLeft: 15,
        color: colors.grey2,
        fontSize: 13,
       // backgroundColor:colors.grey5,
    },
    logout: {
        padding: 20,
        borderTopWidth: 1,
        backgroundColor:'white',
    },
    logtext: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
        marginTop: 3,
    },
    img: {
        height: 30,
        width: 30,
        marginTop: 5
    },
    preference: {
        fontSize: 16,
        color: 'grey',
        paddingTop: 10,
        paddingLeft: 20
    },
    switchText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    darkText: {
        fontSize: 16,
        color: 'grey',
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: 'bold'
    }
})