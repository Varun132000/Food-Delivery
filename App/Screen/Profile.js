import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

})