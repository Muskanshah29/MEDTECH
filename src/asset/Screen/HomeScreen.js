import { View, Text, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Searchbar } from 'react-native-paper';
import { openDatabase } from 'react-native-sqlite-storage';

import Star from "react-native-vector-icons/FontAwesome"
import Bell from "react-native-vector-icons/Fontisto"
import Bag from "react-native-vector-icons/Feather"

//category
import Icon from "react-native-vector-icons/FontAwesome6";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";


import img1 from '../images/Dental/d14.png'
import img2 from '../images/Diebetes/one.png'
import img3 from '../images/Dental/care1.png'
import img4 from '../images/himalaya/facewash.png'


const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        getData();
    }, [])
    const db = openDatabase({ name: 'MedTechProject.db' });
    const [name, setEname] = useState('');
    const [searchText, setSearchText] = useState('');

    Product = [
        {
            id: 1,
            image: Image.resolveAssetSource(img1).uri,
            //require('../images/Dental/d14.png'),
            title: 'Dental Pain relief Tablet',
            subtitle: 'Best for teeth freshnes',
            price: '210',
            rating: '3.8'
        },
        {
            id: 2,
            image: Image.resolveAssetSource(img2).uri,
            //require('../images/Diebetes/one.png'),
            title: 'herbal Tablet',
            subtitle: 'Anti Smoking natural tablet',
            price: '210',
            rating: '4.8'
        },
        {
            id: 3,

            image: Image.resolveAssetSource(img3).uri,
            //require('../images/Dental/care1.png'),
            title: 'herbal Tablet',
            subtitle: 'Anti Smoking natural tablet',
            price: '210',
            rating: '3.2'
        },
        {
            id: 4,
            image: Image.resolveAssetSource(img4).uri,
            //require('../images/Dental/d14.png'),
            title: 'Himalaya Face Wash',
            subtitle: 'Himalaya Neem purifying face wash',
            price: '80',
            rating: '3.8'
        },
    ];


    const getData = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT name FROM signup', [], (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i) {
                    temp.push(results.rows.item(i));
                    //console.log(results.rows.item(i))
                    var username = results.rows.item(i).name;
                    var Password = results.rows.item(i).password;
                    setEname(username);

                }

            })
        })
    }

    const ProductDeal = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle })}>
                <View style={{ backgroundColor: 'white', height: 240, marginTop: 10, width: 165, marginLeft: 5, borderRadius: 10, margin: 8 }}>
                    <View style={{ backgroundColor: '#EEEEF0', height: 150, borderRadius: 10 }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: '80%', height: '80%', alignSelf: 'center', marginTop: 20 }}
                        />
                    </View>
                    <View style={{ height: '18%', width: '100%' }}>
                        <Text style={{ fontSize: 10, color: '#090F47', fontWeight: '500', padding: '3%' }}>{item.title}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 8, marginTop: '4%' }}>
                            <Text style={{ fontSize: 15, color: '#090F47', fontWeight: '800', }}>{item.price}</Text>
                            <View
                                style={{ backgroundColor: '#FFC000', width: '40%', height: 35, borderBottomLeftRadius: 20, borderTopLeftRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Star
                                    name='star'
                                    color="white"
                                    size={22}
                                    style={{ marginRight: '10%' }} />
                                <Text style={{ color: 'white', fontSize: 12, fontWeight: '800' }}>{item.rating}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <ScrollView style={{ flex: 1, }}>
            <View style={{ flex: 1, height: 210, }}>
                <View style={{ backgroundColor: '#3f55f8', height: 200, borderBottomLeftRadius: 45, borderBottomRightRadius: 45 }}>
                    <View style={{ margin: 22, }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../images/manImg.png')}
                                style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 60 / 2,
                                }}>
                            </Image>
                            <TouchableOpacity  onPress={() => navigation.navigate('notification')}>
                                <Bell
                                    name='bell'
                                    color="white"
                                    size={22}
                                    style={{ alignSelf: 'center', marginLeft: '60%',marginTop:15 }}/>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => navigation.navigate('cart')}>
                                <Bag
                                    name='shopping-bag'
                                    color="white"
                                    size={22}
                                    style={{ alignSelf: 'center', marginLeft: '10%' ,marginTop:15}} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ marginTop: '5%', fontSize: 20, color: 'white' }}>Hii,{name}</Text>
                        <Text style={{ color: 'white' }}>Welcome to MedTech</Text>
                    </View>
                    {/* <View style={{ alignSelf: 'center', marginTop: '1%' }}>
                        <Searchbar
                            placeholder="Search Medicine"
                            onChangeText={(text) => setSearchText(text)}
                            value={searchText}
                            style={{
                                backgroundColor: 'white',
                                width: '80%'

                            }}
                        />
                    </View> */}
                </View>
            </View>


            <View style={{ margin: '3%' }}>
                <View style={{ justifyContent: 'center', height: 40, }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', margin: 6 }}>Top Categories</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => navigation.navigate('dental')}>

                        <View style={{ backgroundColor: 'white', height: 130, margin: 5, marginTop: 15, width: 80, padding: 5, alignItems: 'center', borderRadius: 50 }}>
                            <ImageBackground
                                source={require('../images/Categories/dental_Back.png')}
                                style={{ width: 70, height: 70, }}
                            >
                                <Icon
                                    name='teeth'
                                    color="white"
                                    size={28}
                                    style={{ alignSelf: 'center', marginTop: 20 }} />

                            </ImageBackground>

                            <View style={{ width: 80, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, marginTop: '10%', color: 'black', fontWeight: '500', }}>Dental</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* ************ */}
                    <TouchableOpacity onPress={() => navigation.navigate('wellness')}>
                        <View style={{ backgroundColor: 'white', height: 130, margin: 5, marginTop: 15, width: 80, padding: 5, alignItems: 'center', borderRadius: 50 }} onPress={() => navigation.navigate('wellness')}>
                            <ImageBackground
                                source={require('../images/Categories/Back_green.png')}
                                style={{ width: 70, height: 70, }}
                            >

                                <Icon1
                                    name='leaf-maple'
                                    color="white"
                                    size={28}
                                    style={{ alignSelf: 'center', marginTop: 20 }} />

                            </ImageBackground>

                            <View style={{ width: 80, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, marginTop: '10%', color: 'black', fontWeight: '500', }}>Wellness</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* ////////////////////////////////////////////////////////////////// */}
                    <TouchableOpacity onPress={() => navigation.navigate('homeo')}>

                        <View style={{ backgroundColor: 'white', height: 130, margin: 5, marginTop: 15, width: 80, padding: 5, alignItems: 'center', borderRadius: 50 }}>
                            <ImageBackground
                                source={require('../images/Categories/Back_orange.png')}
                                style={{ width: 70, height: 70, }}
                            >

                                <Icon2
                                    name='medicinebox'
                                    color="white"
                                    size={28}
                                    style={{ alignSelf: 'center', marginTop: 20 }} />

                            </ImageBackground>

                            <View style={{ width: 80, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, marginTop: '10%', color: 'black', fontWeight: '500', }}>Homeo</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* ////////////////////////////////////////////////////////////// */}
                    <TouchableOpacity onPress={() => navigation.navigate('eye')}>

                        <View style={{ backgroundColor: 'white', height: 130, margin: 5, marginTop: 15, width: 80, padding: 5, alignItems: 'center', borderRadius: 50 }}>
                            <ImageBackground
                                source={require('../images/Categories/Back_blue.png')}
                                style={{ width: 70, height: 70, }}
                            >

                                <Icon3
                                    name='eyeo'
                                    color="white"
                                    size={28}
                                    style={{ alignSelf: 'center', marginTop: 20 }} />

                            </ImageBackground>

                            <View style={{ width: 80, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, marginTop: '10%', color: 'black', fontWeight: '500', }}>Eye care</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* ////////////////////////////////////////////////// */}

                    <TouchableOpacity onPress={() => navigation.navigate('skin')}>


                        <View style={{ backgroundColor: 'white', height: 130, margin: 5, marginTop: 15, width: 80, padding: 5, alignItems: 'center', borderRadius: 50 }}>
                            <ImageBackground
                                source={require('../images/Categories/Back_black.png')}
                                style={{ width: 70, height: 70, }}
                            >

                                <Icon4
                                    name='face-man-shimmer'
                                    color="white"
                                    size={28}
                                    style={{ alignSelf: 'center', marginTop: 20 }} />

                            </ImageBackground>

                            <View style={{ width: 80, alignItems: 'center' }}>
                                <Text style={{ fontSize: 12, marginTop: '10%', color: 'black', fontWeight: '500', }}>Skin&Hair</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 10, flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', }}>Deals of the Day</Text>
                    <Text style={{ color: '#006AFF', fontSize: 13.5, fontWeight: '400', }}>More</Text>

                </View>

                <FlatList
                    data={Product}
                    // keyExtractor={(item) => item.id}
                    renderItem={ProductDeal}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                <View style={{ justifyContent: 'center', height: 40, marginTop: 20 }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', margin: 6 }}>Featured Brands</Text>
                </View>


                {/* k********************************************************************8 */}

                <View style={{ margin: 4, flexDirection: 'row' }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 25, marginLeft: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('himalaya')}>
                            <View style={{ flexDirection: 'column', height: 190, width: 110, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: 'white', width: 100, height: 100, borderRadius: 100 / 2, alignContent: 'center', }}>
                                    <Image
                                        source={require('../images/Brands/himalaya.png')}
                                        style={{ width: 100, height: 120, }} />
                                </View>
                                <View style={{ alignSelf: 'center', marginTop: 8, width: '100%', height: 40, alignItems: 'center', }}>
                                    <Text style={{ fontSize: 10, color: 'black', fontWeight: '500', alignItems: 'center', }}>Himalaya Wellness</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('protin')}>
                            <View style={{ flexDirection: 'column', height: 190, width: 110, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: 'white', width: 100, height: 100, borderRadius: 100 / 2, alignContent: 'center', }}>
                                    <Image
                                        source={require('../images/Brands/protinex.png')}
                                        style={{ width: 90, height: 90, alignSelf: 'center', marginTop: 8, borderRadius: 75 / 2 }} />
                                </View>
                                <View style={{ alignSelf: 'center', marginTop: 8, width: '100%', height: 40, alignItems: 'center', }}>
                                    <Text style={{ fontSize: 10, color: 'black', fontWeight: '500', alignItems: 'center', }}>Protinex</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('vlcc')}>
                            <View style={{ flexDirection: 'column', height: 190, width: 110, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: 'white', width: 100, height: 100, borderRadius: 100 / 2, alignContent: 'center', }}>
                                    <Image
                                        source={require('../images/Brands/vlcc.png')}
                                        style={{ width: 85, height: 50, alignSelf: 'center', marginTop: 25 }} />
                                </View>
                                <View style={{ alignSelf: 'center', marginTop: 8, width: '100%', height: 40, alignItems: 'center', }}>
                                    <Text style={{ fontSize: 10, color: 'black', fontWeight: '500', alignItems: 'center', }}>vlcc</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* 
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'column', height: 190, width: 110, alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: 'white', width: 100, height: 100, borderRadius: 100 / 2, alignContent: 'center', }}>
                                    <Image
                                        source={require('../images/Brands/accu_check.png')}
                                        style={{ width: 85, height: 12, alignSelf: 'center', marginTop: 40 }} />
                                </View>
                                <View style={{ alignSelf: 'center', marginTop: 8, width: '100%', height: 40, alignItems: 'center', }}>
                                    <Text style={{ fontSize: 10, color: 'black', fontWeight: '500', alignItems: 'center', }}>AccuCheck</Text>
                                </View>
                            </View>
                        </TouchableOpacity> */}
                    </ScrollView>
                </View>
            </View>
        </ScrollView>



    )
}

export default HomeScreen