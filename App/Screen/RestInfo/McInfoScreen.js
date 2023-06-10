
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const McInfoScreen = ({ navigation }) => {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <ScrollView>
        <Text style={styles.AboutStyle}>About us </Text>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
            Our story starts with one man.
          </Text>
          <Text>
            Back in 1954, a man named Ray Kroc discovered a small burger
            restaurant in California, and wrote the first page of our history.
            From humble beginnings as a small restaurant, we're proud to have
            become one of the world's leading food service brands with more than
            36,000 restaurants in more than 100 countries.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          <View>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Our History
            </Text>
            <Text>See how far we’ve come and {'\n'} how we got to now.</Text>
            <TouchableOpacity
              style={styles.StyleTochable}
              onPress={() =>
                openWebsite(
                  'https://www.mcdonalds.com/us/en-us/about-us/our-history.html',
                )
              }>
              <Text style={{ alignSelf: 'center' }}>Lern More</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 5 }}>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Leadership Team
            </Text>
            <Text>We wouldn’t be here today {'\n'} without our leaders.</Text>
            <TouchableOpacity
              style={styles.StyleTochable}
              onPress={() =>
                openWebsite(
                  'https://www.mcdonalds.com/us/en-us/about-us/leadership-team.html',
                )
              }>
              <Text style={{ alignSelf: 'center' }}>Lern More</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          <View>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Values in Action
            </Text>
            <Text>
              See the steps we take to be {'\n'} a good community leader.
            </Text>
            <TouchableOpacity
              style={styles.StyleTochable}
              onPress={() =>
                openWebsite(
                  'https://corporate.mcdonalds.com/corpmcd/our-stories.html',
                )
              }>
              <Text style={{ alignSelf: 'center' }}>Lern More</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 5 }}>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Investor Relations
            </Text>
            <Text>
              Find out what drives our {'\n'} business and see our {'\n'}{' '}
              reports.
            </Text>
            <TouchableOpacity
              style={styles.StyleTochable}
              onPress={() =>
                openWebsite(
                  'https://www.mcdonalds.com/us/en-us/us-franchising.html',
                )
              }>
              <Text style={{ alignSelf: 'center' }}>Lern More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          <View>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              News& Notifications
            </Text>
            <Text>Follow us, like us, read about{'\n'} us.</Text>
            <TouchableOpacity
              style={styles.StyleTochable}
              onPress={() =>
                openWebsite(
                  'https://www.mcdonalds.com/us/en-us/about-us/our-history.html',
                )
              }>
              <Text style={{ alignSelf: 'center' }}>Lern More</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Franchise Info
            </Text>
            <Text>Learn about Owner/{'\n'}Operator opportunities.</Text>
            <TouchableOpacity
              style={styles.StyleTochable}
              onPress={() =>
                openWebsite(
                  'https://www.mcdonalds.com/us/en-us/about-us/leadership-team.html',
                )
              }>
              <Text style={{ alignSelf: 'center' }}>Lern More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
          }}>
          <View>

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 10,
                color: 'black',
              }}>
              Recalls & Alerts
            </Text>
            <Text>
              Find urgent consumer alerts {'\n'}and information on recalls{'\n'}{' '}
              here.
            </Text>
            <TouchableOpacity
              style={styles.StyleTochable}
              onPress={() =>
                openWebsite(
                  'https://www.mcdonalds.com/us/en-us/about-us/recalls.html',
                )
              }>
              <Text style={{ alignSelf: 'center' }}>Lern More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default McInfoScreen;

const styles = StyleSheet.create({
  AboutStyle: {
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  StyleTochable: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFA500',
    marginRight: 110,
  },
});