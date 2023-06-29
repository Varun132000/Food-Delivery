import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const AddNewAddress = ({ navigation }) => {
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [mobile, setMobile] = useState('')

  const saveAddress = () => {
    navigation.navigate('AddToCartScreen', { updatedAddress: street });
  };

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
                maxLength={10}
            />
            <TouchableOpacity style={styles.addNewbtn} onPress={() => saveAddress()}>
                <Text style={styles.btnText}>
                    Add New Address
                </Text>
            </TouchableOpacity>
        </View>
  );
};

export default AddNewAddress;
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

/*import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AddNewAddress = ({ navigation }) => {
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [mobile, setMobile] = useState('')
    const saveAddress = async () => {
        try {
          const userId = await AsyncStorage.getItem('USERID');
          const userRef = firestore().collection('users').doc(userId);
          console.log('userId:', userId);
          const user = await userRef.get();
      
          if (user.exists) {
            let tempDart = [];
      
            if (user.data() && Array.isArray(user.data().addresses)) {
              tempDart = [...user.data().addresses];
            }
      
            tempDart.push({ street, city, pinCode, mobile });
      
            await userRef.update({ addresses: tempDart });
      
            console.log('Success: Address added');
            navigation.goBack();
          } else {
            throw new Error('User document not found');
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };
      
      
      
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
                maxLength={10}
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
})*/
