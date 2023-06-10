import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ReastaurantHeaders from './ReastaurantHeaders'
import { restaurantsData, menuData, menu } from './Data'
import { TabView, TabBar } from 'react-native-tab-view'
import MenuScreen from './MenuScreen'
import { Route1 } from './MenuTab'
import KfcInfoScreen from './RestInfo/KfcInfoScreen'
import KfcReviewScreen from './Reviews/KfcReviewsScreen'
import McReviewScreen from './Reviews/McReviewScreen'
import McInfoScreen from './RestInfo/McInfoScreen'
import DominoReviewScreen from './Reviews/DominoReviewScreen'
import PizzaHutReviews from './Reviews/PizzaHutReviews'
const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;
const RestaurantScreen = ({ navigation, route }) => {
  const { id, restaurant } = route.params
  const [routes] = useState([
    { key: 'first', title: "MENU" },
    { key: 'second', title: "INFO" },
    { key: 'third', title: "REVIEWS" },
  ])

  const menuPressed = () => {
    // navigation.navigate('PreferenceScreen',{index})
    navigation.navigate('MenuProductScreen')
  }
  const UpdateRoute1 = () => {
    return (
      <View>

      </View>
    )
  }
  const [index, setIndex] = useState(0)
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  )
  const renderTab = () => {
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={UpdateRoute1}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        tabBarPosition='top'
      />
    )
  }
  const renderStarData = () => {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 10 }}>
        <Image source={require('../Assests/Images/star.png')} style={{ height: 15, width: 15 }} />
        <Text style={styles.restStar}>{restaurantsData[id].averageReview}</Text>
        <Text style={styles.restfoodType}>{restaurantsData[id].numberOfReview}</Text>
        <Image source={require('../Assests/Images/distance.png')} style={{ height: 20, width: 20, marginLeft: 14 }} />
        <Text style={styles.restDistance}>{restaurantsData[id].farAway} min away</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <ReastaurantHeaders id={id} navigation={navigation} />
        {restaurantsData[id].discount &&
          <View style={styles.discount}>
            <Text style={styles.textDiscount}>
              GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL
            </Text>
          </View>
        }
        <View style={styles.restName}>
          <Text style={styles.restTextName}>
            {restaurantsData[id].restaurantName}
          </Text>
        </View>
        <Text style={styles.restfoodType}>
          {restaurantsData[id].foodType}
        </Text>
        {renderStarData()}
        {renderTab()}
        {/*index === 0 && <Route1 onPress={menuPressed} />*/}
        {id === 0 && index === 0 && <MenuScreen onPress={menuPressed} />}
        {id === 0 && index === 1 && <McInfoScreen/>}
        {id === 0 && index === 2 && <McReviewScreen />}
        {id === 1 && index === 0 && <MenuScreen onPress={menuPressed} />}
        {id === 1 && index === 1 && <KfcInfoScreen />}
        {id === 1 && index === 2 && <KfcReviewScreen />}
        {id === 2 && index === 2 && <PizzaHutReviews />}
        {id === 2 && index === 0 && <MenuScreen onPress={menuPressed} />}
        {id === 3 && index === 2 && <DominoReviewScreen />}
        {id === 3 && index === 0 && <MenuScreen onPress={menuPressed} />}
        {id === 4 && index === 0 && <MenuScreen onPress={menuPressed} />}
        {id === 5 && index === 0 && <MenuScreen onPress={menuPressed} />}
        {id === 6 && index === 0 && <MenuScreen onPress={menuPressed} />}
        {id === 7 && index === 0 && <MenuScreen onPress={menuPressed} />}
      </ScrollView>

    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  discount: {
    padding: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  textDiscount: {
    color: "green",
    fontSize: 14,
    fontWeight: "bold"
  },
  restName: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  restTextName: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'red'
  },
  restfoodType: {
    fontSize: 15,
    color: 'black',
    marginLeft: 10
  },
  restDistance: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'black',
    marginLeft: 6
  },
  restStar: {
    fontSize: 15,
    color: 'black'
  },
  tab: {
    paddingTop: 0,
    backgroundColor: 'lightgreen',
    justifyContent: "space-between",
    alignItems: "center"
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: {
    fontWeight: 'bold',
    color: 'black'
  },

  tabStyle: {
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },
  cart: {
    backgroundColor: '#ff8c52',
    height: 50,
    alignContent: "center",
    marginBottom: 0,
    justifyContent: "center"
  },
  textCart: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: 'white',
  },
  count: {
    borderWidth: 1,
    marginRight: 10,
    borderColor: 'white',
    borderRadius: 6,
    paddingBottom: 2
  },
  textCount: {
    paddingHorizontal: 3,
    fontWeight: "bold",
    fontSize: 18,
    color: 'white',
  },
  header: {
    flexDirection: "row",
    alignItems: 'center',
  },
  header1: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  back: {
    height: 30,
    width: 30,
  }
})