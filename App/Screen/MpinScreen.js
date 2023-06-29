import React, { useContext, useState } from 'react';
import { Image } from 'react-native';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView,Alert } from 'react-native';
import { AuthContext } from '../Navigation/Context';
const MpinScreen = ({navigation}) => {
  const { login } = useContext(AuthContext)
  const [pin, setPin] = useState('');

  const handlePinChange = (text) => {
    setPin(text);
  };

  const handlePinComplete = () => {
    if(pin==1234){
      {login()}
    }
   else{
    Alert.alert('Enter valid data')
   }
  };

  return (
    <ScrollView>
      <View style={styles.Logo}>
        <Image source={require('../Assests/Images/food_logo.png')} style={styles.foodLogo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Enter your MPIN</Text>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            secureTextEntry
            keyboardType="numeric"
            maxLength={4}
            onChangeText={handlePinChange}
            value={pin}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{handlePinComplete()}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  pinInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 200,
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodLogo: {
    height: 160,
    width: 160,
    marginTop: 100,
    alignSelf: 'center',
    marginBottom: 20
},
});

export default MpinScreen;
