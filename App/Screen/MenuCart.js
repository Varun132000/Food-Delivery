import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
export default function MenuCart ({ name, description, price, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
},
image: {
    width: 100,
    height: 100,
    marginRight: 10,
},
detailsContainer: {
    flex: 1,
    justifyContent: 'center',
},
name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
},
description: {
    marginTop: 5,
    color: '#666',
},
price: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#888',
},
})