import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReastaurantHeaders from './ReastaurantHeaders'

const RestaurantScreen = ({navigation,route}) => {
  const {id,restaurant}=route.params
  return (
    <View>
      <ReastaurantHeaders id={id}/>
    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})