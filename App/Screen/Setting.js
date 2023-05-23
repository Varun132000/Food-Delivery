import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Setting = ({navigation}) => {
  const foodHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.goBack()
        }}>
          <Image source={require('../Assests/Images/back.png')} style={styles.hamburger} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headerText}>
            Setting
          </Text>
        </View>
      </View>
    )
  }
  const feedBack=()=>{
    return(
      <View>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../Assests/Images/feed.png')}style={{height:30,width:30,marginLeft:12}}/>
          <Text style={styles.profile}>
            FeedBack
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  const aboutMe=()=>{
    return(
      <View>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../Assests/Images/feed.png')}style={{height:30,width:30,marginLeft:12}}/>
          <Text style={styles.profile}>
           About Me
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  const renderLogOut=()=>{
    return(
      <View>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../Assests/Images/logout.jpg')}style={{height:30,width:30,marginLeft:12}}/>
          <Text style={styles.profile}>
          log Out
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View>
      {foodHeader()}
      <View>
        <TouchableOpacity style={styles.card}>
          <Image source={require('../Assests/Images/bitmoji.png')}style={{height:30,width:30,marginLeft:12}}/>
          <Text style={styles.profile}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
      {feedBack()}
     {aboutMe()}
     {renderLogOut()}
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#808000',
    height: 50,
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
    color: 'white',
    marginLeft: 30
  },
  profile: {
    fontSize: 18,
    marginLeft: 30,
    
  },
  card: {
    flexDirection:'row',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    marginLeft: 7,
    height: 60,
    elevation: 16,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    overflow: 'hidden',
    alignItems:'center'
  },
})