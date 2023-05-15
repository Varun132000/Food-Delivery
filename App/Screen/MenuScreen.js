import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { specialData, menuData } from './Data'

const MenuScreen = ({onPress}) => {
    return (
        <View style={styles.container}>
            {specialData.map((items) =>
                <View key={items.key} style={{ paddingHorizontal: 10, }}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.title}>
                            <Image source={require('../Assests/Images/star.png')}style={{height:25,width:25,marginRight:5}}/>
                            <Text style={styles.textTitle}>
                                {items.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
            {menuData.map((items) =>
                <View key={items.key} style={{ paddingHorizontal: 10, }}>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.title}>
                            <Text style={styles.textTitle}>
                                {items.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    textTitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold"
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        padding: 10,

    }
})