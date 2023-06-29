import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';

const SignUpScreen3 = ({ navigation }) => {
    const [arrayRows, setArrayRows] = useState([
        {
            title: 'Law Firm Name',
            index: 0,
            placeholder: 'Enter your Law Firm Name',
            inputType: 'keyboard',
            keyboardType: null,
            isRequired: false,
        },
        {
            title: 'Law Firm Website ',
            index: 1,
            placeholder: 'Enter your Law Firm Website',
            inputType: 'keyboard',
            keyboardType: null,
            isRequired: true,
        },
        {
            title: 'Law Firm Address',
            index: 2,
            placeholder: 'Street and Number,P.O.box,c/o.',
            inputType: 'keyboard',
            keyboardType: null,
            isRequired: false
        },
        {
            title: 'City',
            index: 3,
            placeholder: 'Enter your city',
            inputType: 'keyboard',
            keyboardType: null,
            isRequired: false
        },
        {
            title: 'State',
            index: 4,
            placeholder: 'Select State',
            keyboardType: null,
            isRequired: false,
            inputType: 'picker',
        },
        {
            title: 'Zip Code :',
            index: 5,
            placeholder: 'Enter your Zip Code',
            isRequired: true,
            inputType: 'keyboard',
            isRequired: false
        },
        {
            title: 'Telephone Number :',
            index: 5,
            placeholder: '(999)999-9999',
            isRequired: true,
            inputType: 'keyboard',
            isRequired: false
        },
    ])
    const renderTextfieldRow = (item, index) => {
        let inputWidth = Dimensions.get('window').width - 290;
        return (
          <View>
            <Text style={styles.labelText}>
              {item.title}
              {item.isRequired ? <Text style={{ fontStyle: 'italic' }}>(Optional)</Text> : null}
            </Text>
            <TouchableOpacity>
              <View style={item.title === 'City' || item.title === 'State' ? [styles.rowInputContainer, { width: inputWidth }] : styles.rowInputContainer}>
                <TextInput
                  style={styles.rowInputView}
                  placeholder={item.placeholder}
                  keyboardType={item.keyboardType ?? 'default'}
                />
                {renderRowIcon(item)}
              </View>
            </TouchableOpacity>
          </View>
        );
      };
      
    const renderRowIcon = item => {
        if (!item || !item.inputType) {
            return null;
        }
        return (
            <>
                {needSeparator(item?.inputType) && <View style={styles.rowInputSeparator} />}
                {item?.inputType === 'picker' && (
                    <Image
                        source={require('../../Assests/Images/post_down_arrow.png')}
                        resizeMode="cover"
                        style={styles.inputRightIcon}
                    />
                )}
            </>
        );
    };

    const needSeparator = type => {
        if (type) {
            return type == 'picker'
        } else {
            return false;
        }
    };
    const renderRowList = () => {
        return (
            <View>
                {arrayRows.map((item, index) => {
                    if (index === 3) {
                        return (
                            <View style={styles.rowContainer} key={index}>
                                {renderTextfieldRow(arrayRows[index], index)}
                                {renderTextfieldRow(arrayRows[index + 1], index + 1)}
                            </View>
                        );
                    } else if (index !== 4) {
                        return renderTextfieldRow(item, index);
                    }
                    return null;
                })}
            </View>
        );
    };
    const rendernumberTab = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.firstScreen}>
                    <Text style={styles.loginText}>1. You</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondScreen}>
                    <Text style={styles.loginText1}>
                        2.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondScreen}>
                    <Text style={styles.loginText1}>
                        3.
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <ImageBackground
                source={require('../../Assests/Images/lawclerk_logo.png')}
                style={styles.headerBackground}
                resizeMode="cover"
            >
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image source={require('../../Assests/Images/back2.png')} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../Assests/Images/help.png')} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    };
    const renderNextButton = () => {
        return (
            <View>
                <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('SignUpScreen4')}>
                    <Text style={styles.loginText}>NEXT</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <ScrollView>
                <View style={styles.box} >
                    {rendernumberTab()}
                    <Text style={styles.infoText}>
                        Your Information
                    </Text>
                    {renderRowList()}
                    {renderNextButton()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUpScreen3;

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
    },
    headerBackground: {
        height: 66,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    firstScreen: {
        backgroundColor: '#c5b15d',
        width: 360,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth:1
    },
    box: {
        marginTop:5
    },
    secondScreen: {
        backgroundColor: '#cccccc',
        width: 50,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth:1
    },
    infoText: {
        fontSize: 20,
        color: '#3A4B56',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: '600',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    rowInputContainer: {
        marginTop: 5,
        height: 38,
        borderRadius: 4,
        flex: 1,
        borderColor: '#E6E6E6',
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
    },
    rowInputView: {
        fontSize: 12,
        color: '#989898',
        marginLeft: 16,
        height: '100%',
        flex: 1
    },

    nextButton: {
        backgroundColor: '#c5b15d',
        width: Dimensions.get('screen').width,
        height: 60,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700'
    },
    loginText1: {
        fontSize: 20,
        fontWeight: '700'
    },
    rowInputSeparator: {
        width: 1,
        height: 20,
        backgroundColor: '#DCD8D2',
        marginHorizontal: 10
    },
    rowInputView: {
        fontSize: 12,
        color: '#989898',
        marginLeft: 16,
        height: '100%',
        flex: 1
    },
    inputRightIcon: {
        height: 20,
        width: 20,
        marginRight: 10
    },
    labelText: {
        fontSize: 12,
        width: 180,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: 'bold'
    },
});
