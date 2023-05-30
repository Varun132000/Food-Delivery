import { StyleSheet, Text, View, SafeAreaView, Pressable, TouchableOpacity, ScrollView, Linking } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { FlatList } from "react-native";
const Order = ({ route }) => {
  const { orderData } = route.params;
  console.log(orderData);
  console.log(route.params)
  const [tip, setTip] = useState(0);
  const time = moment().format("LT");
  console.log(orderData);
  const renderOrderDetails = () => {
    return (
      <View>
        <Text style={styles.orderText}>Order Details</Text>
        <FlatList
          data={orderData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card} >
              <Text style={styles.message}>Food: {item.name}</Text>
              <Text style={styles.message} >Quantity: {item.quantity}</Text>
              <Text style={styles.message} >Total price: {(item.quantity * item.price)}</Text>
            </View>
          )}
        />
      </View>
    );
  }
  const handleContactSupport = () => {
    Linking.openURL('mailto:support@example.com');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: '600' }}>
              Delivery in 20 mins
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 17,
                fontWeight: "600",
                marginTop: 4,
              }}
            >
              Order placed at {time}
            </Text>
          </View>
          <TouchableOpacity onPress={() => handleContactSupport()}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              HELP
            </Text>
          </TouchableOpacity>
        </View>
        {renderOrderDetails()}
        <View>
          <View>
            <Text style={{ fontWeight: "500", fontSize: 17, textAlign: "center", }}>
              Resturant has accepted your order
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20,}}>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 2,
                    marginBottom: 6,
                  }}
                >
                  Tip your hunger Saviour
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    color: "#696969",
                    marginRight: 10,
                    paddingHorizontal: 2,
                  }}
                >
                  Thank your delivery partner for helping you stay safe
                  indoors.Support them through these tough times with a tip
                </Text>
                <Pressable
                  style={{
                    paddingTop: 20,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(30)}
                    style={{
                      backgroundColor: "#F5F5F5",
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      borderRadius: 7,
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        color: "#002D62",
                        fontWeight: "bold",
                      }}
                    >
                      ₹30
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(50)}
                    style={{
                      alignItems: "center",
                      backgroundColor: "#F5F5F5",
                      marginHorizontal: 10,
                      borderRadius: 7,
                      // paddingHorizontal: 10,
                    }}
                  >
                    <Text
                      style={{
                        padding: 4,
                        color: "#002D62",
                        fontWeight: "bold",
                      }}
                    >
                      ₹50
                    </Text>
                    <Text
                      style={{
                        backgroundColor: "orange",
                        paddingHorizontal: 10,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Most Tipped
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(70)}
                    style={{
                      backgroundColor: "#F5F5F5",
                      marginHorizontal: 10,
                      paddingHorizontal: 10,
                      borderRadius: 7,
                    }}
                  >
                    <Text
                      style={{
                        padding: 10,
                        color: "#002D62",
                        fontWeight: "bold",
                      }}
                    >
                      ₹70
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            {tip ? (
              <View>
                <Text
                  style={{
                    color: "#fc8019",
                    padding: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  please pay {"₹"}
                  {tip} to your delivery agent at the time of delivery
                </Text>
                <TouchableOpacity
                  onPress={() => setTip(0)}
                  activeOpacity={0.7}
                  style={{
                    padding: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    top: 10,
                    marginBottom:50
                  }}
                >
                  <Text style={{ color: "red", fontSize: 14, fontWeight: "700" }}>
                    (Cancel)
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Order
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    backgroundColor: "#fc8019",
    padding: 10,
  },
  orderText: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center'
  },
  card: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    marginLeft: 7,
    height: 80,

  },
  message: {
    color: 'black',
    marginLeft: 7,
    fontSize: 15,

  },
})

