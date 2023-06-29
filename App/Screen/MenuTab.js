import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text,Pressable } from 'react-native';
import { menuData, menuDetailedData ,ChickenDetails,MilkShakesData,VeggieData} from './Data';
import MenuCard from './MenuCard';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
export function Route1({ navigation,onPress }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const total = cart
        .map((item) => item.price * item.quantity)
        .reduce((curr, prev) => curr + prev, 0);
    const renderCounterData = () => {
        return (
            <>
                {total === 0 ? null : (
                    <Pressable
                        style={{
                            backgroundColor: "#00A877",
                            width: "90%",
                            padding: 13,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: 30,
                            position: "absolute",
                            borderRadius: 8,
                            left: 20,
                            bottom: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View>
                                <Text
                                    style={{ fontSize: 16, fontWeight: "bold", color: "white" }}
                                >
                                    {cart.length} items | {total.toFixed(2)}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "500",
                                        marginTop: 3,
                                        color: "white",
                                    }}
                                >
                                    Extra Charges may Apply!
                                </Text>
                            </View>

                            <Pressable
                                onPress={() =>
                                    navigation.navigate("AddToCartScreen")}
                            >
                                <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
                                    View Cart
                                </Text>
                            </Pressable>
                        </View>
                    </Pressable>
                )}
            </>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.view2}>
                <FlatList
                    style={{ backgroundColor: 'white' }}
                    data={menuDetailedData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress ={()=>{navigation.navigate("PreferenceScreen",{index})}}>
                            <MenuCard
                                productName={item.meal}
                                image={item.image}
                                price={item.price}
                                productDetails={item.details}
                            />
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {renderCounterData()}
        </View>
    )
}

export const Route2 = (navigation,onPress) => {
    const nav = useNavigation();
     return(
        <View style ={{flex:1}}>
            <View style ={styles.view2}>
                <FlatList 
                    style ={{backgroundColor:'white'}}
                    data = {ChickenDetails}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity onPress ={()=>{nav.navigate("PreferenceScreen2",{index})}}>
                            <MenuCard 
                                productName ={item.meal}
                                image ={item.image}
                                price ={item.price}
                                productDetails = {item.details}
                            />
                        </TouchableOpacity>
                    )}

                showsVerticalScrollIndicator = {false}
                />
            </View>
        </View>
    )
}
export const Route3 = () => {const nav = useNavigation();
    return(
       <View style ={{flex:1}}>
           <View style ={styles.view2}>
               <FlatList 
                   style ={{backgroundColor:'white'}}
                   data = {VeggieData}
                   keyExtractor = {(item,index)=>index.toString()}
                   renderItem = {({item,index})=>(
                       <TouchableOpacity onPress ={()=>{nav.navigate("PreferenceScreen3",{index})}}>
                           <MenuCard 
                               productName ={item.meal}
                               image ={item.image}
                               price ={item.price}
                               productDetails = {item.details}
                           />
                       </TouchableOpacity>
                   )}

               showsVerticalScrollIndicator = {false}
               />
           </View>
       </View>
   )}
   export const Route8 = () =>{const nav = useNavigation();
    return(
       <View style ={{flex:1}}>
           <View style ={styles.view2}>
               <FlatList 
                   style ={{backgroundColor:'white'}}
                   data = {MilkShakesData}
                   keyExtractor = {(item,index)=>index.toString()}
                   renderItem = {({item,index})=>(
                       <TouchableOpacity onPress ={()=>{nav.navigate("PreferenceScreen4",{index})}}>
                           <MenuCard 
                               productName ={item.meal}
                               image ={item.image}
                               price ={item.price}
                               productDetails = {item.details}
                           />
                       </TouchableOpacity>
                   )}

               showsVerticalScrollIndicator = {false}
               />
           </View>
       </View>
   )}
export const Route4 = () => (<View style={{ ...styles.scene, backgroundColor: "green" }} />)
export const Route5 = () => (<View style={styles.scene} />)
export const Route6 = () => (<View style={styles.scene} />)
export const Route7 = () => (<View style={styles.scene} />)


const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#673ab7'
    },

    view2: {
        marginTop: 5,
        paddingBottom: 20
    },

    scene2: {
        backgroundColor: '#673ab7'
    }

});