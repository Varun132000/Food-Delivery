import React from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
    const restaurantLocations = [
        {
            latitude: 37.78825,
            longitude: -122.4324,
            title: 'Mc Donalds',
            image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/48/9b/bd/zaida.jpg",
        },
        {
            latitude: 37.785834,
            longitude: -122.406417,
            title: 'KFC',
            image: 'https://media.istockphoto.com/id/1278823126/photo/street-advertising-at-a-kfc-store.jpg?s=612x612&w=0&k=20&c=D1ibFTTmBZIVnrbKBRB9xWtQQ3Y2K9Ah8wbOw6M17sw='
        },
        {
            latitude: 37.789789,
            longitude: -122.411111,
            title: '"Pizza Hut"',
            image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg'
        },
        {
            latitude: 37.792345,
            longitude: -122.423456,
            title: 'Hoshiyarpuri',
            image: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2019/05/A_Tipical_Veg_North_Indian_Thali.jpg',
        },
        {
            latitude: 37.797654,
            longitude: -122.415678,
            title: 'Domino s',
            image: 'https://www.shutterstock.com/image-photo/brighton-hove-east-sussex-england-260nw-1038060868.jpg',
        },
        /* {
             lat: -26.1845336,
             lng: 28.2481691,
             title: 'Dominos',
         },
         {
             lat: -26.1888612,
             lng: 28.246325,
             title: 'Hoshiyarpuri',
         },*/
    ];

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: restaurantLocations[0].latitude,
                    longitude: restaurantLocations[0].longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {restaurantLocations.map((location, index) => (
                    <Marker
                        key={index}
                        coordinate={location}
                        title={location.title}
                    >
                        <Image source={{ uri: location.image }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};

export default MapScreen;



/*import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, PermissionsAndroid, TextInput, TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import MapView, { Marker } from 'react-native-maps';
Geocoder.init("AIzaSyAJ4uWkl7ju3NpUdaxS4HFwMqqaeHkS5YU", { language: "en" });
const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState('');

    useEffect(() => {
        const checkPermission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    getCurrentLocation();
                } else {
                    console.log('Location permission denied');
                }
            } catch (error) {
                console.error(error);
            }
        };
        checkPermission();
    }, []);

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
                getAddressFromCoordinates(latitude, longitude);
            },
            (error) => {
                console.error(error);
            },
        );
    };

    const getAddressFromCoordinates = async (latitude, longitude) => {
        try {
          const response = await Geocoder.from({ lat: latitude, lng: longitude });
          if (response.results.length > 0) {
            setAddress(response.results[0].formatted_address);
          }
        } catch (error) {
          console.error(error);
        }
      };
      
    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={location}
                        title="Your Location"
                        description={address}
                    />
                </MapView>
            )}
            <Text>{address}</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
            />
            <TouchableOpacity onPress={() => {
                setAddress('')
            }}>
                <Text>
                    Clear
                </Text>
            </TouchableOpacity>
        </View>
    );
};
export default MapScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '50%',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
    },
});*/


