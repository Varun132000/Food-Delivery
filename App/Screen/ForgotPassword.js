import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log('Password reset email sent');
      Alert.alert('Password reset email sent')
    })
    .catch((error) => {
      console.log('Error sending password reset email:', error);
    Alert.alert('Error sending password reset email')
    });
  };

  return (
    <ImageBackground source={require('../Assests/Images/forgotback.png')} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>Enter your email to reset your password</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor='white'
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={()=>handleResetPassword()}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    color: 'white',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: 'white',
    borderRadius:12
  },
  button: {
    backgroundColor: '#FFC107',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
