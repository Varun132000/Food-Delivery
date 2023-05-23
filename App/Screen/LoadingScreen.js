import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Lottie from 'lottie-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
const LoadingScreen = () => {
    const route = useRoute();
    const cart = useSelector((state) => state.cart.cart);
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Order", { orderData: cart })
        },2000)
    },[])
    return (
        <SafeAreaView>
            <Lottie source={require('../Assests/Images/thumbs.png')}
                style={{
                    height: 260,
                    width: 300,
                    alignSelf: "center",
                    marginTop: 40,
                    justifyContent: "center",
                }}
                autoPlay
                loop={false}
                speed={0.7} />
            <Text style={{ marginTop: 20, fontSize: 19, fontWeight: "600", textAlign: "center" }}>
                Your Order Has been Recieved
            </Text>
        </SafeAreaView>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})