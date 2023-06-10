import { StyleSheet, Text, View ,TouchableOpacity,FlatList,TextInput} from 'react-native'
import React, { useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PizzaHutReviews() {
    const [reviewText1, setReviewText1] = useState('');
    const [reviews, setReviews] = useState([]);
  
    useEffect(() => {
      loadReviews();
    }, []);
  
    const saveReview = async () => {
      try {
        const newReview = {
          id: Date.now().toString(),
          text: reviewText1,
        };
  
        await AsyncStorage.setItem(newReview.id, newReview.text);
        console.log('Review saved successfully!');
  
      
        setReviews([...reviews, newReview]);
  
        setReviewText1('');
      } catch (error) {
        console.log('Error saving review:', error);
      }
    };
  
    const loadReviews = async () => {
      try {
       
        const allKeys = await AsyncStorage.getAllKeys();
        const savedReviews = await AsyncStorage.multiGet(allKeys);
        const loadedReviews = savedReviews.map(([key, value]) => ({
          id: key,
          text: value,
        }));
        setReviews(loadedReviews);
      } catch (error) {
        console.log('Error loading reviews:', error);
      }
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => <Text>{item.text}</Text>}
          keyExtractor={item => item.id}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your review"
          onChangeText={text => setReviewText1(text)}
          value={reviewText1}
        />
       <TouchableOpacity onPress={saveReview} style={styles.btn}>
          <Text style={styles.btnText}>
              Save Review
          </Text>
       </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
      borderRadius:20,
      marginTop:20
    },
    btn: {
      height: 56,
      backgroundColor: 'red',
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 25,
      marginRight: 30,
      borderRadius: 12
  },
  btnText:{
      fontSize: 20,
      fontWeight: '500',
      textTransform: 'uppercase',
      color: 'white'
  }
  });