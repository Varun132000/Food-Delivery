import React, { useState } from 'react';
import firebase from '@react-native-firebase/app';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableOpacityBase } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const EditProfileScreen = ({navigation}) => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSaveProfile = () => {
        const profileData = { name, email, address, profileImage };
        const profileRef = firebase.firestore().collection('profiles').doc('profiles');
        profileRef
            .set(profileData)
            .then(() => {
                console.log('Profile saved');
                navigation.navigate('Profile', { profileData });
            })
            .catch((error) => {
                console.error('Error saving profile:', error);
            });
    };
    const selectProfileImage = () => {
        const options = {
            title: 'Select Profile Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const source = response.uri;
                console.log(response);
                setProfileImage(response.assets[0].uri)
            }
        })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { selectProfileImage() }} >
                <Image
                    source={profileImage ? { uri: profileImage } : require('../Assests/Images/bitmoji.png')}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
            </TouchableOpacity>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Text style={styles.label}>Address</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
                placeholder="Enter your address"
            />

            <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
                <Text style={styles.buttonText}>Save Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditProfileScreen;


