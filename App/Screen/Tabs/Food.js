import { StyleSheet, Text, View, FlatList, StatusBar, Pressable, ScrollView, Image, SafeAreaView, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { filterData, restaurantsData } from '../Data'
import { connect } from 'react-redux';
import FoodCart from '../../Components/FoodCart';
import SearchComponents from '../../Components/SearchComponents';
import { toggleSideMenu } from '../../Redux/Controls/ControlsAction'
import { useNavigation } from '@react-navigation/native';
import DrawerView from '../../Navigation/DrawerView';
import Modal from "react-native-modal";
import LanguageModal from '../../Components/LanguageModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { translation } from '../../Utils/util';
import MapView, { Marker } from 'react-native-maps';
import { AuthContext } from '../../Navigation/Context';

const SCREEN_WIDTH = Dimensions.get('window').width
const Food = ({ navigation, toggleSideMenu, showSideMenu, id, item }) => {
  const [indexCheck, setIndexCheck] = useState('0')
  const [langModalVisible, setLangModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);
  const nav = useNavigation();
  const { favorites, toggleFavorite } = useContext(AuthContext);

  const saveSelectedLang = async index => {
    await AsyncStorage.setItem('LANG', index + '');
  };
  const [address, setAddress] = useState('');
  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [visible, setVisible] = useState(false)
  const toggleModal = () => {
    setVisible(!visible)
  }
  const [filter, setFilter] = useState([
    {
      id: "0",
      name: "Revelance",
    },
    {
      id: "1",
      name: " Rating: High To Low",
    },
    {
      id: "2",
      name: "Delivery Time: Low To High",
    },
    {
      id: "3",
      name: 'Delivery Time & Revelance',
    },
    {
      id: "4",
      name: 'Cost: Low To High',
    },
    {
      id: "5",
      name: 'Cost: High To Low',
    },
  ]);

  const Item = ({ item, selected, onSelect }) => {
    return (
      <TouchableOpacity
        style={[
          styles.languageItem,
          selected ? styles.selectedItem : null
        ]}
        onPress={() => onSelect(item)}
      >
        <Image
          source={
            selected
              ? require('../../Assests/Images/radio_active.png')
              : require('../../Assests/Images/radio_inactive.png')
          }
          style={{height:25,width:25}}
        />
        <Text style={{ marginLeft: 20, fontSize: 18 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const onSelect = (item) => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem.name === item.name);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.name !== item.name));
    } else {
      setSelectedItems([...selectedItems, item]);
    }

    applyFilters();
  };
  const applyFilters = () => {
    let filteredData = [...restaurantsData]; 
    selectedItems.forEach((selectedItem) => {
      switch (selectedItem.id) {
        case "1":
          filteredData.sort((a, b) => b.rating - a.rating);
          break;
        case "2":
          filteredData.sort((a, b) => a.deliveryTime - b.deliveryTime);
          break;
        case "3":
          filteredData.sort((a, b) => {
            if (a.deliveryTime === b.deliveryTime) {
              return a.relevance - b.relevance;
            } else {
              return a.deliveryTime - b.deliveryTime;
            }
          });
          break;
        case "4":
          filteredData.sort((a, b) => a.cost - b.cost);
          break;
        case "5":
          filteredData.sort((a, b) => b.cost - a.cost);
          break;
        default:
          break;
      }
    });

    setFilteredItems(filteredData); 
  };

  const renderfilterData = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{
            borderRadius: 10,
            backgroundColor: "white",
            flexDirection: 'row',
            margin: 10,
            padding: 5,
          }} onPress={() => toggleModal()}>
            <Image source={require('../../Assests/Images/filtericon.png')} style={{ height: 25, width: 25 }} />
            <Text style={styles.itemName}>
              Filter
            </Text>
          </TouchableOpacity>
          <Modal
            onBackdropPress={() => setVisible(false)}
            onBackButtonPress={() => setVisible(false)}
            isVisible={visible}
            swipeDirection='down'
            onSwipeComplete={toggleModal}
            style={styles.modal}
          >
            <View style={styles.modalContent}>
              <View style={styles.barIcon} />
              <View>
                <Text style={styles.modalText}>
                  Sort
                </Text>
              </View>
              <FlatList
                data={filter}
                renderItem={({ item }) => {
                  const isSelected = selectedItems.some(
                    (selectedItem) => selectedItem.name === item.name
                  );

                  return (
                    <Item
                      item={item}
                      selected={isSelected}
                      onSelect={onSelect}
                    />
                  );
                }} />
              <View style={styles.btns}>
                <TouchableOpacity
                  style={styles.btn1}
                  onPress={() => {
                    toggleModal()
                  }}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn2}
                  onPress={() => {
                    applyFilters()
                    toggleModal()
                  }}>
                  <Text>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    )
  }
  const category = () => {
    return (
      <View style={{ marginTop: 6 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={filterData}
          keyExtractor={(item) => item.id}
          extractData={indexCheck}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => navigation.navigate('SearchResultScreen', { item: item.name })}>
              <View style={indexCheck === item.id ? { ...styles.smallCard } : { ...styles.card }}>
                <Image source={item.image} style={{ height: 60, width: 60, borderRadius: 30 }} />
              </View>
              <Text style={indexCheck === item.id ? { ...styles.smallCardText } : { ...styles.cardText }}>
                {item.name}
              </Text>
            </Pressable>
          )}
        />
        {renderfilterData()}
      </View>
    )
  }
  const renderHorizontalData = () => {
    return (
      <>
        <Text style={styles.headerCategory}>
          Restaurants to explore
        </Text>

        <FlatList
          style={{ marginTop: 10, marginBottom: 10 }}
          horizontal={true}
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isFavorite = favorites.includes(item);

            const handleToggleFavorite = () => {
              toggleFavorite(item);
            };

            return (
              <View style={{ marginRight: 5 }}>
                <FoodCart
                  screenWidth={SCREEN_WIDTH * 0.6}
                  images={item.images}
                  restaurantName={item.restaurantName}
                  farAway={item.farAway}
                  businessAddress={item.businessAddress}
                  averageReview={item.averageReview}
                  numberOfReview={item.numberOfReview}
                  OnPressRestaurantCard={() =>
                    navigation.navigate("RestaurantScreen", {
                      id: index,
                      restaurant: item.restaurantName,
                    })
                  }
                />
                <TouchableOpacity
                  onPress={handleToggleFavorite}
                >
                  <Image
                    source={
                      isFavorite
                        ? require('../../Assests/Images/likeheart.png')
                        : require('../../Assests/Images/unlikeheart1.png')
                    }
                    style={{ height: 30, width: 30, bottom: 90, alignSelf: 'flex-end', marginRight: 15}}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </>
    );
  };

  const renderRestaurantData = () => {
    return (
      <>
        <Text style={styles.headerCategory}>Restaurants in your Area</Text>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 20 }}>
          <FlatList
            style={{ marginTop: 10, marginBottom: 20 }}
            horizontal={false}
            data={restaurantsData}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              const isFavorite = favorites.includes(item);

              const handleToggleFavorite = () => {
                toggleFavorite(item);
              };

              return (
                <View style={{ marginRight: 5 }}>
                  <FoodCart
                    screenWidth={SCREEN_WIDTH * 0.95}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                    OnPressRestaurantCard={() => {
                      navigation.navigate("RestaurantScreen", {
                        id: index, restaurant: item.restaurantName
                      })
                    }}
                  />
                  <TouchableOpacity
                    onPress={handleToggleFavorite}
                  >
                    <Image
                      source={
                        isFavorite
                          ? require('../../Assests/Images/likeheart.png')
                          : require('../../Assests/Images/unlikeheart1.png')
                      }
                      style={{ height: 30, width: 30, bottom: 90, alignSelf: 'flex-end', marginRight: 15 }}
                    />
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
      </>
    )
  }
  const foodHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {
          navigation.toggleDrawer()
        }}>
          <Image source={require('../../Assests/Images/hamburger.png')} style={styles.hamburger} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.headerText}>
            Food
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('AddToCartScreen')}>
          <Image source={require('../../Assests/Images/carticon.png')}
            style={styles.cart} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView>
      {foodHeader()}
      {/*<TouchableOpacity onPress={() => {
        setLangModalVisible(!langModalVisible)
      }} style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 10, marginTop: 5 }}>
        <Image source={require('../../Assests/Images/language.png')} style={{ height: 25, width: 25, }} />
        <Text>
          {selectedLang == 0
            ? translation[0].English
            : selectedLang == 1
              ? translation[0].Tamil
              : selectedLang == 2
                ? translation[0].Hindi
                : selectedLang == 3
                  ? translation[0].Punjabi
                  : selectedLang == 4
                    ? translation[0].Urdu
                    : null}
        </Text>
      </TouchableOpacity>*/}
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('MapScreen')}>
          <Image source={require('../../Assests/Images/map.png')} style={{ height: 30, width: 25, marginRight: 15 }} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop:18 }} >
        <SearchComponents />
      </View>
      <ScrollView>
        <Text style={styles.headerCategory}>
          Hi, What's on Your Mind?
        </Text>
        <View style={{ marginBottom: 100 }}>
          {category()}
          {renderHorizontalData()}
          {renderRestaurantData()}
        </View>
      </ScrollView>
      <LanguageModal langModalVisible={langModalVisible}
        setLangModalVisible={setLangModalVisible}
        onSelectLang={x => {
          setSelectedLang(x);
          saveSelectedLang(x);
        }} />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  favoriteButton: {
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'flex-end'
  },
  map: {
    width: '100%',
    height: '50%',
  },
  input: {
    width: '90%',
    height: 40,
    marginTop: 20,
    borderBottomWidth: 1
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'tomato',
    height: 50,
    justifyContent: 'space-between',
  },
  hamburger: {
    height: 20,
    width: 25,
    marginLeft: 15,
    marginTop: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  cart: {
    height: 25,
    width: 25,
    marginRight: 15,
    marginTop: 12,
  },
  headerCategory: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    marginTop: 25,
    marginLeft: 5,
  },
  card: {
    borderRadius: 30,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  cardText: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  smallCardText: {
    fontWeight: 'bold',
    color: 'green',
    alignSelf: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  itemName: {
    width: 60,
    fontSize: 13,
    color: '#383838',
    alignSelf: 'center',
    marginLeft: 5,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 350,
    paddingBottom: 20,
  },

  barIcon: {
    width: 60,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#bbb',
    alignSelf: 'center',
  },
  modalText: {
    color: 'black',
    fontSize: 20,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#bbb',
    marginTop: 10,
  },
  modalText1: {
    color: 'black',
    fontSize: 16,
    marginVertical: 12,
  },
  filterText: {
    marginTop: 10,
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btn1: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    width: '40%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
const mapStateToProps = state => {
  return {
    showSideMenu: state.controlsReducer.showSideMenu,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    toggleSideMenu: (show, needBlur) =>
      dispatch(toggleSideMenu(show, needBlur)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Food);