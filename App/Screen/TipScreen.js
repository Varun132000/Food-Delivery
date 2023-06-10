import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TipScreen = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const billAmount = 20; // Example bill amount

  const handleTipSelection = (percentage) => {
    const tip = (billAmount * percentage) / 100;
    setTipAmount(tip);
  };

  const handleConfirmTip = () => {
    const totalAmount = billAmount + tipAmount;
    // Add logic to update the total amount payable or proceed with the payment
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Tip Amount:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="10%"
          onPress={() => handleTipSelection(10)}
        />
        <Button
          title="15%"
          onPress={() => handleTipSelection(15)}
        />
        <Button
          title="20%"
          onPress={() => handleTipSelection(20)}
        />
      </View>
      <Text style={styles.tipAmount}>Tip: ${tipAmount.toFixed(2)}</Text>
      <Button
        title="Confirm Tip"
        onPress={handleConfirmTip}
        disabled={tipAmount === 0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tipAmount: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TipScreen;
