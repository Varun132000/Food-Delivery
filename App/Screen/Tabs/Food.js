/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {filterData, restaurantsData} from '../Data';
import {connect} from 'react-redux';
import FoodCart from "../../Components/FoodCart";
import SearchComponents from '../../Components/SearchComponents';
import {isAsyncThunkAction} from '@reduxjs/toolkit';
import {toggleSideMenu} from '../../Redux/Controls/ControlsAction';
import {useNavigation} from '@react-navigation/native';
import DrawerView from '../../Navigation/DrawerView';
import FoodCart2 from '../../Components/FoodCart.2';
import Countdown from 'react-native-countdown-component'
import { useTheme } from '@react-navigation/native';
import { colors } from '../styles';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HIGHT = Dimensions.get('window').height;
const Food = ({navigation, toggleSideMenu, showSideMenu}) => {
  
  const [indexCheck, setIndexCheck] = useState('0');
  const nav = useNavigation();
   const { colors } = useTheme();
  const category = () => {
    return (
      <View style={{marginTop: 6}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filterData}
          keyExtractor={item => item.id}
          extractData={indexCheck}
          renderItem={({item, index}) => (
            <Pressable onPress={() => navigation.navigate('SearchResultScreen',{item:item.name})}>
              <View
                style={
                  indexCheck === item.id
                    ? {...styles.smallCard}
                    : {...styles.card}
                }>
                <Image
                  source={item.image}
                  style={{height: 60, width: 60, borderRadius: 30}}
                />
              </View>
              <Text
                style={
                  indexCheck === item.id
                    ? {...styles.smallCardText}
                    : {...styles.cardText}
                }>
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
        <Text style={styles.TextStyle}>Restaurants to explore</Text>
        <FlatList
          style={{marginTop: 10, marginBottom: 10}}
          horizontal={true}
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index}) => (

            <View style={{marginRight: 5}}>
              <FoodCart
                screenWidth={SCREEN_WIDTH * 0.6}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                OnPressRestaurantCard={()=>{ navigation.navigate("RestaurantScreen", { id: index, restaurant: item.restaurantName })}}
              />
            </View>
          )}
        />
      </>
    );
  };
  const renderRestaurantData = () => {
    return (
       <>
        <Text style={styles.TextStyle}>Restaurants to explore</Text>
        <FlatList
          style={{marginTop: 10, marginBottom: 10}}
          horizontal={false}
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index}) => (

            <View style={{marginRight: 5}}>
              <FoodCart2
                screenWidth={SCREEN_WIDTH * 0.95}
                images={item.images}
                restaurantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                OnPressRestaurantCard={()=>{ navigation.navigate("RestaurantScreen", { id: index, restaurant: item.restaurantName })}}
              />
            </View>
          )}
        />
      </>
    );
  };

const CountDowns=()=>{
  return(
    <View style = {{flexDirection : 'row', alignItems:"center",marginTop:10}}>
                <Text style ={styles.textCoundownStyle} >Options changing in</Text>
                <Countdown 
                    until = {3600}
                    size ={14}
                    digitStyle = {{backgroundColor:'lightgreen'}}
                    digitTxtStyle ={{color:'red'}}
                    timeToShow = {['M','S']}
                    timeLabels = {{m:'Min',s:'Sec'}}
                />
            </View>

  )
}



  const foodHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            source={require('../../Assests/Images/hamburger.png')}
            style={styles.hamburger}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.headerText}>Food</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddToCartScreen')}>
          <Image
            source={require('../../Assests/Images/carticon.png')}
            style={styles.cart}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      {foodHeader()}

      <View>
        <SearchComponents />
      </View>
      <ScrollView>
        <Text style={styles.TextStyle}>Hi, What's on Your Mind?</Text>
        <View style={{marginBottom: 100}}>
          {category()}
          {CountDowns()}
          {renderHorizontalData()}
          {renderRestaurantData()}

        </View>
       
      </ScrollView>
      <DrawerView />
    </SafeAreaView>

  )
}





const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    height: 50,
    justifyContent: 'space-between',
  },
  hamburger: {
    height: 20,
    width: 25,
    marginLeft: 15,
    marginTop: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  cart: {
    height: 25,
    width: 25,
    marginRight: 15,
    marginTop: 12,
  },
   TextStyle:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,
    },
  card: {
    borderRadius: 30,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  cardText: {
    fontWeight: 'bold',
    color: 'lightgrey',
    alignSelf: 'center',
  },
  smallCardText: {
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
  },
  textCoundownStyle:{
    marginLeft:15,
    fontSize:16,
    marginTop:-10,
    marginRight:5,
    color:colors.statusbar,

  },
});
const mapStateToProps = state => {
  return {
    showSideMenu: state.controlsReducer.showSideMenu,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleSideMenu: (show, needBlur) =>
      dispatch(toggleSideMenu(show, needBlur)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Food);
