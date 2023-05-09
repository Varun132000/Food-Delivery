import { StyleSheet, Text, View, FlatList,Pressable,ScrollView, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import {filterData} from '../Data'
import { isAsyncThunkAction } from '@reduxjs/toolkit'

const Food = () => {
  const [indexCheck,setIndexCheck]=useState('0')
  const category=()=>{
    return(
      <View style={{marginTop:6}}>
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
  const foodHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={require('../../Assests/Images/hamburger.png')} style={styles.hamburger} />
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
      {foodHeader()}
      <ScrollView>
        <View>
          <Text style={styles.headerCategory}>
          Hi, What's on Your Mind?
          </Text>
          {category()}
          <Text style={styles.headerCategory}>
              Restaurants to explore
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Food

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
    alignSelf: 'center'
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
    alignSelf: 'center'
  },
  headerCategory: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'grey',
    paddingLeft: 10,
    marginTop:5
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
  smallCardText:{
    fontWeight:'bold',
    color:'green',
    alignSelf:'center'
  }
})