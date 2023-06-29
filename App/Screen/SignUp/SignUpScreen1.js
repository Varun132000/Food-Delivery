/*import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const SignUpScreen1 = ({navigation}) => {
    const [isSelected, setIsSelected] = useState(false)
    const renderCheckboxRow = () => {
        return (
            <TouchableOpacity style={styles.checkboxView}
                onPress={() => {
                    setIsSelected(!isSelected);
                }}>
                <Image
                    style={styles.checkBox}
                    source={
                        isSelected
                            ? require('../../Assests/Images/CheckboxTrue.png')
                            : require('../../Assests/Images/CheckboxFalse.png')
                    }
                />
                <Text style={styles.checkboxText}>
                    By initializing below, you agree to LAWCLERK's{"\n"}
                    <Text style={styles.boldText}>Terms of Service</Text>.
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={{ backgroundColor: '#9fbcd1' }}>
            <SafeAreaView style={{paddingBottom:100}}>
                <View style={styles.card}>
                    <View style={styles.box}>
                        <Image source={require('../../Assests/Images/lawclerk_logo.png')}
                            style={styles.logo} />
                        <Text style={styles.AccountText}>
                            Create your Hiring Account
                        </Text>
                        <Text style={styles.labelText}>
                            First Name
                        </Text>
                        <TextInput
                            style={styles.labelTextView}
                            placeholder="First Name"
                        />
                        <Text style={styles.labelText}>
                            Last Name
                        </Text>
                        <TextInput
                            style={styles.labelTextView}
                            placeholder="Last Name"
                        />
                        <Text style={styles.labelText}>
                            Phone Number
                        </Text>
                        <TextInput
                            style={styles.labelTextView}
                            placeholder="Enter your Phone Number"
                        />
                        <Text style={styles.labelText}>
                            Email
                        </Text>
                        <TextInput
                            style={styles.labelTextView}
                            placeholder="Enter your Email Address"
                        />
                        <Text style={styles.labelText}>
                            Password
                        </Text>
                        <TextInput
                            style={styles.labelTextView}
                            placeholder="Enter your Password"
                        />
                        <Text style={styles.labelText}>
                            Initials Here :
                        </Text>
                        <TextInput
                            style={styles.initalTextView}
                        />
                        {renderCheckboxRow()}
                        <Text style={styles.alreadyText}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity>
                        <Text style={styles.login}>
                            Login Here
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.nextButton} onPress={() =>{navigation.navigate('SignUpScreen2')}}>
                            <Text style={styles.loginText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUpScreen1

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, box: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 40,
        marginTop: 110,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 16,
        minHeight: 101
    },
    logo: {
        height: 90,
        width: Dimensions.get('screen').width - 40,
        borderTopLeftRadius:16,
        borderTopRightRadius:16
    },
    AccountText: {
        fontSize: 20,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: '700',
        
    },
    labelText: {
        fontSize: 12,
        width: 80,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: 'bold'
    },
    labelTextView: {
        height: 38,
        borderWidth: 1,
        padding: 10,
        borderColor: '#e6e6e6',
        backgroundColor: '#f7f7f7',
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        color: '#5e5e5e'
    },
    initalTextView: {
        height: 38,
        borderWidth: 1,
        padding: 10,
        borderColor: '#e6e6e6',
        backgroundColor: '#f7f7f7',
        marginTop: 10,
        color: '#5e5e5e',
        marginLeft: 30,
        marginRight: 300,
    },
    checkboxView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        paddingBottom: 5,
        marginLeft: 30
    },
    checkBox: {
        height: 15,
        width: 15,
        alignSelf:'center'
    },
    checkboxText: {
        marginLeft: 8,
        fontSize: 12,
        fontWeight: "400",
        color: '#5E5E5E'
    },
    boldText: {
        marginLeft: 8,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#5E5E5E'
    },
    alreadyText: {
        fontSize: 15,
        color: '#5e5e5e',
        marginTop: 20,
        alignSelf: 'center',
        fontWeight:'400'
    },
    login: {
        fontSize: 18,
        color: '#c5b15d',
        alignSelf: 'center',
        fontWeight: '700',
        textDecorationLine: 'underline'
    },
    nextButton: {
        backgroundColor : '#c5b15d',
        width : Dimensions.get('screen').width-40,
        height : 60,
        marginTop : 30,
        borderBottomLeftRadius : 16,
        borderBottomRightRadius : 16,
        alignItems : 'center',
        justifyContent : 'center'
      },
      loginText: {
        color : '#ffffff',
        fontSize : 20,
        fontWeight:'700'
      }
})*/
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import { Image } from 'react-native';

const SignUpScreen1 = ({navigation}) => {
    const [isSelected, setIsSelected] = useState(false)
    const [arrayRows, setArrayRows] = useState([
        {
            title: 'First Name',
            index: 0,
            placeholder: 'First Name',
            inputType: 'keyboard',
            keyboardType: null,

        },
        {
            title: 'Last Name',
            index: 1,
            placeholder: 'Last Name',
            inputType: 'keyboard',
            keyboardType: null,
        },
        {
            title: 'Phone Number',
            index: 2,
            placeholder: 'Enter your Phone Number',
            inputType: 'keyboard',
            selected: null,
            keyboardType: 'numeric',

        },
        {
            title: 'Email',
            index: 3,
            placeholder: 'Enter your Email Address',
            inputType: 'keyboard',
            keyboardType: null,
        },
        {
            title: 'Password',
            index: 4,
            placeholder: 'Enter your Password',
            keyboardType: null,
            inputType: 'keyboard',
        },
        {
            title: 'Initials Here :',
            index: 5,
            placeholder: '',
            isRequired: true,
            inputType: 'keyboard'
        },
    ])
    const renderCheckboxRow = () => {
        return (
            <View>
                <TouchableOpacity style={styles.checkboxView}
                    onPress={() => {
                        setIsSelected(!isSelected);
                    }}>
                    <Image
                        style={styles.checkBox}
                        source={
                            isSelected
                                ? require('../../Assests/Images/CheckboxTrue.png')
                                : require('../../Assests/Images/CheckboxFalse.png')
                        }
                    />
                    <Text style={styles.checkboxText}>
                        By initializing below, you agree to LAWCLERK's{"\n"}
                        <Text style={styles.boldText}>Terms of Service</Text>.
                    </Text>
                </TouchableOpacity>
                <Text style={styles.alreadyText}>
                    Already have an account?
                </Text>
                <TouchableOpacity>
                    <Text style={styles.login}>
                        Login Here
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderTextfieldRow = (item, index) => {
        const isInitialsHereField = item.title === 'Initials Here :';
        return (
            <View key={index}>
                <Text style={styles.labelText}>{item.title}</Text>
                <TouchableOpacity>
                    <View >
                        <TextInput
                            style={[
                                styles.labelTextView,
                                isInitialsHereField && styles.smallTextInput,
                            ]}
                            placeholder={item.placeholder}
                            keyboardType={item.keyboardType ?? 'default'}
                        />
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
                {renderCheckboxRow()}
            </View>
        );
    };
    const renderNextButton = () => {
        return (
            <TouchableOpacity style={styles.nextButton} onPress={() => { navigation.navigate('SignUpScreen2') }}>
                <Text style={styles.loginText}>NEXT</Text>
            </TouchableOpacity>
        )
    }
    return (
        <ScrollView style={{ backgroundColor: '#9fbcd1' }}>
            <SafeAreaView style={{ paddingBottom: 110 }}>
                <View style={styles.box}>
                    <Image source={require('../../Assests/Images/lawclerk_logo.png')}
                        style={styles.logo} />
                    <Text style={styles.AccountText}>
                        Create your Hiring Account
                    </Text>
                    {renderRowList()}
                    {renderNextButton()}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUpScreen1

const styles = StyleSheet.create({
    
    box: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 40,
        marginTop: 110,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 16,
        minHeight: 101
    },
    logo: {
        height: 90,
        width: Dimensions.get('screen').width - 40,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    AccountText: {
        fontSize: 20,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: '700',

    },
    labelText: {
        fontSize: 12,
        width: 80,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: 'bold'
    },
    rowInputContainer: {
        marginTop: 5,
        height: 38,
        borderRadius: 4,
        flex: 1,
        borderColor: '#E6E6E6',
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelTextView: {
        height: 38,
        borderWidth: 1,
        padding: 10,
        borderColor: '#e6e6e6',
        backgroundColor: '#f7f7f7',
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        color: '#5e5e5e'
    },
    checkboxView: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        paddingBottom: 5,
        marginLeft: 30
    },
    checkBox: {
        height: 15,
        width: 15,
        alignSelf: 'center'
    },
    checkboxText: {
        marginLeft: 8,
        fontSize: 12,
        fontWeight: "400",
        color: '#5E5E5E'
    },
    boldText: {
        marginLeft: 8,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#5E5E5E'
    },
    alreadyText: {
        fontSize: 15,
        color: '#5e5e5e',
        marginTop: 20,
        alignSelf: 'center',
        fontWeight: '400'
    },
    login: {
        fontSize: 18,
        color: '#c5b15d',
        alignSelf: 'center',
        fontWeight: '700',
        textDecorationLine: 'underline'
    },
    nextButton: {
        backgroundColor: '#c5b15d',
        width: Dimensions.get('screen').width - 40,
        height: 60,
        marginTop: 30,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '700'
    },
    smallTextInput: {
        width: 150, 
      },
})