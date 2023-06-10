import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MembershipBenefitScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Membership Benefits</Text>
            <View style={styles.benefitContainer}>
                <Text style={styles.benefitTitle}>Free Delivery</Text>
                <Text style={styles.benefitDescription}>Get free delivery on all orders with your membership.</Text>
            </View>
            <View style={styles.benefitContainer}>
                <Text style={styles.benefitTitle}>Exclusive Discounts</Text>
                <Text style={styles.benefitDescription}>Enjoy exclusive discounts on selected menu items.</Text>
            </View>
            <View style={styles.benefitContainer}>
                <Text style={styles.benefitTitle}>Early Access</Text>
                <Text style={styles.benefitDescription}>Be the first to access new menu items before anyone else.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    benefitContainer: {
        marginBottom: 16,
    },
    benefitTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    benefitDescription: {
        fontSize: 16,
    },
});

export default MembershipBenefitScreen;
