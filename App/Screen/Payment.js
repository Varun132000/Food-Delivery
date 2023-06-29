import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Linking } from 'react-native';

const Payment = ({ navigation }) => {
  const openPhonePe = async () => {
    const url = 'https://www.phonepe.com/'
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("PhonePe app is not installed.");
    }
  };
  const openPaytm = async () => {
    const url = 'https://paytm.com/'
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Paytm app is not installed.");
    }
  };
  const openGooglePe = async () => {
    const url = 'https://developers.google.com/pay'
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Google Pe app is not installed.");
    }
  };
  const renderLinkAccount = () => {
    return (
      <>
        <View>
          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
            <Image source={require('../Assests/Images/paytm.png')} style={{ height: 35, width: 35 }} />
            <Text style={styles.nameText}>
              Paytm
            </Text>
            <TouchableOpacity style={styles.link}onPress={() => openPaytm()}>
              <Text style={styles.linkText}>
                Link Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
            <Image source={require('../Assests/Images/Google.png')} style={{ height: 35, width: 35 }} />
            <Text style={styles.nameText} onPress={() => openGooglePe()}>
              Google Pay
            </Text>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText} >
                Link Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
            <Image source={require('../Assests/Images/phonepe.png')} style={{ height: 35, width: 35 }} />
            <Text style={styles.nameText}>
              Phone Pe
            </Text>
            <TouchableOpacity style={styles.link} onPress={() => openPhonePe()}>
              <Text style={styles.linkText}>
                Link Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.card}>Saved Cards</Text>
      </View>
      <View>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, marginLeft: 15 }}
          onPress={() => navigation.navigate('AddPaymentCards')}>
          <Image source={require('../Assests/Images/card.png')} style={{ height: 40, width: 45 }} />
          <Text style={styles.addcard}>
            Add New Card
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <Text style={styles.card}>Wallet</Text>
      </View>
      {renderLinkAccount()}
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    backgroundColor: 'lightgrey',
  },
  card: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15
  },
  addcard: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 15
  },
  nameText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
    marginRight: 40
  },
  link: {
    justifyContent: 'center',
    marginLeft: 90
  },
  linkText: {
    color: 'green',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 15
  }
})