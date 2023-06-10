import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { coupons } from './Data';

const Coupons = () => {
    return (
        <View style={styles.container}>
            {coupons.map((coupon) => (
                <View key={coupon.code} style={styles.couponContainer}>
                    <TouchableOpacity>
                        <Text style={styles.couponCode}>{coupon.code}</Text>
                        <Text style={styles.couponDetails}>
                            Discount: {coupon.discount}%
                        </Text>
                        <Text style={styles.couponDetails}>
                            Expiration: {coupon.expiration}
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
        alignItems: 'center',
    },
    couponContainer: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 40,
        margin: 12,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 16,
        minHeight: 80
    },
    couponCode: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 8
    },
    couponDetails: {
        fontSize: 14,
        marginTop: 4,
        alignSelf: 'center'
    },
});

export default Coupons;
