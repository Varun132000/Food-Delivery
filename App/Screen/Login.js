import { Alert, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onLogin = async () => {
        try {
            if (email.length > 0 && password.length > 0) {
                const isuserLogin = await auth().signInWithEmailAndPassword(
                    email,
                    password
                )
                navigation.navigate('Home')
            }else{
                Alert.alert('Enter All Data')
            }
        } catch (err) {
            console.log(err);
            Alert.alert('Enter Valid Data')
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.Logo}>
                <Image source={require('../Assests/Images/food_logo.png')} style={styles.foodLogo} />
            </View>
            <View style={styles.Login}>
                <Text style={styles.log}>
                    Log In
                </Text>
                <Text style={styles.email}>
                    Email
                </Text>
                <TextInput
                    style={styles.emailText}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={(Data) => setEmail(Data)}
                    placeholderTextColor={'black'}
                />
                <Text style={styles.password}>
                    Password
                </Text>
                <TextInput
                    style={styles.PasswordText}
                    placeholder="Enter your Password"
                    value={password}
                    onChangeText={(Data) => setPassword(Data)}
                    placeholderTextColor={'black'}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => { onLogin() }}>
                    <Text style={styles.done}>
                        Login
                    </Text>
                </TouchableOpacity>
                
                <Text style={styles.sign}>
                    ____________________ or Sign In with ___________________
                </Text>
            </View>
            <View style={styles.btnsign}>
                <View style={styles.btnSecondary}>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>
                            Facebook
                        </Text>
                        <Image style={styles.btnImage} source={require('../Assests/Images/Facebook-logo.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: 10 }}></View>
                <View style={styles.btnSecondary1}>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>
                            Google
                        </Text>
                        <Image style={styles.btnImage} source={require('../Assests/Images/Google.png')} />
                    </TouchableOpacity></View>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Text style={styles.signupAcc} >
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signup}>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    Logo: {
        backgroundColor: 'skyblue',
    },
    Login: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        minHeight: 101
    },
    foodLogo: {
        height: 250,
        width: 250,
        marginTop: 100,
        alignSelf: 'center',
        marginBottom: 20
    },
    log: {
        fontWeight: '500',
        color: 'black',
        fontSize: 35,
        marginTop: 12,
        alignSelf: 'center',
        marginBottom: 30
    },
    emailText: {
        height: 38,
        borderWidth: 1,
        padding: 10,
        marginTop: 13,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 12,
        color: 'black'
    },
    email: {
        fontSize: 13,
        width: 50,
        color: 'black',
        marginLeft: 30,
        fontWeight: 'bold'
    },
    password: {
        fontSize: 13,
        width: 50,
        color: 'black',
        marginLeft: 30,
        fontWeight: 'bold',
        marginTop: 5
    },
    PasswordText: {
        height: 38,
        borderWidth: 1,
        padding: 10,
        marginTop: 13,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 12,
        color: 'black'
    },
    forgotPassword: {
        textAlign: 'right',
        marginRight: 20,
        marginTop: 5,
        fontWeight: '500',
        color: 'red'
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
    sign: {
        color: 'black',
        textAlign: 'center',
        marginTop: 15
    },
    btnsign: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 12
    },
    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 15,
        borderColor: 'grey',
        marginLeft: 50,
    },
    btnImage: {
        width: 30,
        height: 30,
        marginLeft: 10
    },
    btnSecondary1: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 15,
        borderColor: 'grey',
        marginRight: 50,
    },
    signupAcc: {
        fontWeight: 'bold',
        color: 'black',
    },
    signup: {
        color: 'blue',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginLeft: 10
    }

})