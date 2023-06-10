import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

            const documentSnapshot = await documentRef.get();
            if (documentSnapshot.exists) {
                await documentRef.update({ isMember: true, membershipType: 'premium' });
            } else {
                await documentRef.set({ isMember: true, membershipType: 'premium' });
            }

            setIsMember(true);

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
            {isMember ? (
                <View style={styles.container}>
                    <Text style={styles.header}>Account Details</Text>
                    <Text style={styles.accountInfo}>Subscription Status: Active</Text>
                    <Text style={styles.accountInfo}>Renewal Date: [Formatted Date]</Text>
                    <TouchableOpacity style={styles.cancelButton} onPress={()=>{handleCancelMembership()}}>
                        <Text style={styles.cancelButtonText}>Cancel Membership</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.container}>
                    <Text style={styles.header}>You are not a member.</Text>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => { handleUpgradeMembership() }}>
                        <Text style={styles.cancelButtonText}>
                            Upgrade MemberShip
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
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
