import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { TextInput } from 'react-native'
import auth from '@react-native-firebase/auth';

const PhoneLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('')
    function onAuthStateChanged(user) {
        if (user) {

        }
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);
    const handleLogin = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber('+91' + phoneNumber);
            console.log('Confirmation:', confirmation);
            setConfirm(confirmation);
        } catch (error) {
            console.log('Error:', error);
        }
    };
    const confirmCode = async () => {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }
    if (!confirm) {
        return (
            <SafeAreaView>
                <View style={styles.Logo}>
                    <Image source={require('../../Assests/Images/food_logo.png')} style={styles.foodLogo} />
                </View>
                <View style={styles.Login}>
                    <Text style={styles.log}>
                        Log In with Phone No.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        value={phoneNumber}
                        maxLength={15}
                        onChangeText={text => setPhoneNumber(text)}
                    />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => { handleLogin() }}>
                    <Text style={styles.done}>
                        Login
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
    return (
        <>
            <View style={styles.Logo}>
                <Image source={require('../../Assests/Images/food_logo.png')} style={styles.foodLogo} />
            </View>
            <TextInput
                style={styles.input}
                value={code}
                maxLength={6}
                placeholder="OTP"
                onChangeText={text => setCode(text)}
            />
            <TouchableOpacity style={styles.btn} onPress={() => { confirmCode() }}>
                <Text style={styles.done}>
                    Login
                </Text>
            </TouchableOpacity>

        </>
    );
}

export default PhoneLogin

const styles = StyleSheet.create({
    Logo: {
        backgroundColor: 'skyblue',
    },
    foodLogo: {
        height: 160,
        width: 160,
        marginTop: 100,
        alignSelf: 'center',
        marginBottom: 20
    },
    Login: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        minHeight: 101
    },
    log: {
        fontWeight: '500',
        color: 'black',
        fontSize: 25,
        marginTop: 5,
        alignSelf: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        top: 10
    },
    btn: {
        height: 56,
        backgroundColor: 'red',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 30,
        borderRadius: 12
    },
    done: {
        fontSize: 20,
        fontWeight: '500',
        textTransform: 'uppercase',
        color: 'white'
    },
})