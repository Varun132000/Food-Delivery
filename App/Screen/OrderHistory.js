import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const OrderHistory = ({ orderHistory }) => {
  return (
    <View>
      <Text style={styles.orderText}>Order History</Text>
      <FlatList
        data={orderHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Order ID: {item.orderId}</Text>
            <Text>Food: {item.food}</Text>
            <Text>Quantity: {item.quantity}</Text>
            {/* Render other order details */}
          </View>
        )}
      />
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  orderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
});
