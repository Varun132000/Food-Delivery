import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Address = ({navigation}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.addNewbtn}
    onPress={()=>{
        navigation.navigate('AddNewAddress')
    }}>
       <Text style={styles.btnText}>
           Add New Address
       </Text>
    </TouchableOpacity>
   </View>
  )
}

export default Address

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    addNewbtn:{
        width:'90%',
        height:50,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        alignSelf:'center',
        borderRadius:10
    },
    btnText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600',

    }
})