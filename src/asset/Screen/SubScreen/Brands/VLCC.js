import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import Star from "react-native-vector-icons/FontAwesome"
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'

import img1 from '../../../images/vlcc/v1.png'
import img2 from '../../../images/vlcc/v2.png'
import img3 from '../../../images/vlcc/v3.png'
import img4 from '../../../images/vlcc/v4.png'
import img5 from '../../../images/vlcc/v5.png'


const VLCC = ({navigation}) => {

    Product = [
        {
            id: 1,
            image: Image.resolveAssetSource(img1).uri,
            //require('../images/Dental/d14.png'),
            title: 'Facial Kit',
            subtitle: 'VLCC Party Glow Facial Kit - 5 Session 1 pc',
            price: '250',
            rating: '4.8'
        },
        {
            id: 2,
            image: Image.resolveAssetSource(img2).uri,
            //require('../images/Diebetes/one.png'),
            title: 'Face Pack',
            subtitle: 'Lighten Sun Explosion Skin',
            price: '210',
            rating: '4.8'
        },
        {
            id: 3,

            image: Image.resolveAssetSource(img3).uri,
            //require('../images/Dental/care1.png'),
            title: 'Skin Whitning Face Wash',
            subtitle: 'Lightence And Briten th Skin',
            price: '200',
            rating: '3.2'
        },
        {
            id: 4,

            image: Image.resolveAssetSource(img4).uri,
            //require('../images/Dental/care1.png'),
            title: 'Face Wash',
            subtitle: 'Buy Vlcc Melia Face Wash Normal to Oily Skin 500 ml',
            price: '240',
            rating: '3.2'
        },
        {
            id: 5,

            image: Image.resolveAssetSource(img5).uri,
            //require('../images/Dental/care1.png'),
            title: 'Almond & Honey Lotion',
            subtitle: 'Herbal Vlcc Lotion 1+1, Oil, Packaging Size: 250 ml',
            price: '210',
            rating: '3.2'
        },
        
    ];


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
                            <Text style={{ fontSize: 15, color: '#090F47', fontWeight: '800', }}>{item.price}/-</Text>
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
        <ScrollView style={{ flex: 1 }}>
            <View style={{ margin: 20 }}>
                <View style={{ flexDirection: 'row', height: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavig')}>
                        <LeftArrow
                            name='arrow-left'
                            size={28}
                            color='black'
                        //style={{ marginLeft: 10 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '8%' }}>VLCC Product</Text>
                </View>
                <View>
                    <FlatList
                        data={Product}
                        // keyExtractor={(item) => item.id}
                        renderItem={ProductDeal}
                        //horizontal={true}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default VLCC