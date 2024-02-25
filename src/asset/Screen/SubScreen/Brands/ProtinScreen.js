import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

import Star from "react-native-vector-icons/FontAwesome"
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'

import img1 from '../../../images/protinex/p1.png'
import img2 from '../../../images/protinex/p2.png'
import img3 from '../../../images/protinex/p3.png'
// import img4 from '../../../images/protinex/p4.png'
// import img5 from '../../../images/protinex/p5.png'
// import img6 from '../../../images/protinex/p6.png'
// import img7 from '../../../images/protinex/p7.png'
// import img8 from '../../../images/protinex/p8.png'
// import img9 from '../../../images/protinex/p9.png'
// import img10 from '../../../images/protinex/p10.png'

const ProtinScreen = ({navigation}) => {

    Product = [
        {
            id: 1,
            image: Image.resolveAssetSource(img1).uri,
            //require('../images/Dental/d14.png'),
            title: 'protine Powder',
            subtitle: 'Protinex Powder - Original Flavour 250 gm (Tin)',
            price: '400',
            rating: '2.8',
            detail:'Protinex - 400 g (Tasty Chocolate) Product Details Item Weight: 399 g 50 percent extra protein as compared to regular milk food drinks 100 percent vegetarian source of protein Low fat Protinex is the perfect partner for you in the race of life.'
        },
        {
            id: 2,
            image: Image.resolveAssetSource(img2).uri,
            //require('../images/Diebetes/one.png'),
            title: 'Vanila Flevour',
            subtitle: 'Buy Protinex Junior Nutritional Drink Powder for Kids - Vanilla Flavor',
            price: '210',
            rating: '4.8',
            detail:'Protinex - 400 g (Tasty Chocolate) Product Details Item Weight: 399 g 50 percent extra protein as compared to regular milk food drinks 100 percent vegetarian source of protein Low fat Protinex is the perfect partner for you in the race of life.'

        },
        {
            id: 3,

            image: Image.resolveAssetSource(img3).uri,
            //require('../images/Dental/care1.png'),
            title: 'Dibetes care',
            subtitle: 'Protinex Diabetes Care 400g (Tin)',
            price: '290',
            rating: '4.2',
            detail:'Protinex - 400 g (Tasty Chocolate) Product Details Item Weight: 399 g 50 percent extra protein as compared to regular milk food drinks 100 percent vegetarian source of protein Low fat Protinex is the perfect partner for you in the race of life.'

        },
        // {
        //     id: 4,

        //     image: Image.resolveAssetSource(img4).uri,
        //     //require('../images/Dental/care1.png'),
        //     title: 'herbal Scrubber',
        //     subtitle: 'Himalaya Herbals Gentle Exfoliating Apricot Scrub 100ml',
        //     price: '240',
        //     rating: '3.2'
        // },
        // {
        //     id: 5,

        //     image: Image.resolveAssetSource(img5).uri,
        //     //require('../images/Dental/care1.png'),
        //     title: 'pimpal Cream',
        //     subtitle: 'Himalaya Herbals Acne-n-Pimple Cream Review | Diva Likes',
        //     price: '210',
        //     rating: '3.2'
        // },
        // {
        //     id: 6,

        //     image: Image.resolveAssetSource(img6).uri,
        //     //require('../images/Dental/care1.png'),
        //     title: 'Lip Care',
        //     subtitle: 'Himalaya Lip Care - Strawberry Shine 4.5 gm - Multimedicos',
        //     price: '120',
        //     rating: '3.2'
        // },
        // {
        //     id: 7,

        //     image: Image.resolveAssetSource(img7).uri,
        //     //require('../images/Dental/care1.png'),
        //     title: 'Neem Face Wash',
        //     subtitle: 'Himalaya : Buy Himalaya Products Online in India | 1mg',
        //     price: '75',
        //     rating: '3.2'
        // },
        // {
        //     id: 8,

        //     image: Image.resolveAssetSource(img8).uri,
        //     //require('../images/Dental/care1.png'),
        //     title: 'Acne face wash',
        //     subtitle: 'Himalaya Herbals Fresh Start Oil Clear Strawberry Face Wash 100ml',
        //     price: '300',
        //     rating: '3.2'
        // },
        // {
        //     id: 9,

        //     image: Image.resolveAssetSource(img9).uri,
        //     //require('../images/Dental/care1.png'),
        //     title: 'septilin Tablet',
        //     subtitle: 'Septilin Tablets - Himalaya Wellness (Builds the bodys own defense mechanism)',
        //     price: '98',
        //     rating: '3.2'
        // },
        // {
        //     id: 10,

        //     image: Image.resolveAssetSource(img10).uri,
        //     //require('../images/Dental/care1.png'),
        //     title: 'herbal Tablet',
        //     subtitle: 'Anti Smoking natural tablet',
        //     price: '80',
        //     rating: '3.2'
        // }
    ];


    const ProductDeal = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle ,detail:item.detail})}>
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
                    <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '8%' }}>Protinex Product</Text>
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

export default ProtinScreen