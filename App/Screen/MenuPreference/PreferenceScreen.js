import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { menuDetailedData, menuItems } from '../Data'
import CheckBox from '@react-native-community/checkbox';
import MenuCart from '../MenuCart'
import { useDispatch, useSelector } from "react-redux";
import { colors } from '../../Components/Style'
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../Redux/CartReducer';
const PreferenceScreen = ({ navigation, route }) => {
    const index = route.params.index
    const [addItems, setAddItems] = useState(0)
    const [selected, setSelected] = useState(false)

    const { meal, details, price,image } = menuDetailedData[index]
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const total = cart
        .map((item) => item.price * item.quantity)
        .reduce((curr, prev) => curr + prev, 0);
    console.log(cart);
    const addItemToCart = (item) => {
        dispatch(addToCart(item));
    };
    const removeItemFromCart = (item) => {
        dispatch(removeFromCart(item));
    };
    const increaseQuantity = (item) => {
        dispatch(incrementQuantity(item));
    }
    const decreaseQuantity = (item) => {
        if (item.quantity == 1) {
            dispatch(removeFromCart(item));
        } else {
            dispatch(decrementQuantity(item));
        }
    }
    const header = () => {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.header1} onPress={() => navigation.goBack()}>
                    <Image source={require('../../Assests/Images/back.png')} style={styles.back} />
                </TouchableOpacity>
            </View>
        )
    }
    const renderPrefenceData = () => {
        return (
            <View>
                {menuDetailedData[index].preferenceData.map((item) => (
                    <View key={item.id}>
                        <View style={styles.preferData}>
                            <Text style={styles.preferDataText}>{menuDetailedData[index].preferenceTitle[menuDetailedData[index].preferenceData.indexOf(item)]}</Text>
                            {menuDetailedData[index].required[menuDetailedData[index].preferenceData.indexOf(item)] && (
                                <View style={styles.menuData}>
                                    <Text style={styles.menuDataText}>{menuDetailedData[index].minimum_quatity[menuDetailedData[index].preferenceData.indexOf(item)]} REQUIRED</Text>
                                </View>
                            )}
                        </View>
                        <View style={styles.view10}>
                            {item.map((items) => (
                                <View style={styles.view4} key={items.id}>
                                    <View style={styles.view19}>
                                        <View style={styles.view6}>
                                            <Text style={{ marginLeft: -10, color: 'black' }}>{items.name}</Text>
                                        </View>
                                        {cart.some((value) => value.id == items.id) ?
                                            (
                                                <Pressable key={items.id}
                                                    onPress={() => removeItemFromCart(items)} >
                                                    <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>Remove item</Text>
                                                </Pressable>
                                            ) :
                                            (
                                                <Pressable key={items.id}
                                                    onPress={() => addItemToCart(items)} style={styles.addAmount} >
                                                    <Text style={{ fontSize: 16, fontWeight: "600", color: 'black' }}> ADD Rs {items.price.toFixed(2)}</Text>
                                                </Pressable>)}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </View>
        )
    }
    const renderCounterData = () => {
        return (
            <>
                {total === 0 ? null : (
                    <Pressable
                        style={{
                            backgroundColor: "#00A877",
                            width: "90%",
                            padding: 13,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: 30,
                            position: "absolute",
                            borderRadius: 8,
                            left: 20,
                            bottom: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View>
                                <Text
                                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                                >
                                    {cart.length} items | {total.toFixed(2)}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "500",
                                        marginTop: 3,
                                        color: "white",
                                    }}
                                >
                                    Extra Charges may Apply!
                                </Text>
                            </View>

                            <Pressable
                                onPress={() =>
                                    navigation.navigate("AddToCartScreen")}
                            >
                                <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                                    View Cart
                                </Text>
                            </Pressable>
                        </View>
                    </Pressable>
                )}
                {/* <View style={styles.cart} >
                    <TouchableOpacity onPress={() => navigation.navigate('AddToCartScreen')}>
                        <Text style={{ color: 'black', fontSize: 25, marginTop: 20 }}>
                            Add To cart
                        </Text>
                    </TouchableOpacity>

                    {cart.map((item, index) => (
                        <View key={index}>
                            <Text style={{ color: 'black', fontSize: 16 }}>{item.name}</Text>
                            <Pressable
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    backgroundColor: "#FF3366",
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    width: 120,
                                    top: 4
                                }}
                            >
                                <Pressable onPress={() => decreaseQuantity(item)}>
                                    <Text
                                        style={{
                                            fontSize: 40,
                                            color: "white",
                                            paddingHorizontal: 10,
                                        }}
                                    >
                                        -
                                    </Text>
                                </Pressable>

                                <Pressable>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: "white",
                                            paddingHorizontal: 10,
                                        }}
                                    >
                                        {item.price * item.quantity}
                                    </Text>
                                </Pressable>

                                <Pressable onPress={() => increaseQuantity(item)}>
                                    <Text
                                        style={{
                                            fontSize: 40,
                                            color: "white",
                                            paddingHorizontal: 10,
                                        }}
                                    >
                                        +
                                    </Text>
                                </Pressable>
                            </Pressable>
                        </View>
                    ))}
                                    </View>*/}
            </>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imgheader} >
                    <ImageBackground source={{uri:image}} style={{ width: "100%", height: 250, resizeMode: 'cover' }} >
                        {header()}
                    </ImageBackground>
                </View>
                <View style={styles.meal}>
                    <Text style={styles.mealText}>{meal}</Text>
                    <Text style={styles.detailText}>{details}</Text>
                </View>
                {renderPrefenceData()}

            </ScrollView>
            {renderCounterData()}
        </View>
    )
}

export default PreferenceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    imgheader: {
        width: "100%",
        backgroundColor: 'white',
        overflow: 'hidden',

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
    },
    meal: {
        backgroundColor: "white",
        padding: 10,
        marginBottom: 10
    },
    mealText: {
        fontSize: 15,
        color: '#43484d',
        fontWeight: "bold"
    },

    detailText: {
        fontSize: 14,
        color: '#5e6977',
        marginTop: 5
    },
    view2: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    text3: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#5e6977',
        marginLeft: 10
    },

    view3: {
        borderWidth: 3,
        borderColor: '#5e6977',
        borderRadius: 5,
        marginRight: 10
    },

    text4: {
        fontWeight: "bold",
        color: '#5e6977',
        padding: 5
    },
    checkbox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10
    },
    checkboxtext: {
        fontWeight: "bold",
        marginLeft: 10,
        color: 'black',
    },
    priceText: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black'
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
        marginLeft: 10
    },
    preferData: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    preferDataText: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
        marginLeft: 10
    },
    menuData: {
        borderWidth: 3,
        borderColor: 'ligtgreen',
        borderRadius: 10,
        marginRight: 10
    },
    menuDataText: {
        padding: 5,
        fontWeight: "bold",
        fontSize: 18,
        color: 'black'
    },
    view4: {
        backgroundColor: "white",
        marginBottom: 10,
        marginLeft: 18,
        borderBottomWidth: 1,
        marginTop: 12,
    },
    view10: {
        backgroundColor: "white",
        marginBottom: 10,

    },
    view6: {
        flexDirection: "row",
        alignItems: "center",
    },
    view19: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10
    },
    qyantity: {
        paddingBottom: 0,
        marginTop: 5,
    },
    quantityText: {
        paddingLeft: 10,
        fontWeight: "bold",
        fontSize: 18,
        color: colors.grey3
    },
    bar: {
        flexDirection: "row",
        backgroundColor: colors.cardbackground,
        paddingVertical: 5, marginBottom: 0,
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 5
    },
    minus: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.lightgreen,
        alignItems: "center",
        justifyContent: "center"
    },
    cart: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'lightgreen',
        justifyContent: 'space-between',
        height: 80
    },
    cartView: {
        backgroundColor: colors.buttons,
        alignItems: "center",
        paddingVertical: 5,
        marginBottom: 0,
        width: 320,
        borderRadius: 12
    },
    cartText: {
        padding: 10,
        fontWeight: "bold",
        fontSize: 18,
    },
    addAmount: {
        position: 'relative',
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 10
    },
    cartBox: {
        flexDirection: 'row',
        backgroundColor: 'lightgreen',
        justifyContent: 'space-between',
        height: 50,
        marginBottom: 15,
        marginLeft: 12,
        borderRadius: 20,
        marginRight: 12,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    CartText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    }
})