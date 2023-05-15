import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { restaurantsData, menu } from './Data'
import { Route1, Route2, Route3, Route4, Route5, Route6, Route7, Route8 } from './MenuTab'
import { TabView, TabBar } from 'react-native-tab-view'
const initialLayout = SCREEN_WIDTH;
const SCREEN_WIDTH = Dimensions.get('window').width

const MenuProducts = ({ navigation, route }) => {
    const [routes2] = useState(menu)
    const [index, setIndex] = useState(0)
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            tabStyle={styles.tabStyle}
            scrollEnabled={true}
            style={styles.tab}
            labelStyle={styles.tabLabel}
            contentContainerStyle={styles.tabContainer}
        />
    )
    const renderScene = ({ route }) => {
        switch (route.key) {
            case 1:
                return <Route1 name={navigation} />
            case 2:
                return <Route2 name={navigation} />
            case 3:
                return <Route3 name={navigation} />
            case 4:
                return <Route4 name={navigation} />
            case 5:
                return <Route5 name={navigation} />
            case 6:
                return <Route6 name={navigation} />
            case 7:
                return <Route7 name={navigation} />
            case 8:
                return <Route8 name={navigation} />
            default:
                return null
        }
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.header1} onPress={() => navigation.goBack()}>
                <Image source={require('../Assests/Images/back.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>
                Menu
            </Text>
            
        </View>
    )
}

export default MenuProducts

const styles = StyleSheet.create({
    tab: {
        paddingTop: 0,
        backgroundColor: 'lightgreen',
        justifyContent: "space-between",
        alignItems: "center"
    },

    tabContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    tabLabel: {
        fontWeight: 'bold',
        color: 'black'
    },

    tabStyle: {
        width: SCREEN_WIDTH / 4,
        maxHeight: 45,
    },
    header: {
        flexDirection: "row",
        alignItems: 'center',
    },
    header1: {
        margin: 10,
        width: 40,
        height: 40,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    back: {
        height: 30,
        width: 30,
    }
})