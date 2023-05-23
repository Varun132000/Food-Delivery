import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableOpacityBase } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const EditProfileScreen = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSaveProfile = () => {
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Address:', address)
    };
    const selectProfileImage = () => {
        const options = {
          title: 'Select Profile Image',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        launchImageLibrary(options,response=>{
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
            <TouchableOpacity onPress={()=>{selectProfileImage()}} >
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

/*import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';
const EditProfileScreen = () => {
    const [show, setShow] = useState(false)
    const showList = () => {
        setShow(!show)
    }
    const [image, setImage] = useState('https://i.pinimg.com/474x/0f/e9/bb/0fe9bba766201d818d6c5dea51a28957.jpg');
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            console.log(image);
            setImage(image.path);
        });
    }
    const renderList = () => {
        return (
            <View style={styles.panel}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.panelTitle}>Upload Photo</Text>
                    <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
                </View>
                <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera()}>
                    <Text style={styles.panelButtonTitle}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary()}>
                    <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.panelButton} onPress={() => setShow(false)}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Animated.View style={{ margin: 20, }}>
                <Modal
                    onBackdropPress={() => setShow(false)}
                    onBackButtonPress={() => setShow(false)}
                    isVisible={show}
                    swipeDirection='down'
                    onSwipeComplete={showList}
                    style={styles.modal}
                >
                    <View style={styles.modalContent}>
                        <View>
                            {renderList()}
                        </View>
                    </View>
                </Modal>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => showList()}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground source={{ uri: image }} style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        Varun
                    </Text>
                </View>
                <View style={styles.action}>

                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black'
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>

                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black',
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>

                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black',
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>

                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black',
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>

                    <TextInput
                        placeholder="Country"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black',
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>

                    <TextInput
                        placeholder="City"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[
                            styles.textInput,
                            {
                                color: 'black',
                            },
                        ]}
                    />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    action: {
        container: {
            flex: 1,
        },
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
        color: '#05375a',
        borderWidth: 0.5,
        borderRadius: 12
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0
    },
    modalContent: {
        backgroundColor: 'white',
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        minHeight: 280,
        paddingBottom: 20
    },
})*/
