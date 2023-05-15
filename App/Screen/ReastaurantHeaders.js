import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { restaurantsData } from './Data'

const ReastaurantHeaders = ({navigation,id}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.container}
                source={{ uri: restaurantsData[id].images }}
                imageStyle={styles.image}
            >
            </ImageBackground>
        </View>
    )
}

export default ReastaurantHeaders

const styles = StyleSheet.create({
    container: {
        height: 150,
    },


    view1: {
        flexDirection: "row",
        alignItems: "baseline",
        justifyContent: "space-between"
    },
    view2: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    view3: {
        marginTop: 0,
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    view4: {
        marginTop: 0,
        alignItems: "center",
        justifyContent: "center"
    },
})