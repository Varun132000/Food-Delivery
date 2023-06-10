import { StyleSheet, Text, View ,TouchableOpacity, } from 'react-native'
import React from 'react'
import Share from 'react-native-share';

const Refer = () => {
  const shareContent = {
    message: 'Check out this amazing food item!',
    title: 'Food App',
  };
  
  const handleShare = async () => {
    try {
      await Share.open(shareContent);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refer a Friend</Text>
      <Text style={styles.subtitle}>
        Share the app with your friends and earn rewards!
      </Text>
      <View style={styles.referralCodeContainer}>
        <Text style={styles.referralCodeLabel}>Your Referral Code:</Text>
        <Text style={styles.referralCode}>gckhkGFJFCG434Vf</Text>
      </View>
      <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Share Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Refer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  referralCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  referralCodeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  referralCode: {
    fontSize: 16,
  },
  shareButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})