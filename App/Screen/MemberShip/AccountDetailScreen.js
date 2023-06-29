import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import firestore from '@react-native-firebase/firestore';

const AccountDetailsScreen = () => {
    const [isMember, setIsMember] = useState(false);
    const [membershipData, setMembershipData] = useState({});
    useEffect(() => {
        fetchMembershipData();
    }, []);


    const fetchMembershipData = async () => {
        try {
            const userId = 'users';
            const documentRef = firestore().collection('memberships').doc(userId);
            const documentSnapshot = await documentRef.get();

            if (documentSnapshot.exists) {
                const data = documentSnapshot.data();
                setMembershipData(data);
                setIsMember(data.isMember);
            }
        } catch (error) {
            console.error('Error fetching membership data:', error);
        }
    };

    const handleUpgradeMembership = async () => {
        try {
            const userId = 'users';
            const documentRef = firestore().collection('memberships').doc(userId);

            // Initialize Razorpay
            const options = {
                key: 'rzp_test_hZgtieTZpQviPy',
                amount: 29900, // Amount in paise (example: 50000 paise = ₹500)
                name: 'Upgrade Membership',
                description: 'Upgrade to premium membership',
                name: 'food app',
                prefill: {
                    email: 'void@razorpay.com',
                    contact: '9191919191',
                    name: 'Razorpay Software'
                },
                theme: { color: '#F37254' },
            };

            RazorpayCheckout.open(options).then(async (data) => {
                console.log('Razorpay success data:', data);
                const { razorpay_payment_id } = data;
                const documentSnapshot = await documentRef.get();
                if (documentSnapshot.exists) {
                    await documentRef.update({
                        isMember: true,
                        membershipType: 'premium',
                        paymentId: razorpay_payment_id,
                    });
                } else {
                    await documentRef.set({
                        isMember: true,
                        membershipType: 'premium',
                        paymentId: razorpay_payment_id,
                    });
                }

                setIsMember(true);
            }).catch((error) => {
                
                console.log('Payment error:', error);
            });

        } catch (error) {
            console.error('Error upgrading membership:', error);
        }
    };

    const handleCancelMembership = async () => {
        try {
            const userId = 'users';
            const documentRef = firestore().collection('memberships').doc(userId);

            await documentRef.update({ isMember: false, membershipType: '' });

            setIsMember(false);
        } catch (error) {
            console.error('Error canceling membership:', error);
        }
    };

    return (
        <>
            <View style={styles.container}>
                {isMember && (
                    <View style={styles.profileContainer}>
                        <Image
                            source={require('../../Assests/Images/star.png')} // Assuming you have the star icon image in the same directory
                            style={styles.starIcon}
                        />
                        <Text style={styles.header}>Account Details</Text>
                    </View>
                )}
                <Text style={styles.accountInfo}>
                    Subscription Status: {isMember ? 'Active' : 'Inactive'}
                </Text>
                {isMember && (
                    <Text style={styles.accountInfo}>Renewal Date: [Formatted Date]</Text>
                )}
                {isMember ? (
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={handleCancelMembership}
                    >
                        <Text style={styles.cancelButtonText}>Cancel Membership</Text>
                    </TouchableOpacity>

                ) : (
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={handleUpgradeMembership}
                    >
                        <Text style={styles.cancelButtonText}>Upgrade Membership</Text>
                    </TouchableOpacity>
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    accountInfo: {
        fontSize: 16,
        marginBottom: 8,
    },
    cancelButton: {
        backgroundColor: '#f44336',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignSelf: 'flex-start',
    },
    cancelButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default AccountDetailsScreen;
