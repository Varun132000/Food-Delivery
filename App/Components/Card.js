/* eslint-disable prettier/prettier */
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
const Card = ({
  OnPressRestaurantCard,
  restaurantName,
  deliveryAvailabe,
  discountAvailable,
  discountPercent,
  numberOfReview,
  businessAddress,
  farAway,
  averageReview,
  images,
  productData }) => {
  return (
    <View >
      <TouchableOpacity onPress={OnPressRestaurantCard}>
        <View style={styles.view1}>
          <View style={{ height: 300 }}>
            <ImageBackground
              style={{ height: '100%' }}
              source={{ uri: images }}
              imageStyle={styles.imageStyle}
            />
            <View style={styles.image}>
              <Text style={styles.text1}>{averageReview}</Text>
              <Text style={styles.text2}> {numberOfReview} reviews</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <View style={{ paddingTop: 5 }}>
              <Text style={styles.text5}>{restaurantName}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.view4}>
                <Text style={styles.view5}>{farAway}Min</Text>
              </View>
              <View style={{ flex: 9 }}>
                <Text style={styles.text6}>{businessAddress}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 5, paddingBottom: 20 }}>
        <FlatList
          data={productData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <ProductCard
              image={item.image}
              productName={item.name}
              price={item.price}
            />
          )}
          horizontal={true}
        />

      </View>


    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container1:
  {shadowColor: 'black',
		
		shadowOpacity: 0.8,
		shadowRadius: 90,
		elevation: 16,
   
  },
  view1: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    shadowColor: 'black',
    marginVertical:9,
		
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
    borderWidth:0.1,
    //borderRadius:6
    
  },

  image: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: 'rgba(52, 52, 52,0.4)',
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12
  },

  imageStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -3
  },

  text2: {
    color: "white",
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0
  },

  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -5
  },
  text3: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#5e6977',
  },

  text4: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#5e6977',
  },
  view3: {
    flexDirection: "column",
    marginHorizontal: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginTop: 5
  },

  text5: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#43484d',
  },

  view4: {
    flex: 4,
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: '#bdc6cf',
    paddingHorizontal: 5,

  },

  view5: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    color: '#86939e'
  },

  text6: {
    fontSize: 12,
    paddingTop: 5,
    color: '#5e6977',
    paddingHorizontal: 10,

  }
})