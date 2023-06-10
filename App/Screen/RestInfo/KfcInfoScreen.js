import { StyleSheet, Text, View, TouchableOpacity, Linking, Image } from 'react-native'
import React from 'react'

const KfcInfoScreen = () => {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink);
    }
    return (
        <View style={{ marginLeft: 13, marginRight: 13 }}>
            <View style={{ marginTop: 10 }}>
                {/* <Image style={{ height: 300, width: 400, marginBottom: 10 }} source={require('../Assests/Images/McRelation.jpg')}></Image>*/}
                <Text style={{ alignSelf: 'center', color: 'red', fontSize: 16 }}>It all started with one cook
                    who {'\n'}created a finger licking good {'\n'}recipe more than 75 years {'\n'}ago, a list of secret herbs {'\n'}and spices scratched out on the {'\n'}back of the door to his kitchen.</Text>
                <Text style={{ fontSize: 16, marginTop: 10 }}>
                    KFC is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin’ good recipe more than 75 years ago—a list of 11 secret herbs and spices scratched out on the back of his kitchen door. Today, we still follow his formula for success, with real cooks breading and freshly preparing our delicious chicken by hand in more than 27,000 restaurants in over 145 countries and territories around the world.{'\n'}
                    {'\n'}

                    Colonel Sanders was a born innovator and founded KFC on values like hard work, hospitality and generosity that still live large in the KFC brand today. We believe in making chicken the right way, by using quality ingredients and freshly preparing them by hand every day. We also proudly welcome everyone to enjoy a seat at our table. From our more than 800,000 Team Members to our guests around the world, KFC treats everyone with generosity and like family.{'\n'}
                    {'\n'}

                    We are grounded in our heritage but looking forward to the future. KFC is always evolving to make it easier for our guests to enjoy our chicken. We do this through digital innovation and building new restaurants with our valued franchise partners. In fact, every six hours, a new KFC restaurant opens somewhere in the world. As we grow, KFC is committed to doing so responsibly through commitments like our 2025 global plastic packaging goal, the realization of our 2018 commitment to stop purchasing chicken raised with antibiotics important to human medicine in the US and the KFC Harvest program, which to date has donated over 80 million pounds of food to our local communities around the world.{'\n'}
                    {'\n'}

                    From KFC’s world famous Original Recipe to our new signature flavors and formats, we are about making the most craveable, Colonel-inspired chicken in the world, the right way. If it’s not finger lickin’ good, it’s not us. And with the help of incredible franchise partners around the world, we’ll continue to be one of the fastest growing retail brands globally, both in emerging and developed markets alike.{'\n'}
                    {'\n'}

                    To learn more about the Global KFC brand, please
                    <TouchableOpacity onPress={() => openWebsite('https://global.kfc.com/')}>
                        <Text style={{ color: 'red', fontSize: 16,}}>
                            click here
                        </Text>
                    </TouchableOpacity>
                    To learn more about KFC in the US, please
                    <TouchableOpacity onPress={() => openWebsite('https://global.kfc.com/')}>
                        <Text style={{ color: 'red',alignSelf:'center' }}>
                            click here
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
};

export default KfcInfoScreen;

const styles = StyleSheet.create({})