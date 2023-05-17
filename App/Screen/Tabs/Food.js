import { StyleSheet, Text, View, FlatList, StatusBar, Pressable, ScrollView, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { filterData, restaurantsData } from '../Data'
import { connect } from 'react-redux';
import FoodCart from '../../Components/FoodCart';
import SearchComponents from '../../Components/SearchComponents';
import { toggleSideMenu } from '../../Redux/Controls/ControlsAction'
import { useNavigation } from '@react-navigation/native';
import DrawerView from '../../Navigation/DrawerView';
const SCREEN_WIDTH = Dimensions.get('window').width
const Food = ({ navigation, toggleSideMenu, showSideMenu, id }) => {
  const [indexCheck, setIndexCheck] = useState('0')
  const nav = useNavigation();
  const category = () => {
    return (
      <View style={{ marginTop: 6 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filterData}
          keyExtractor={(item) => item.id}
          extractData={indexCheck}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => navigation.navigate('SearchResultScreen', { item: item.name })}>
              <View style={indexCheck === item.id ? { ...styles.smallCard } : { ...styles.card }}>
                <Image source={item.image} style={{ height: 60, width: 60, borderRadius: 30 }} />
              </View>
              <Text style={indexCheck === item.id ? { ...styles.smallCardText } : { ...styles.cardText }}>
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
    )
  }
  const renderHorizontalData = () => {
    return (
      <>
        <Text style={styles.headerCategory}>
          Restaurants to explore
        </Text>

        <FlatList
          style={{ marginTop: 10, marginBottom: 10 }}
          horizontal={true}
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={{ marginRight: 5 }}>
              <FoodCart
                screenWidth={SCREEN_WIDTH * 0.6}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                OnPressRestaurantCard={() => { navigation.navigate("RestaurantScreen", { id: index, restaurant: item.restaurantName }) }}
              />

            </View>
          )}
        />


      </>
    )
  }
  const renderRestaurantData = () => {
    return (
      <>
        <Text style={styles.headerCategory}>Restaurants in your Area</Text>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 20 }}>
          <FlatList
            style={{ marginTop: 10, marginBottom: 20 }}
            horizontal={false}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View style={{ marginRight: 5 }}>
                <FoodCart
                  screenWidth={SCREEN_WIDTH * 0.95}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  OnPressRestaurantCard={() => { navigation.navigate("RestaurantScreen", { id: index, restaurant: item.restaurantName }) }}
                />

              </View>
            )}
          />
        </View>
      </>
    )
  }
  const foodHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.toggleDrawer()
        }}>
          <Image source={require('../../Assests/Images/hamburger.png')} style={styles.hamburger} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headerText}>
            Food
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddToCartScreen')}>
          <Image source={require('../../Assests/Images/carticon.png')}
            style={styles.cart} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView>
      {foodHeader()}
      <View >
        <SearchComponents />
      </View>
      <ScrollView>
        <Text style={styles.headerCategory}>
          Hi, What's on Your Mind?
        </Text>
        <View style={{ marginBottom: 100 }}>
          {category()}
          {renderHorizontalData()}
          {renderRestaurantData()}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
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
  headerCategory: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    marginTop: 15,
    marginLeft: 5
  },
  card: {
    borderRadius: 30,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100
  },
  cardText: {
    fontWeight: 'bold',
    color: 'lightgrey',
    alignSelf: 'center'
  },
  smallCardText: {
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center'
  },

})
const mapStateToProps = state => {
  return {
    showSideMenu: state.controlsReducer.showSideMenu,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleSideMenu: (show, needBlur) =>
      dispatch(toggleSideMenu(show, needBlur)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Food);