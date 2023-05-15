import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { restaurantsData } from './Data'

const ReastaurantHeaders = ({ navigation, id }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.container}
                source={{ uri: restaurantsData[id].images }}
                imageStyle={styles.image}
            >
                <View style={styles.header}>
                    <TouchableOpacity style={styles.header1} onPress={()=>navigation.goBack()}>
                        <Image source={require('../Assests/Images/back.png')} style={styles.back} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ReastaurantHeaders

const styles = StyleSheet.create({
    container: {
        height: 300,
    },
    header: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    header1: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    back: {
        height: 30,
        width: 30,
    }
})