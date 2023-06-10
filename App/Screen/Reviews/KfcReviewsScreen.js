import {Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
const KfcReviewScreen = ({navigation}) => {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={{backgroundColor:'white'}}>
    <View style={{marginLeft: 10, marginRight: 10, }}>
      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite(
              'https://www.tripadvisor.in/ShowUserReviews-g644044-d5903763-r502676637-KFC-Durgapur_Bardhaman_District_West_Bengal.html',
            )
          }>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            
            <Text style={styles.container1}>
              TripAdvisor{'\n'}https://www.tripadvisor.in.....-_Delhi.html
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
              Best kfc - Reviews, Photos
            </Text>
            <Text>
              KFC is always best for chicken items. It's taste is very nice and awesome. I have been to KFC many times and love it. Date of visit: December 2016.
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://www.consumeraffairs.com/food/kfc.html')
          }>
          <View style={{flexDirection: 'row'}}>
           
            <Text style={styles.container1}>
              consumerAffairs{'\n'}https://www.consumeraffairs.com › food ›
              {'\n'} mcd
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
             525 KFC Reviews on Deals & Coupons
            </Text>
            <Text>
             Chicken is the cheapest meat you can buy but KFC has raised their prices to ridiculous levels. We are not poor but we can go out and have a nice steak dinner at ...
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://www.facebook.com/KFC/reviews')
          }>
          <View style={{flexDirection: 'row'}}>
           
            <Text style={styles.container1}>
              Facebook {'\n'}https://www.facebook.com › McDonalds ›{'\n'}{' '}
              reviews
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>KFC - Reviews</Text>
            <Text>
              KFC used to have great quality control but not any more. We got the sandwich and nuggets. Sandwich was good but very salty. Nuggets were cold, old and very ...
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://restaurant-guru.in/KFC-Badheri-Rajputan-2')
          }>
          <View style={{flexDirection: 'row'}}>
           
            <Text style={styles.container1}>
              restaurant-guru.in{'\n'}
              https://restaurant-guru.in › Haridwar,{'\n'} Uttarakhand
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
              KFC, Haridwar, Unit No HF 1 - Restaurant menu and reviews       </Text>
            <Text>
              04-May-2023 — KFC, #104 among Haridwar fast food: 1671 reviews by visitors and 19 detailed photos. Find on the map and call to book a table.
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://www.sitejabber.com/reviews/kfc.com')
          }>
          <View style={{flexDirection: 'row'}}>
            
            <Text style={styles.container1}>
              Sitejabber{'\n'}https://www.sitejabber.com › ... › Dining ›{'\n'}{' '}
              Restaurants
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
              KFC Reviews - 175 Reviews of Kfc.com
            </Text>
            <Text>
              KFC has a rating of 2.36 stars from 175 reviews, indicating that most customers are generally dissatisfied with their purchases. Reviewers complaining about KFC ...
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default KfcReviewScreen;

const styles = StyleSheet.create({
  container1: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginLeft: 5,
  },
  container2: {
    color: 'blue',
    fontSize: 20,
  },
  containertext3: {},
  RatingStyle: {
    fontSize: 20,
    width: 50,
  },
});