/* eslint-disable no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  View,
  Text,
  Picker,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import {getVersion} from 'react-native-device-info';

import {connect} from 'react-redux';
import { Animated } from 'react-native';
;
import { toggleHomeAddSheet,toggleSideMenu } from '../Redux/Controls/ConrtolsAction';

const {width, height} = Dimensions.get('window');
/*import { toggleSideMenu } from '../Redux2/Controls/ConrtolsAction';*/
function DrawerView({

  toggleHomeAddSheet,
  showSideMenu,
  toggleSideMenu,

}) {
  const nav = useNavigation();

  const profileClicked = () => {
    /*navigation.navigate('Profileuser');*/
    nav.navigate('Profileuser')
    toggleSideMenu(false);
  };

  const logoutView = () => {
    return (
      <View
        style={{
          height: 100,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={{}}
          style={styles.logoutButton}>
         {/* <Image
            source={require('../../assets/Logout.jpg')}
            style={styles.rowIcon}
            resizeMode="contain"
          />*/}
          <Text
            style={{
              marginLeft: 10,
              fontSize: 20,
              textAlign: 'left',
              fontWeight: '500',
              color: '#000000',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
        <View
          style={{height: 13, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 11, color: '#9b9b9b'}}>
           {/* Version : {getVersion()}*/}
          </Text>
        </View>
      </View>
    );
  };

   const gotoScene = (scene) => {
    nav.navigate(scene);
    toggleSideMenu(!toggleSideMenu);
  }
  const HomeClicked = () => {
    gotoScene('Food');
  };
  const ProfileClicked = () => {
    gotoScene('Account');
    toggleHomeAddSheet(true, true);
  };
  const BackClicked=()=>
  {
    gotoScene('Food');
  }
  const AboutClicked = () => {
    gotoScene('Order');
  };

  const getRowsContainer = () => {
    return (
      <View style={{marginTop: 40, marginHorizontal: 20}}>
        {getRow(
          'Food',
          require('../Assests/Images/foodicon.png'),
          HomeClicked,
        )}
        {getRow('Order',
         require('../Assests/Images/Vector.png'),
          ProfileClicked
          )}
        {getRow(
          'Account',
          require('../Assests/Images/Account.png'),
          AboutClicked,
        )}
      </View>
    );
  };

  const getRow = (title, icon, action) => {
    return (
      <TouchableOpacity style={styles.rowContainer} onPress={() => action()}>
        <View style={styles.rowContainer}>
          <View style={styles.rowSubContainer}>
            <Image source={icon} style={styles.rowIcon} resizeMode='contain'></Image>
            <Text style={styles.rowText}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{translateX: showSideMenu ? 0 : -width}],
      }}>
      <View style={{width:392.5, /*backgroundColor:'pink',*/}}>
{/*<BackgroundBlur
          onTapOutside={() => {
            isHomeAddSheetShown && toggleHomeAddSheet(!isHomeAddSheetShown, true);
          }}
        />*/}
      <View style={styles.subContainer}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.profileContainer}>
             <TouchableOpacity
              onPress={() =>
               profileClicked()}
              style={styles.profileTapContainer}>
               <Image source={require('../Assests/Images/arrowIcon.png')} style={styles.charView}/>
              <View>
                <Text style={styles.profileName}>Abhishek</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>BackClicked()  }>
              <Image
                source={require('../Assests/Images/arrowIcon.png')}
                style={styles.arrowIcon}></Image>
            </TouchableOpacity>
          </View>
          {getRowsContainer()}
        </ScrollView>
        {logoutView()}
      </View>
      </View>
    </Animated.View>
  );
}


const styles = StyleSheet.create({
  profileTapContainer: {
    marginLeft: 5,
    flex: 1,
    height: 42,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle:
  {
    fontSize:20,
    marginLeft:20,
    fontWeight:'bold',
    color:'black',
  },
  scrollView: {
    marginBottom: 120,
  },
  profileName: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'left',
    fontWeight: 'bold',
    marginRight:40,
  },
  initials: {fontSize: 22, color: '#ffffff', fontWeight: 'bold'},
  profileContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 0,
    marginRight: 0,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  subContainer: {
  
    height: 800,
     width: width * 0.60,
  backgroundColor: '#ffffff',
  },
  container: {
    position: 'absolute',
    flexGrow: 1,
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',

  },
  backIcon: {
    height: 24,
    width: 24,
    marginTop: 10,
    marginRight: 9,
    marginBottom: 13,
  },
  arrowIcon: {
    height: 19,
    width: 19,
    marginRight: 20,
  },
  rowIcon: {
    height: 30,
    width: 30,
  },
   charView: {
    width: 70,
    height: 70,
    borderRadius: 42,
    backgroundColor: '#c2b269',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
  logoutButton: {
    height: 40,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 26,
    flexDirection: 'row',
  },
  rowContainer: {
    height: 54,
    flexGrow: 1,
    backgroundColor: 'rgba(244, 244, 244, 1)',
    marginVertical: 12,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  rowSubContainer: {
    height: 52,
    borderBottomColor: '#f1eff1',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowText: {
    fontSize: 13,
    textAlign: 'left',
    marginLeft: 13,
    color: '#000000',
    fontWeight: '600',
  },
});
/*export default DrawerView;*/
const mapStateToProps = state => {
  return {
    showSideMenu: state.controlsReducer.showSideMenu,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggleSideMenu: (show, needBlur) =>
      dispatch(toggleSideMenu(show, needBlur)),
    toggleHomeAddSheet: (show, needBlur) =>
      dispatch(toggleHomeAddSheet(show, needBlur)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);
