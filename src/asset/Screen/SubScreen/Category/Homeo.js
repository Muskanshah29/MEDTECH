import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Star from "react-native-vector-icons/FontAwesome"
import img1 from '../../../images/homeo/h1.png'
import img2 from '../../../images/homeo/h2.png'
import img3 from '../../../images/homeo/h3.png'
import img4 from '../../../images/homeo/h11.png'

import product1 from '../../../images/homeo/h11.png'
import product2 from '../../../images/homeo/h12.png'
import product3 from '../../../images/homeo/h13.png'
import product4 from '../../../images/homeo/h14.png'


const Dental = ({ navigation }) => {

  Dental_Care = [
    {
      id: 1,
      image: Image.resolveAssetSource(img1).uri,
      title: 'Calcigen tablet',
      price: '300',
      subtitle: 'Anti Smoking Natural Tablet',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'
    },
    {
      id: 2,
      image: Image.resolveAssetSource(img2).uri,
      title: 'herbal tooth past tablet',
      price: '100',
      subtitle: 'Best for teeth freshnes',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'

    },
    {
      id: 3,
      image: Image.resolveAssetSource(img3).uri,
      title: 'VEGITAB PILLS',
      price: '550',
      subtitle: 'protect teeth from germes',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'

    },
    {
      id: 4,
      image: Image.resolveAssetSource(img4).uri,
      title: 'Ostereoporosis pills',
      price: '530',
      subtitle: 'Anti Smoking Natural Tablet',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'

    },
  ]

  Product = [
    {
      id: 1,
      image:Image.resolveAssetSource(product1).uri,
      title: 'Ostereoporosis pills',
      price: '112',
      rating: '4.2',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'

    },
    {
      id: 2,
      image: Image.resolveAssetSource(product2).uri,
      title: ' Pain relief Tablet',
      price: '210',
      rating: '2.8',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'

    },
    {
      id: 3,
      image: Image.resolveAssetSource(product3).uri,
      title: 'Skin Healer',
      price: '210',
      rating: '4.3',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'

    },
    {
      id: 4,
      image: Image.resolveAssetSource(product4).uri,
      title: 'Neem Tablet',
      price: '270',
      rating: '2.7',
      detail:'Homeopathic products are often made as sugar pellets to be placed under the tongue; they may also be in other forms, such as ointments, gels, drops, creams, and tablets. Treatments are “individualized” or tailored to each person—its common for different people with the same condition to receive different treatments.'

    }
  ];



  const Care = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle ,detail:item.detail})}>
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
      <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle,detail:item.detail })}>
        <View style={{ backgroundColor: 'white', height: 240, marginTop: 10, width: 165, marginLeft: 5, borderRadius: 10, margin: 8, borderColor: '#EEEEF0', borderWidth: 1.5 }}>
          <View style={{ backgroundColor: '#EEEEF0', height: 150, borderRadius: 10 }}>
            <Image
              source={{uri: item.image}}
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
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '5%' }}>Homeo Care</Text>
        </View>
        <Image
          source={require('../../../images/homeo/homeo1.png')}
          style={{ width: '95%', height: 150, borderRadius: 15, alignSelf: 'center', margin: 20 }} />
        <View style={{ margin: 10, height: '50%' }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Homeo Care</Text>
        </View>
      </View>
      {/* //////////////////////////////////////////////////////////////////////// */}
      <View>
        <FlatList
          data={Dental_Care}
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

export default Dental