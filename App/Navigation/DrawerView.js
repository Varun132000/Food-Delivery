import { Dimensions, StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { toggleSideMenu } from '../Redux/Controls/ControlsAction';
import Animated from 'react-native-reanimated'
const { width, height } = Dimensions.get('window');
import { connect } from 'react-redux';
const DrawerView = ({ showSideMenu, navigation ,toggleSideMenu}) => {
    const nav = useNavigation();
    const [key, setKey] = React.useState(1);
    useEffect(() => {
        setKey(key + 1);
    }, [showSideMenu]);
    const OnProfileClick = () => {
        nav.navigate('Home');
        toggleSideMenu(false);
    }
    return (
        <Animated.View style={{
            ...styles.container,
            transform: [{ translateX: showSideMenu ? 0 : -width }],
        }}>
            <View style={styles.subContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.border}>
                        <View style={styles.drawer}>
                            <TouchableOpacity onPress={() => { OnProfileClick() }}>
                                <Image source={require('../Assests/Images/bitmoji.png')} style={styles.logoImage} />
                            </TouchableOpacity>
                            <Text style={styles.logoText}>
                                Varun
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Animated.View>
    )
}



const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexGrow: 1,
        flex: 1,
        height: height,
        width: width,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    subContainer: {
        height: '100%',
        width: width * 0.80,
        backgroundColor: '#ffffff',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    drawer: {
        marginTop: 25,
        flexDirection: 'row',
        marginLeft: 15,
    },
    logoImage: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    logoText: {
        fontSize: 20,
        marginLeft: 12,
        color: 'black',
        alignSelf: 'center',
        fontWeight: '700'
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
export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);