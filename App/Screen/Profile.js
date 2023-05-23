import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = ({navigation}) => {
 
  const user = {
    name: 'Varun',
    email: 'varunSinghal132000@gmail.com',
    profileImage: require('../Assests/Images/bitmoji.png'), // Replace with actual image path or URL
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

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

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('EditProfileScreen')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
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
});

export default Profile;

/*import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {

  const renderLogo = () => {
    return (
      <>
        <View style={styles.profilelogo}>
          <TouchableOpacity>
            <Image source={require('../Assests/Images/bitmoji.png')} style={styles.bitmoji} />
          </TouchableOpacity>
          <Text style={styles.nameProfile}>
            Varun Singhal
          </Text>
        </View>
        <View style={styles.border}>
          <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <Image source={require('../Assests/Images/phone.png')} style={styles.phone} />
            <Text style={styles.textph}>
              9050970811
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 12 }}>
            <Image source={require('../Assests/Images/mail.png')} style={styles.mail} />
            <Text style={styles.textph}>
              varunsinghal132000@gmail.com
            </Text>
          </View>
        </View>
      </>
    )
  }
  const renderData = () => {
    return (
      <View>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <Image source={require('../Assests/Images/favour.png')} style={styles.favor} />
            <Text style={styles.favorText}>
              Your Favourites
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <Image source={require('../Assests/Images/setting.png')} style={styles.favor} />
            <Text style={styles.favorText}>
              Settings
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <Image source={require('../Assests/Images/refer.png')} style={styles.favor} />
            <Text style={styles.favorText}>
              Tell Your Friend
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  const profileHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.toggleDrawer()
        }}>
          <Image source={require('../Assests/Images/hamburger.png')} style={styles.hamburger} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headerText}>
            Profile
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
          <Image source={require('../Assests/Images/edit.png')}
            style={styles.cart} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View>
      {profileHeader()}
      {renderLogo()}
      {renderData()}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#808000',
    height: 50,
    justifyContent: 'space-between'
  },
  hamburger: {
    height: 20,
    width: 25,
    marginLeft: 15,
    marginTop: 15
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  cart: {
    height: 25,
    width: 25,
    marginRight: 15,
    marginTop: 12
  },
  bitmoji: {
    height: 110,
    width: 90,
    borderRadius: 40,
  },
  profilelogo: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 15
  },
  nameProfile: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    fontWeight: '400',
    marginLeft: 15
  },
  phone: {
    height: 20,
    width: 20,
    marginLeft: 15,
  },
  textph: {
    marginLeft: 12,
    color: 'black',
    fontWeight: '400'
  },
  mail: {
    height: 20,
    width: 25,
    marginLeft: 15,
    marginBottom: 15
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  favor: {
    height: 30,
    width: 30,
    marginLeft: 15,

  },
  favorText: {
    marginLeft: 16,
    marginTop: 2,
    fontSize: 20,
    color: 'black'
  }

})*/