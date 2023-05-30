import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useState } from 'react'
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { addToCart, cleanCart, decrementQuantity, incrementQuantity, removeFromCart } from '../Redux/CartReducer';
const AddToCartScreen = ({ navigation }) => {
  const [selectedAddress,setSelectedAddress]=useState('No Selected Address')
  const route = useRoute();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const handleCheckout = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_hZgtieTZpQviPy', // Your api key
      amount: (total+30)*100,
      name: 'food app',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
      const orderData=cart
      navigation.navigate('Order',{orderData})
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  };
  const instructions = [
    {
      id: "0",
      name: "Avoid Ringing",
      iconName: "bell",
    },
    {
      id: "1",
      name: "Leave at the door",
      iconName: "door-open",
    },
    {
      id: "2",
      name: "directions to reach",
      iconName: "directions",
    },
    {
      id: "3",
      name: "Avoid Calling",
      iconName: "phone-alt",
    },
  ];
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        {total > 0 ? (
          <>
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                backgroundColor: "white",
                padding: 15,
                borderRadius: 8,
                marginHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Ordering for Someone else ?{" "}
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#FF4500" }}
              >
                Add Details
              </Text>
            </View>
            <View style={styles.cart} >
              {cart.map((item, index) => (
                <View key={index} style={styles.cartView}>
                  <Text style={{ width: 100, color: 'black', fontSize: 16 }}>{item.name}</Text>
                  <Pressable
                    style={{
                      flexDirection: "row",
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderColor: "#BEBEBE",
                      borderWidth: 0.5,
                      borderRadius: 10,
                    }}
                  >
                    <Pressable onPress={() => {
                      dispatch(decrementQuantity(item));
                    }}>
                      <Text
                        style={{
                          fontSize: 40,
                          color: "green",
                          paddingHorizontal: 6,
                          fontWeight: "600"
                        }}
                      >
                        -
                      </Text>
                    </Pressable>

                    <Pressable>
                      <Text
                        style={{
                          fontSize: 19,
                          color: "green",
                          paddingHorizontal: 8,
                          fontWeight: "600",
                        }}
                      >
                        {item.quantity}
                      </Text>
                    </Pressable>

                    <Pressable onPress={() => {
                      dispatch(incrementQuantity(item));
                    }}>
                      <Text
                        style={{
                          fontSize: 25,
                          color: "green",
                          paddingHorizontal: 6,
                          fontWeight: "600",
                        }}
                      >
                        +
                      </Text>
                    </Pressable>
                  </Pressable>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </Text>
                </View>
              ))}
            </View>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Delivery Instructions
              </Text>
              <ScrollView horizontal
                style={{ marginTop: 10 }}
                showsHorizontalScrollIndicator={false}>
                {instructions.map((item, i) => (
                  <Pressable
                    style={{
                      margin: 10,
                      borderRadius: 10,
                      padding: 10,
                      backgroundColor: "white",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          width: 75,
                          fontSize: 13,
                          color: "#383838",
                          paddingTop: 10,
                        }}
                      >{item.name}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
            <View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'grey',marginLeft:12,fontSize:16,fontWeight:'bold'}}>
                  SelectedAddress
                </Text>
                <Text  style={{color:'blue',marginRight:12,fontSize:16}}
                onPress={()=>{
                  navigation.navigate('Address')                  
                }}>
                  Change Address
                </Text>
              </View>
              <Text style={{margin:20, width:'100%'}}>
                {selectedAddress}
                </Text>  
            </View>
            <View style={{ marginHorizontal: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Billing Details
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 7,
                  padding: 10,
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Item Total
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "400" }}>
                    ₹{total.toFixed(2)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "400", color: "gray" }}
                  >
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    FREE
                  </Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Free Delivery on Your order
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Delivery Tip
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    ADD TIP
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "500", color: "gray" }}
                  >
                    Taxes and Charges
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#FF4500",
                    }}
                  >
                    30
                  </Text>
                </View>

                <View
                  style={{
                    borderColor: "gray",
                    height: 1,
                    borderWidth: 0.5,
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    To Pay
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {(total+30).toFixed(1)}
                  </Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "600" }}
            >
              Your Cart is Empty!
            </Text>
          </View>
        )}
      </ScrollView>
      {total === 0 ? null : (
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            marginBottom: 20,
            padding: 20,
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>₹{(total+30).toFixed(1)}</Text>
            <Text style={{ color: "#00A877", fontSize: 17 }}>View Detailed Bill</Text>
          </View>

          <Pressable
            onPress={() => {
              handleCheckout()
              dispatch(cleanCart());
            }} t
            style={{
              backgroundColor: "#00A877",
              padding: 14,
              width: 200,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Proceed To pay</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};
export default AddToCartScreen

const styles = StyleSheet.create({
  cart: {
    marginTop: 16,
    marginHorizontal: 5,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
    marginLeft: 10,
    marginRight: 10
  },
  cartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  }
})