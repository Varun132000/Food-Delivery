import { Dimensions, SafeAreaView, ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'

const SignUpScreen2 = ({navigation}) => {
    const [code1, setCode1] = React.useState("");
    const [code2, setCode2] = React.useState("");
    const [code3, setCode3] = React.useState("");
    const [code4, setCode4] = React.useState("");
    const [code5, setCode5] = React.useState("");
    const [code6, setCode6] = React.useState("");
    const refs = useRef([]);

    const handleTextChange = (text, index) => {
        if (text.length === 1 && index < refs.current.length - 1) {
            refs.current[index + 1].focus();
        }

        switch (index) {
            case 0:
                setCode1(text);
                break;
            case 1:
                setCode2(text);
                break;
            case 2:
                setCode3(text);
                break;
            case 3:
                setCode4(text);
                break;
            case 4:
                setCode5(text);
                break;
            case 5:
                setCode6(text);
                break;
            default:
                break;
        }
    };

    return (
        <ScrollView style={{ backgroundColor: '#9fbcd1' }}>
            <SafeAreaView>
                <View style={styles.card}>
                    <View style={styles.box}>
                        <Image source={require('../../Assests/Images/lawclerk_logo.png')}
                            style={styles.logo} />
                        <Text style={styles.VerificationText}>
                            Mobile Verification
                        </Text>
                        <Text style={styles.digitText}>
                            6 Digit verification code has been sent to
                        </Text>
                        <Text style={styles.numberText}>
                            (999)999-9999
                            <Text style={styles.editText}> Edit</Text>
                        </Text>
                        <View style={styles.codeView}>
                            <TextInput
                                style={styles.codeTextBox}
                                placeholder=""
                                maxLength={1}
                                onChangeText={(text) => handleTextChange(text, 0)}
                                keyboardType='number-pad'
                                returnKeyType='done'
                                value={code1}
                                ref={(input) => (refs.current[0] = input)}
                            />
                            <TextInput
                                style={styles.codeTextBox}
                                placeholder=""
                                maxLength={1}
                                onChangeText={(text) => handleTextChange(text, 1)}
                                keyboardType='number-pad'
                                returnKeyType='done'
                                value={code2}
                                ref={(input) => (refs.current[1] = input)}
                            />
                            <TextInput
                                style={styles.codeTextBox}
                                placeholder=""
                                maxLength={1}
                                onChangeText={(text) => handleTextChange(text, 2)}
                                keyboardType='number-pad'
                                returnKeyType='done'
                                value={code3}
                                ref={(input) => (refs.current[2] = input)}
                            />
                            <TextInput
                                style={styles.codeTextBox}
                                placeholder=""
                                maxLength={1}
                                onChangeText={(text) => handleTextChange(text, 3)}
                                keyboardType='number-pad'
                                returnKeyType='done'
                                value={code4}
                                ref={(input) => (refs.current[3] = input)}
                            />
                            <TextInput
                                style={styles.codeTextBox}
                                placeholder=""
                                maxLength={1}
                                onChangeText={(text) => handleTextChange(text, 4)}
                                keyboardType='number-pad'
                                returnKeyType='done'
                                value={code5}
                                ref={(input) => (refs.current[4] = input)}
                            />
                            <TextInput
                                style={styles.codeTextBox}
                                placeholder=""
                                maxLength={1}
                                onChangeText={(text) => handleTextChange(text, 5)}
                                keyboardType='number-pad'
                                returnKeyType='done'
                                value={code6}
                                ref={(input) => (refs.current[5] = input)}
                            />
                        </View>
                        <Text style={styles.notrecievedText}>
                            Haven't recieved the verification code?
                        </Text>
                        <TouchableOpacity>
                            <Text style={styles.resendText}>
                                Resend
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.verifyButton}onPress={()=>navigation.navigate('SignUpScreen3')}>
                            <Text style={styles.verifyText}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUpScreen2

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, box: {
        backgroundColor: '#ffffff',
        width: Dimensions.get('screen').width - 40,
        marginTop: 130,
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
    VerificationText: {
        fontSize: 16,
        color: '#5e5e5e',
        marginTop: 40,
        marginLeft: 30,
        fontWeight: 'bold'
    },
    digitText: {
        fontSize: 16,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30
    },
    numberText: {
        fontSize: 16,
        color: '#5e5e5e',
        marginTop: 20,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    editText: {
        fontSize: 14,
        color: '#c5b15d',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    codeView: {
        marginTop: 14,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    codeTextBox: {
        height: 38,
        width: 51,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        backgroundColor: '#f7f7f7',
        color: '#5e5e5e',
        textAlign: 'center',
        fontSize: 16,
        padding: 2,
        color: '#3a4b5b'
    },
    notrecievedText: {
        fontSize: 16,
        color: '#5e5e5e',
        marginTop: 20,
        alignSelf: 'center'
    },
    resendText: {
        fontSize: 16,
        color: '#c5b15d',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    verifyButton: {
        backgroundColor: '#c5b15d',
        width: Dimensions.get('screen').width - 40,
        height: 60,
        marginTop: 30,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    verifyText: {
        color: '#ffffff',
        fontSize: 16,
    }
})