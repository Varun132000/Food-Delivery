<<<<<<< Updated upstream
=======
/* eslint-disable prettier/prettier */
import { Image, Modal, StyleSheet, FlatList, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import Animated from 'react-native-reanimated'
import { filterData } from '../Screen/Data'
import { restaurantsData } from '../Screen/Data'
import filter from 'lodash/filter'

const SearchComponents = ({navigation}) => {
    const [data,setData]=useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocused, setTextInputFocused] = useState(true)
    const textInput = useRef(0)
    const contains = ({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }
    const handleSearch = text =>{
        const dataS = filter(filterData, userSearch =>{
            return contains(userSearch,text)
        })
    
        setData([...dataS])
    }
    const renderSearchData=()=>{
        return(
            <FlatList
            data={data}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>{
                    Keyboard.dismiss
                    ,{item:item.name}
                    setModalVisible(false)
                }}>
                    <View style={styles.view2}>
                        <Text style={{color:'black',fontSize:15}}>
                            {item.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item=>item.id}
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
                                setModalVisible(false),
                                    setTextInputFocused(false)
                            }}>
                                <Image source={require('../Assests/Images/back.png')} style={styles.searchIcon1} />
                            </TouchableOpacity>
                        </Animated.View>
                        <TextInput
                            style={{ width: '90%', color: 'black' }}
                            placeholder=''
                            autoFocus={false}
                            ref={textInput}
                            onFocus={()=>setTextInputFocused(true)}
                            onBlur={()=>{
                                setTextInputFocused(false)
                            }}
                            onChangeText ={handleSearch}
                        />
                    </View>
                </View>
                {renderSearchData()}
            </>
        )
    }
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
        paddingHorizontal: 10
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
>>>>>>> Stashed changes
