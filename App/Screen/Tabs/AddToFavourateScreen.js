import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthContext } from '../../Navigation/Context';

const AddToFavouriteScreen = () => {
  const { favorites } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.length > 0 ? (
        favorites.map((item) => (
          <Text key={item.id} style={styles.favoriteItem}>
            Restaurant Name: {item.restaurantName}
          </Text>
        ))
      ) : (
        <Text>No favorites yet</Text>
      )}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  favoriteItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default AddToFavouriteScreen;
