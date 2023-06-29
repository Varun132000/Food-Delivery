import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import FastImage from 'react-native-fast-image';


export default function FoodCart({
    restaurantName,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth,
    OnPressRestaurantCard,
    coordinates
}) {

    return (
        <TouchableOpacity onPress={OnPressRestaurantCard}>
            <View style={{ ...styles.cardView, width: screenWidth }}>
                <FastImage
                    style={{ ...styles.image, width: screenWidth }}
                    source={{
                        uri: images,
                        priority: FastImage.priority.normal,
                        cache: FastImage.cacheControl.immutable,
                    }}
                />
                <View>
                    <View>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={styles.distance}>
                            <Text style={styles.Min}> {farAway} Min</Text>
                        </View>
                        <View style={{ flex: 9, flexDirection: "row" }}>
                            <Text style={styles.address}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginBottom: 10,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 200,
    },

    restaurantName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 5,
        marginLeft: 10
    },

    distance: {
        flex: 4, flexDirection: 'row',
        borderRightColor: 'black',
        paddingHorizontal: 5,
        borderRightWidth: 1
    },
    Min: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        color: 'black'
    },

    address: {
        fontSize: 12,
        paddingTop: 5,
        color: 'black',
        paddingHorizontal: 10
    },

    review: {
        position: "absolute",
        top: 0,
        right: 13,
        backgroundColor: 'rgba(52, 52, 52,0.3)',
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
    },

    average: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3,
    },
    numberOfReview: {
        color: "white",
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    }
})