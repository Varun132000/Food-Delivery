<<<<<<< Updated upstream
/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList,Pressable,ScrollView, Image, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {filterData} from '../Data'
import DrawerView from '../DrawerView';
import {connect} from 'react-redux';
import { toggleHomeAddSheet,toggleSideMenu } from '../../Redux/Controls/ConrtolsAction';

const Food = ({ toggleSideMenu,
  showSideMenu,}) => {
  const [indexCheck,setIndexCheck]=useState('0')
  const category=()=>{
    return(
      <View style={{marginTop:6}}>
=======
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable keyword-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import { StyleSheet, Text, View, FlatList, Pressable, ScrollView, Image, SafeAreaView,TouchableOpacity,Dimensions } from 'react-native'
import React, { useState } from 'react'
import { filterData,restaurantsData,filterData2 } from '../Data'
import { connect } from 'react-redux';
import SearchComponents from '../../Components/SearchComponents';
import { isAsyncThunkAction } from '@reduxjs/toolkit'
import { toggleSideMenu } from '../../Redux/Controls/ControlsAction'
import { useNavigation } from '@react-navigation/native';
import DrawerView from '../../Navigation/DrawerView';
import FoodCart from '../../Components/FoodCart';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width
const Food = ({ navigation, toggleSideMenu, showSideMenu, }) => {
  const [indexCheck, setIndexCheck] = useState('0')
  const nav = useNavigation();
  const category = () => {
    return (
      <View style={{ marginTop: 6 }}>
>>>>>>> Stashed changes
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={filterData}
        keyExtractor={(item)=>item.id}
        extractData={indexCheck}
        renderItem={({item,index})=>(
          <Pressable onPress={()=>setIndexCheck(item.id)}>
            <View style={indexCheck===item.id?{...styles.smallCard}:{...styles.card}}>
              <Image source={item.image} style={{height:60,width:60,borderRadius:30}}/>
            </View>
            <Text style={indexCheck===item.id?{...styles.smallCardText}:{...styles.cardText}}>
              {item.name}
            </Text>
          </Pressable>
        )}
        />
      </View>
    )
  }
 
  const CountDowns=()=>{
    return(
      <View style = {{flexDirection : 'row', alignItems:"center",marginTop:15}}>
                <Text style ={{marginLeft:15,fontSize:16,marginTop:-10,marginRight:5,color:'black'}} >Options changing in</Text>
                <CountDown 
                    until = {3600}
                    size ={14}
                    digitStyle = {{backgroundColor:'lightgreen'}}
                    digitTxtStyle ={{color:'tomato'}}
                    timeToShow = {['M','S']}
                    timeLabels = {{m:'Min',s:'Sec'}}
                />
            </View>   

    )
  }
const freeDeliveryrestaurants =()=>{
  return( 
  <FlatList 
               style ={{marginTop:10, marginBottom:10}} 
               horizontal ={true}
               data = {restaurantsData}
               keyExtractor = {(item,index)=>index.toString()}   
               showsHorizontalScrollIndicator = {false}
               renderItem = {({item})=>(
                   <View style ={{marginRight:5}}>
                       <FoodCart 
                           screenWidth  ={'100%'}
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           
                       />
                   </View>
               )}  
            />    
    
  )
}
const Promotionsrestaurant =()=> {
return(
  <View>
            <FlatList 
               style ={{marginTop:10, marginBottom:10}} 
               horizontal ={true}
               data = {restaurantsData}
               keyExtractor = {(item,index)=>index.toString()}   
               showsHorizontalScrollIndicator = {false}
               renderItem = {({item})=>(
                   <View style ={{marginRight:5}}>
                       <FoodCart 
                           screenWidth  ={'100%'}
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}

                       />
                   </View>
               )}  
            />
        </View>
)
}

const Arearestaurant=()=>{
  return(
    
        <View style ={{paddingTop:10}}>
        { 
            restaurantsData.map(item =>(
                <View key ={item.id} style = {{paddingBottom:20}}>
                <FoodCart 
                           screenWidth  ={SCREEN_WIDTH*0.95}
                        
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}

                       />
                </View>
            )
            )
        }        
    </View>    
  )
}
  const foodHeader = () => {
    return (
      <View style={styles.header}>
      <TouchableOpacity onPress={() => toggleSideMenu(!showSideMenu)}>
        <Image source={require('../../Assests/Images/hamburger.png')} style={styles.hamburger} />
       </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headerText}>
            Food
          </Text>
        </View>
        <Image source={require('../../Assests/Images/carticon.png')}
          style={styles.cart} />
      </View>
    )
  }
  return (
    <SafeAreaView>
<<<<<<< Updated upstream
     <ScrollView>
     {foodHeader()}
        <View>
=======
      {foodHeader()}
      <View style={styles.search}>
        <SearchComponents />
      </View>
      <ScrollView>
        <View style={{marginBottom:110}} >
>>>>>>> Stashed changes
          <Text style={styles.headerCategory}>
          Hi, What's on Your Mind?
          </Text>
          {category()}
          {CountDowns()}
          <Text style={styles.headerCategory}>
<<<<<<< Updated upstream
              Restaurants to explore
          </Text>
=======
            Free Delivery now
          </Text>
          {freeDeliveryrestaurants()}
           <Text style={styles.headerCategory}>
            Promotions available
          </Text>
          {Promotionsrestaurant()}
          <Text style={styles.headerCategory}>
            Restaurant in your area
          </Text>
          {Arearestaurant()}
>>>>>>> Stashed changes
        </View>
      </ScrollView>
      <DrawerView />
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
    alignSelf: 'center',
    marginTop:15,
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
<<<<<<< Updated upstream
    alignSelf: 'center'
=======
    marginTop:12
>>>>>>> Stashed changes
  },
  headerCategory: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: 10,
<<<<<<< Updated upstream
    marginTop:5
=======
    marginTop: 5
>>>>>>> Stashed changes
  },
  card:{
    borderRadius:30,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
  },
  smallCard:{
    borderRadius:30,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
  },
  cardText:{
    fontWeight:'bold',
    color:'lightgrey',
    alignSelf:'center'
  },
<<<<<<< Updated upstream
  smallCardText:{
    fontWeight:'bold',
    color:'green',
    alignSelf:'center'
=======
  smallCardText: {
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center'
  },
  search: {

>>>>>>> Stashed changes
  }
})
const mapStateToProps = state => {
  return {
    showSideMenu: state.controlsReducer.showSideMenu,
    isHomeAddSheetShown: state.controlsReducer.isHomeAddSheetShown,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    PutNotificationaction: (userEmail, access_token, client, ids) =>
      dispatch(PutNotificationaction(userEmail, access_token, client, ids)),
    toggleHomeAddSheet: (show, needBlur) =>
      dispatch(toggleHomeAddSheet(show, needBlur)),
    toggleSideMenu: (show, needBlur) =>
      dispatch(toggleSideMenu(show, needBlur)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Food);
