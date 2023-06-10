import {Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {Image, Rating} from '@rneui/base';

const McReviewScreen = ({navigation}) => {
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
              'https://www.tripadvisor.in/ShowUserReviews-g304551-d1911717-r150173968-McDonald_s-New_Delhi_National_Capital_Territory_of_Delhi.html',
            )
          }>
          <View style={{flexDirection: 'row', marginTop: 10}}>
          
            <Text style={styles.container1}>
              Trip Advisor{'\n'}https://www.tripadvisor.in.....-_Delhi.html
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
              McDonalds in India - Reviews, Photos
            </Text>
            <Text>
              Made of some kind of yogurt and milk and different flavors, they
              are very tasty. And they had CLEAN bathrooms, which is not the
              norm everywhere else,{'\n'} except the ...
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://www.consumeraffairs.com/food/mcd.html')
          }>
          <View style={{flexDirection: 'row'}}>
            
            <Text style={styles.container1}>
              consumerAffairs{'\n'}https://www.consumeraffairs.com › food ›
              {'\n'} mcd
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
              1426 McDonalds Reviews on Deals & Coupons
            </Text>
            <Text>
              McDonalds. 3.8/5 (1144 reviews). 5. Rating: 3.8 · ‎1,144 reviews
              You visited this page on 25/5/23. ...
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://www.facebook.com/McDonalds/reviews')
          }>
          <View style={{flexDirection: 'row'}}>
            
            <Text style={styles.container1}>
              Facebook {'\n'}https://www.facebook.com › McDonalds ›{'\n'}{' '}
              reviews
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>McDonald's - Reviews</Text>
            <Text>
              Horrible service and they can't even make the{'n'} items on the
              menu. Two McDonald's and neither could make what{'\n'} i ordered
              because equipment is always broken.
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://restaurant-guru.in/McDonalds-Haridwar-2')
          }>
          <View style={{flexDirection: 'row'}}>
            
            <Text style={styles.container1}>
              restaurant-guru.in{'\n'}
              https://restaurant-guru.in › Haridwar,{'\n'} Uttarakhand
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
              McDonald's, Haridwar, W3XG+55C - Restaurant Guru
            </Text>
            <Text>
              05-May-2023 — McDonald's, #27 among Haridwar fast food: 2426
              reviews by visitors and 19 detailed photos. Find on the map and
              call to book a table.
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          onPress={() =>
            openWebsite('https://www.sitejabber.com/reviews/mcdonalds.com')
          }>
          <View style={{flexDirection: 'row'}}>
          
            <Text style={styles.container1}>
              Sitejabber{'\n'}https://www.sitejabber.com › ... › Dining ›{'\n'}{' '}
              Restaurants
            </Text>
          </View>
          <View style={{marginTop: 5}}>
            <Text style={styles.container2}>
              McDonald's Reviews - 366 Reviews of Mcdonalds.com
            </Text>
            <Text>
              McDonald's has a rating of 2.31 stars from 366 reviews, indicating
              that most customers are generally dissatisfied with their
              purchases.
            </Text>
          </View>
          <Text style={styles.RatingStyle}>****</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default McReviewScreen;

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
