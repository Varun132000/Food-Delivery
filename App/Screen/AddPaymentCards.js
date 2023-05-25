import React, { useState } from 'react';
import { View, TextInput, Button, Alert,StyleSheet,TouchableOpacity,Text } from 'react-native';

const AddPaymentCards = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');
  const handlePayment = () => {
   
    if (cardNumber && expiryDate && cvv) {
      // Payment successful
      Alert.alert('Payment Success', 'Payment was successful!');
    } else {
      // Invalid payment details
      Alert.alert('Payment Error', 'Invalid payment details. Please check again.');
    }
  };

  return (
    <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Card Number"
      value={cardNumber}
      keyboardType='numeric'
      maxLength={16}
      onChangeText={text => setCardNumber(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Expiry Date (MM/YY)"
      value={expiryDate}
      keyboardType='numeric'
      onChangeText={text => setExpiryDate(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="CVV"
      value={cvv}
      keyboardType='numeric'
      maxLength={3}
      onChangeText={text => setCVV(text)}
    />
    <TouchableOpacity style={styles.addNewbtn} 
    onPress={()=>{handlePayment()}}>
      <Text  style={styles.btnText}>
        Proceed
      </Text>
    </TouchableOpacity>
  </View>
  );
};

export default AddPaymentCards;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    padding: 16,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  addNewbtn:{
    width:'90%',
    height:50,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:10,
    alignSelf:'center',
    borderRadius:10
},
btnText:{
    color:'#000',
    fontSize:16,
    fontWeight:'600',

}
});

