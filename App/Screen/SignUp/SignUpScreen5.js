import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
const SignUpScreen5 = ({navigation}) => {
    const renderEmailTextupload = () => {
        return (
            <View>
                <TouchableOpacity style={styles.borderstate} onPress={()=>navigation.navigate('SignUpScreen6')}>
                    <Image source={require('../../Assests/Images/emailText.png')}
                        style={{ height: 40, width: 40 }} />
                    <Text style={styles.stateText}>
                        EMAIL/TEXT A PHOTO WITH ID
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.borderstate}>
                    <Image source={require('../../Assests/Images/upload.png')}
                        style={{ height: 40, width: 40 }} />
                    <Text style={styles.stateText}>
                        UPLOAD A PHOTO WITH ID
                    </Text>
                </TouchableOpacity>
                <View style={styles.randomImage}>
                    <Image source={require('../../Assests/Images/randomImage.png')}
                        style={{ height: 200, width: 210 }} />
                </View>
            </View>
        )
    }
    const rendernumberTab = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.firstScreen}>
                    <Text style={styles.loginText}>1.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.firstScreen}>
                    <Text style={styles.loginText}>
                        2.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondScreen}>
                    <Text style={styles.loginText1}>
                        3. Confirmation
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <ImageBackground
                source={require('../../Assests/Images/lawclerk_logo.png')}
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require('../../Assests/Images/back2.png')} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../Assests/Images/help.png')} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    };
    const rendertextHead = () => {
        return (
            <View>
                <Text style={styles.headText}>
                    We only allow licensed lawyers into our{'\n'}
                    community, so let's quickly verify your identity.{'\n'}
                    How would you like to verify your identity?
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <View style={styles.box}>
                {rendernumberTab()}
                <Text style={styles.infoText}>
                    We are commited to quality.
                </Text>
                {rendertextHead()}
                {renderEmailTextupload()}
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen5

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headerBackground: {
        height: 66,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    secondScreen: {
        backgroundColor: '#c5b15d',
        width: 360,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth:1
    },
    box: {
       marginTop:5
    },
    firstScreen: {
        backgroundColor: '#cccccc',
        width: 51,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth:1
    },
    loginText1: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700'
    },
    loginText: {
        fontSize: 20,
        fontWeight: '700'
    },
    infoText: {
        fontSize: 20,
        color: '#3A4B56',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: '600',

    },
    headText: {
        fontSize: 16,
        color: '#5e5e5e',
        marginTop: 10,
        marginLeft: 30,
        fontWeight: '400',

    },
    borderstate: {
        marginTop: 20,
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 109,
        borderColor: '#c5b15d',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stateText: {
        color: '#5e5e5e',
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 10,
        marginTop: 8
    },
    randomImage:{
        alignSelf:'center',
       marginTop:50,
    }
})