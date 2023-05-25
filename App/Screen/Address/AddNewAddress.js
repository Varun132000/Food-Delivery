import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddNewAddress = ({navigation}) => {
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [mobile, setMobile] = useState('')
    const saveAddress=()=>{
        console.log('street:',street);
    }
   {/*  const saveAddress = async () => {
       const userId = await AsyncStorage.getItem('USERID')
        const user = await firestore().collection('users').doc(userId).get();
        let tempDart = []
        tempDart = user.data.address;
        
        firestore().collection('user').doc(userId).update({
            address: [{ street, city, pinCode, mobile }]
        }).then(res=>{
            console.log('success Address added');
            navigation.goBack()
        })
        .catch(error => {
            console.log(error);
        })
    }*/}
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter street"
                value={street}
                onChangeText={(Data) => setStreet(Data)}
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter City"
                value={city}
                onChangeText={(Data) => setCity(Data)}
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Pin Code"
                value={pinCode}
                onChangeText={(Data) => setPinCode(Data)}
                placeholderTextColor={'black'}
                keyboardType='number-pad'
                maxLength={6}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Enter Mobile"
                value={mobile}
                keyboardType='number-pad'
                onChangeText={(Data) => setMobile(Data)}
                placeholderTextColor={'black'}
            />
            <TouchableOpacity style={styles.addNewbtn} onPress={() => saveAddress()}>
                <Text style={styles.btnText}>
                    Add New Address
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddNewAddress

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        paddingLeft: 20,
        height: 50,
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 0.5,
        borderRadius: 10,
        width: '90%'
    },
    addNewbtn: {
        width: '90%',
        height: 50,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        borderRadius: 10
    },
    btnText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',

    }
})