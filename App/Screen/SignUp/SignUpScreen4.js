import { ImageBackground, SafeAreaView, TextInput, Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'



const SignUpScreen4 = ({ navigation }) => {
    const [arrayRows, setArrayRows] = useState([
        {
            title: 'State(s) where you are admitted',
            index: 0,
            placeholder: 'Select State',
            keyboardType: null,
            inputType: 'picker',
            isRequired: false
        },
        {
            title: 'State bar bumber(s)',
            index: 1,
            placeholder: 'Bar Number',
            inputType: 'keyboard',
            keyboardType: null,
            isRequired: false
        },
    ])
    const [defaultRow, setDefaultRow] = useState([
        {
            title: 'Primary practice area',
            index: 0,
            placeholder: 'Select',
            keyboardType: null,
            inputType: 'picker',
            isRequired: false
        },
        {
            title: 'Referral code',
            index: 1,
            placeholder: 'Enter your Law Firm Website',
            inputType: 'keyboard',
            keyboardType: null,
            isRequired: true
        },
        {
            title: 'How did you hear about LAWCLERK?',
            index: 1,
            placeholder: 'Other',
            keyboardType: null,
            inputType: 'picker',
            isRequired: false
        },
    ])
    const renderTextfieldRow = (item, index) => {
        return (
            <View >
                <Text style={styles.labelText}>
                    {item.title}
                    {item.isRequired ? (
                        <Text style={{ fontStyle: 'italic' }}>(Optional)</Text>
                    ) : null}
                </Text>
                <TouchableOpacity>
                    <View style={styles.rowInputContainer} >
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
    const renderRowList = () => {
        return (
            <View >
                {arrayRows.map((item, index) => {
                    return renderTextfieldRow(item, index);
                })}
                <TouchableOpacity style={styles.borderstate}>
                    <Image source={require('../../Assests/Images/add_circle_outline.png')}
                        style={{ height: 20, width: 20 }} />
                    <Text style={styles.stateText}>
                        Add another state
                    </Text>
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
    const renderTextfieldData = (item, index) => {
        return (
            <View >
                <Text style={styles.labelText}>
                    {item.title}
                    {item.isRequired ? (
                        <Text style={{ fontStyle: 'italic' }}> (Optional)</Text>
                    ) : null}
                </Text>
                <TouchableOpacity>
                    <View style={styles.rowInputContainer} >
                        <TextInput
                            style={styles.rowInputView}
                            placeholder={item.placeholder}
                            keyboardType={item.keyboardType ?? 'default'}
                        />
                        {renderRowIcon(item)}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const renderListData = () => {
        return (
            <View>
                {defaultRow.map((item, index) => {
                    return renderTextfieldData(item, index);
                })}
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
    const rendernumberTab = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.firstScreen}>
                    <Text style={styles.loginText}>1.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondScreen}>
                    <Text style={styles.loginText1}>
                        2. Your Practice
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.firstScreen}>
                    <Text style={styles.loginText}>
                        3.
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderNextButton = () => {
        return (
            <View>
                <TouchableOpacity style={styles.nextButton} onPress={() => { navigation.navigate('SignUpScreen5') }}>
                    <Text style={styles.loginText1}>NEXT</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <ScrollView>
                <View style={styles.box}>
                    {rendernumberTab()}
                    <Text style={styles.infoText}>
                        Tell us more about your practice
                    </Text>
                    {renderRowList()}
                    {renderListData()}
                    {renderNextButton()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpScreen4

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
    secondScreen: {
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
    firstScreen: {
        backgroundColor: '#cccccc',
        width: 51,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth:1
    },
    loginText1: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700'
    },
    loginText: {
        fontSize: 20,
        fontWeight: '700'
    },
    infoText: {
        fontSize: 20,
        color: '#3A4B56',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: '600',

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
    borderstate: {
        flexDirection: 'row',
        marginTop: 20,
        borderWidth: 1,
        marginLeft: 30,
        marginRight: 30,
        height: 36,
        borderColor: '#c5b15d',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stateText: {
        color: '#c5b15d',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10
    },
    nextButton: {
        backgroundColor: '#c5b15d',
        width: Dimensions.get('screen').width,
        height: 60,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelText: {
        fontSize: 12,
        width: 180,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: 'bold'
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
    }
})