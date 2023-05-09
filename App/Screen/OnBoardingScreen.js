import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
const OnBoardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.replace('Login')}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image style={styles.onboard1} source={require('../Assests/Images/firstboarding.png')} />,
                    title: 'Onboarding 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image style={styles.onboard2} source={require('../Assests/Images/onboarding2.png')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image style={styles.onboard3} source={require('../Assests/Images/onboarding3.png')} />,
                    title: 'Onboarding 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    onboard1: {
        height: 400
    },
    onboard2: {
        height: 400
    },
    onboard3: {
        height: 400
    }
})