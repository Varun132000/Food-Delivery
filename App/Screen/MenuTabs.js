/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet,FlatList,TouchableOpacity,Text} from 'react-native';
import { menuDetailedData } from './Data';
import MenuCard from '../Components/MenuCard';
import { ChickenDetails } from './Datadetails/McDonaldsData/ChikenDetails';
import { VeggieData } from './Datadetails/VegetrianDetailData';
import { MilkShakesData } from './Datadetails/McDonaldsData/MilkShakesData';


export  function Route1({navigation}){
    return(
        <View style ={{flex:1}}>
            <View style ={styles.view2}>
                <FlatList 
                    style ={{backgroundColor:'white'}}
                    data = {menuDetailedData}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity onPress ={()=>{navigation.navigate("PreferenceScreen",{index})}}>
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

export const Route2 = ({navigation})=>{
    return(
        <View style ={{flex:1}}>
            <View style ={styles.view2}>
                <FlatList 
                    style ={{backgroundColor:'white'}}
                    data = {ChickenDetails}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity onPress ={()=>{navigation.navigate("MenuProductScreen",{index})}}>
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
export const Route3 = ({navigation})=>{
    return(
        <View style ={{flex:1}}>
            <View style ={styles.view2}>
                <FlatList 
                    style ={{backgroundColor:'white'}}
                    data = {VeggieData}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity onPress ={()=>{navigation.navigate("MenuProductScreen",{index})}}>
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
export const Route4 = ()=>(<View style = {{...styles.scene,backgroundColor:"green"}}/>)
export const Route5 = ()=>(<View style = {styles.scene}/>)
export const Route6 = ()=>(<View style = {styles.scene}/>)
export const Route7 = ()=>(<View style = {styles.scene}/>)
export const Route8 = ({navigation})=>{
    return(
        <View style ={{flex:1}}>
            <View style ={styles.view2}>
                <FlatList 
                    style ={{backgroundColor:'white'}}
                    data = {MilkShakesData}
                    keyExtractor = {(item,index)=>index.toString()}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity onPress ={()=>{navigation.navigate("MenuProductScreen",{index})}}>
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


const styles = StyleSheet.create({
    scene: {
      flex: 1,
      backgroundColor: '#673ab7'
    },
  
  view2:{marginTop:5,
        paddingBottom:20
      },
  
  scene2: { backgroundColor: '#673ab7' }  
  
  });