import { Image, Modal, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Animated from 'react-native-reanimated'
import { filterData } from '../Screen/Data'
import filter from 'lodash/filter'
import { useNavigation } from '@react-navigation/native'
import Voice from '@react-native-community/voice';

const SearchComponents = () => {
    const nav = useNavigation()
    const [data, setData] = useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [result, setResult] = useState()
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;
        return () => {
            Voice.destroy().then(Voice.removeAllListeners)
        }
    })
    const onSpeechStartHandler = (e) => {
        console.log('start', e);
    }
    const onSpeechEndHandler = (e) => {
        console.log('end', e);
    }
    const onSpeechResultsHandler = (e) => {
        let text = e.value[0];
        let res = text.charAt(0).toUpperCase() + text.slice(1);
        setResult(res);
        console.log('Results', e);
        handleSearch(res);
    }

    const contains = ({ name }, query) => {
        if (name.includes(query)) {
            return true
        }
        return false
    }
    const startRecord = async () => {
        try {
            await Voice.start('en')

        } catch (error) {
            console.log(error, 'error recording');
        }
    }
    const clearSearchResults = () => {
        setData([...filterData]);
        setSearchQuery('');
    };
    const handleSearch = text => {
        const dataS = filter(filterData, userSearch => {
            return contains(userSearch, text)
        })
        setSearchQuery(text);
        setData([...dataS])
    }
    const renderSearchData = () => {
        return (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        Keyboard.dismiss
                        nav.navigate('SearchResultScreen', { item: item.name })
                        setModalVisible(false)
                    }}>
                        <View style={styles.view2}>
                            <Text style={{ color: 'black', fontSize: 15 }}>
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        )
    }
    const searchbox = () => {
        return (
            <>
                <View style={styles.view1}>
                    <View style={styles.TextInput}>
                        <Animated.View>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(false)
                            }}>
                                <Image source={require('../Assests/Images/back.png')} style={styles.searchIcon1} />
                            </TouchableOpacity>
                        </Animated.View>
                        <TextInput
                            style={{ width: '90%', color: 'black' }}
                            value={result}
                            placeholder='what can you eat'
                            autoFocus={false}
                            onChangeText={handleSearch}
                        />
                        {searchQuery !== '' && (
                            <TouchableOpacity onPress={clearSearchResults}>
                                <Image
                                    source={require('../Assests/Images/clear.png')}
                                    style={{ height: 20, width: 20,marginRight:15 }}
                                />
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={() => startRecord()}>
                            <Image source={require('../Assests/Images/mic.png')} style={{ height: 25, width: 25, marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                {renderSearchData()}
            </>
        )
    }
    const closeModal = () => {
        setModalVisible(false);
        clearSearchResults();
      };
    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableWithoutFeedback onPress={() => {
                setModalVisible(true)
            }}>
                <View style={styles.SearchArea}>
                    <Image style={styles.searchIcon} source={require('../Assests/Images/Search1.png')} />
                    <Text style={styles.placeholder}>
                        What are You Looking for ?
                    </Text>

                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType='fade'
                transparent={false}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modal}>
                    {searchbox()}
                </View>
            </Modal>
        </View>
    )
}

export default SearchComponents

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: 'grey',
        fontSize: 16
    },
    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    SearchArea: {
        marginTop: 15,
        width: '94%',
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    searchIcon: {
        height: 20,
        width: 20,
        padding: 5,
        marginLeft: 12
    },
    placeholder: {
        color: 'black',
        fontSize: 15,
        marginLeft: 15
    },
    modal: {
        flex: 1
    },
    view1: {
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    searchIcon1: {
        height: 30,
        width: 30,
    }
})