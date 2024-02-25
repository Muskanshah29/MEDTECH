import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Star from "react-native-vector-icons/FontAwesome"

import img1 from '../../../images/Diebetes/first.png'
import img2 from '../../../images/Diebetes/sec.png'
import img3 from '../../../images/Diebetes/third.png'
import img4 from '../../../images/Diebetes/four.png'

import product1 from '../../../images/Diebetes/one.png'
import product2 from '../../../images/Diebetes/two.png'
import product3 from '../../../images/Diebetes/three.png'
import product4 from '../../../images/Diebetes/four.png'

const Wellnes = ({ navigation }) => {


  wellnes_Care = [
    {
      id: 1,
      image: Image.resolveAssetSource(img1).uri,
      title: 'herbal  tablet',
      price: '300',
      subtitle: 'Anti Smoking Natural Tablet',
      //detail:''
    },
    {
      id: 2,
      image: Image.resolveAssetSource(img2).uri,
      title: 'herbal tooth past tablet',
      price: '100',
      subtitle: 'Best for teeth freshnes'
    },
    {
      id: 3,
      image: Image.resolveAssetSource(img3).uri,
      title: 'Multi Protection Mint',
      price: '550',
      subtitle: 'protect teeth from germes'
    },
    {
      id: 3,
      image: Image.resolveAssetSource(img4).uri,
      title: 'Multi Protection Mint',
      price: '550',
      subtitle: 'protect teeth from germes'
    }]

  Product = [
    {
      id: 1,
      image: Image.resolveAssetSource(product1).uri,
      title: 'Nutera sugar Free',
      price: '112',
      rating: '4.2',
      subtitle:'Sugar Free Natura, 500 Pellets|100% Safe',
      detail:'As one of the oldest brands providing you with authentic sugar substitutes like sweeteners, we have created a large base of clientele across India for a shift towards a fitness-friendly lifestyle'

    },
    {
      id: 2,
      image: Image.resolveAssetSource(product2).uri,
      title:'Sugar Free',
      subtitle: 'Sugar Free Gold, 500 Pellets| India’s No.1 Sweetner',
      price: '210',
      rating: '3.8',
      detail:'As one of the oldest brands providing you with authentic sugar substitutes like sweeteners, we have created a large base of clientele across India for a shift towards a fitness-friendly lifestyle'
    },
    {
      id: 3,
      image: Image.resolveAssetSource(product3).uri,
      title: 'Golden Sugar Free',
      subtitle:'Sugar Free Gold, 100g, Jar (Pack of 2)| ',
      price: '210',
      rating: '3.8',
      detail:'With Sugar Free Gold, one can reduce calorie intake by almost 500 calories per day. 1 tsp (0.5 g) of Sugar Free Gold powder is equivalent to 1 tsp of sugar. Use them according to your sweetness preference. Acceptable daily intake is 56 spoons of 1 g per day for 70 kg body weight'
    },
    {
      id: 4,
      image: Image.resolveAssetSource(product4).uri,
      title: 'Nutera Sugar Free',
      subtitle:'Sugar Free Natura, 100g, Jar | Equivalent to Sweetness from 1Kg Sugar |100% Safe| Scientifically Proven & Tested|Sweet like Sugar but with zero calories|',
      price: '210',
      rating: '3.8',
      detail:'It is a heat-stable sweetener and hence, is best suitable for your cooking and baking recipes. The sweetener is a scientifically healthier sweet option that can be used in toppings, sweets, cakes, desserts, and hot/cold beverages such as tea or coffee.'
    }
  ];

  const Care = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle,detail:item.detail })}>
        <View style={{ backgroundColor: '#EEEEF0', height: 160, width: 120, marginTop: 4, borderRadius: 12, marginHorizontal: 4 }}>
          <View style={{ width: '100%', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 12 }}
            />
          </View>
          <View style={{ alignSelf: 'center', top: 10 }}>
            <Text style={{ color: 'black', fontSize: 10, fontWeight: '600' }}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const ProductDeal = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle ,detail:item.detail})}>

        <View style={{ backgroundColor: 'white', height: 240, marginTop: 10, width: 165, marginLeft: 5, borderRadius: 10, margin: 8, borderColor: '#EEEEF0', borderWidth: 1.5 }}>
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

    <ScrollView style={{ flex: 1, backgroundColor: '#f7f7f7', padding: 10, marginTop: 10 }}>
      <View style={{ flex: 1, }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavig')}>
            <LeftArrow
              name='arrow-left'
              size={30}
              color='black'
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '5%' }}>Wellnes Care</Text>
        </View>
        <Image
          source={require('../../../images/img.png')}
          style={{ width: '95%', height: 150, borderRadius: 15, alignSelf: 'center', margin: 20 }} />
        <View style={{ margin: 10, height: '50%' }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Wellnes Care</Text>
        </View>
      </View>

      {/* //////////////////////////////////////////////////////////////////////// */}
      <View>
        <FlatList
          data={wellnes_Care}
          renderItem={Care}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
      <View style={{ margin: 10, top: 20, }}>
        <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>All Product</Text>
        <View style={{ marginBottom: 20 }}>
          <FlatList
            data={Product}
            // keyExtractor={(item) => item.id}
            renderItem={ProductDeal}
            numColumns={2}
          />
        </View>
      </View>



    </ScrollView>

  )
}

export default Wellnes