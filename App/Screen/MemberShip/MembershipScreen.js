import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const MembershipScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>Subscription Plans</Text>
        <TouchableOpacity style={styles.planContainer}>
          <Text style={styles.planTitle}>Basic Plan</Text>
          <Text style={styles.planPrice}>$9.99/month</Text>
          <Text style={styles.planDescription}>- Feature 1</Text>
          <Text style={styles.planDescription}>- Feature 2</Text>
          <TouchableOpacity style={styles.perks} onPress={()=>navigation.navigate('MembershipBenefitScreen')}>
            <Text style={styles.perkText}>
              Perks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton} onPress={() => navigation.navigate('AccountDetailsScreen')}>
            <Text style={styles.selectButtonText}>Select Plan</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.planContainer}>
          <Text style={styles.planTitle}>Premium Plan</Text>
          <Text style={styles.planPrice}>$19.99/month</Text>
          <Text style={styles.planDescription}>- Feature 1</Text>
          <Text style={styles.planDescription}>- Feature 2</Text>
          <Text style={styles.planDescription}>- Feature 3</Text>
          <TouchableOpacity style={styles.perks}onPress={()=>navigation.navigate('MembershipBenefitScreen')}>
            <Text style={styles.perkText}>
              Perks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.selectButton}  onPress={() => navigation.navigate('AccountDetailsScreen')}>
            <Text style={styles.selectButtonText}>Select Plan</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default MembershipScreen

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
  planContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  planDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  selectButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  selectButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  perks: {
    borderWidth: 0.5,
    width: '10%',
    borderRadius: 12,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: 'red'
  },
  perkText: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'white'
  }
});
