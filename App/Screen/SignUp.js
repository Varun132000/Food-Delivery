/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, Dimensions, StyleSheet, Alert,TextInput, Image, TouchableOpacity, ScrollView, SafeAreaView, } from 'react-native';
function SignUp({ navigation, }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
         const [message, setMessage] = useState('');
    const onSignUp = async () => {
        try {
            if (email.length > 0 && password.length > 0) {
                const isUserCreate = await auth().createUserWithEmailAndPassword(email, password)
                console.log(isUserCreate);
            }else{
                Alert.alert('Enter all data')
            }
        } catch (err) {
            setMessage(err.message);
            console.log(err);
        }
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.centeredView}>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.innerBox}>
                        <Image source={require('../Assests/Images/food_logo.png')} style={styles.logoImage}></Image>
                        <Text style={styles.emailText}>Email</Text>
                        <TextInput
                            style={styles.emailTextView}
                            placeholder="Enter your email address"
                            placeholderTextColor={'black'}
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={styles.passwordText}>Password</Text>
                        <TextInput
                            style={styles.passwordTextView}
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor={'black'}
                            secureTextEntry
                        />
                        <Text style={styles.TextMessage}>{message}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            color="blue"
                            onPress={() => {
                                onSignUp();
                            }}>
                            <Text style={styles.buttonText}>Signup</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
export default SignUp;
const styles = StyleSheet.create({
    innerBox: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 40,
        marginTop: 130,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 16,
        minHeight: 101,
    },
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logoImage: {
        marginTop: 0,
        marginLeft: 58,
        marginRight: 58,
        height: 300,
    },
  

    emailText: {
        fontSize: 12,
        width: 50,
        color: '#5e5e5e',
        marginTop: 59,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    passwordText: {
        fontSize: 12,
        width: 80,
        color: '#5e5e5e',
        marginTop: 30,
        marginLeft: 30,
        fontWeight: 'bold',
    },
   
    emailTextView: {
        height: 38,
        borderWidth: 1,
        padding: 10,
        borderColor: '#e6e6e6',
        backgroundColor: '#f7f7f7',
        marginTop: 13,
        marginLeft: 30,
        marginRight: 30,
        color: '#5e5e5e',
        borderRadius: 10,
    },
    passwordTextView: {
        height: 38,
        borderWidth: 1,
        padding: 10,
        borderColor: '#e6e6e6',
        backgroundColor: '#f7f7f7',
        marginTop: 13,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        color: '#5e5e5e',
    },
    
    button: {
        backgroundColor: 'red',
        marginLeft: 20,
        marginRight: 10,
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
        borderRadius: 10,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
       TextMessage:{
     marginTop:5,
     marginLeft:28,
     marginRight:20,
     color:'green',
     fontWeight:'bold',
    },
    
});