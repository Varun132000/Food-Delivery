import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, Image } from 'react-native'
import Card from '../Components/Card';
import { restaurantsData } from './Data';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SearchResultScreen = ({ navigation, route },props) => {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    style={{ backgroundColor: 'white' }}
                    data={restaurantsData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Card
                            screenWidth={SCREEN_WIDTH}
                            images={item.images}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            restaurantName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            OnPressRestaurantCard={() => { navigation.navigate("RestaurantScreen", { id: index, restaurant: item.restaurantName }) }}
                        />
                    )}
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.listHeader}>{restaurantsData.length} Result for {route.params.item}</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default SearchResultScreen

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
        marginTop: 15
      },
      headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
      },
    container: {
        flex: 1,
        
    },

    listHeader: {
        color: '#43484d',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: "bold",
        // grey1: '#43484d',
        // grey2: '#5e6977',
        //  grey3: '#86939e',
        // grey4: '#bdc6cf',
        // grey5: '#e1e8ee'
    }
})