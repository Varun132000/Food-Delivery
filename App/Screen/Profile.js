import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Profile = ({ navigation, route }) => {
  const [isMember, setIsMember] = useState(true);
  const { profileData } = route.params || {};
  const user = {
    name: 'Varun',
    email: 'varunSinghal132000@gmail.com',
    profileImage: require('../Assests/Images/bitmoji.png'),
    addresses: [
      'Delhi',
      'North Delhi',
    ],
    paymentMethods: [
      'Visa ending in 1234',
      'Mastercard ending in 5678',
    ],
    orderHistory: [
      { id: 1, date: '2023-05-18', total: 25.99 },
      { id: 2, date: '2023-05-17', total: 39.99 },
    ],
    favorites: ['Pizza', 'Burger'],

  };
  const handleCancelMembership = async () => {
    try {
      const userId = 'users';
      const documentRef = firestore().collection('memberships').doc(userId);

      await documentRef.update({ isMember: false, membershipType: '' });

      setIsMember(false);
    } catch (error) {
      console.error('Error canceling membership:', error);
    }
  };
  return profileData ? (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        {isMember && (
          <Image
            source={require('../Assests/Images/star.png')}
            style={styles.starIcon}
          />
        )}

      </View>
      <Image source={profileData.profileImage ? { uri: profileData.profileImage } : require('../Assests/Images/bitmoji.png')} style={styles.profileImage} />
        <Text style={styles.name}>{profileData.name || ''}</Text>
        <Text style={styles.email}>{profileData.email || ''}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Addresses</Text>
        {user.addresses.map((address, index) => (
          <Text key={index} style={styles.address}>{address}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Methods</Text>
        {user.paymentMethods.map((paymentMethod, index) => (
          <Text key={index} style={styles.paymentMethod}>{paymentMethod}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order History</Text>
        {user.orderHistory.map(order => (
          <Text key={order.id} style={styles.order}>
            Order #{order.id} - Date: {order.date} - Total: ${order.total.toFixed(2)}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorites</Text>
        {user.favorites.map((favorite, index) => (
          <Text key={index} style={styles.favorite}>{favorite}</Text>
        ))}
      </View>
      {isMember && (
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancelMembership}
        >
          <Text style={styles.cancelButtonText}>Cancel Membership</Text>
        </TouchableOpacity>

      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfileScreen')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  ):(
    <Text> Loading Profile...</Text>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    marginBottom: 4,
  },
  paymentMethod: {
    fontSize: 16,
    marginBottom: 4,
  },
  order: {
    fontSize: 16,
    marginBottom: 4,
  },
  favorite: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    bottom: 10
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;
