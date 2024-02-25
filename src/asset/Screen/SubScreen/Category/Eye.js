import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Star from "react-native-vector-icons/FontAwesome"
import img1 from '../../../images/Eye/e11.png'
import img2 from '../../../images/Eye/e12.png'
import img3 from '../../../images/Eye/e13.png'
import img4 from '../../../images/Eye/e14.png'

import product1 from '../../../images/Eye/e1.png'
import product2 from '../../../images/Eye/e2.png'
import product3 from '../../../images/Eye/e3.png'
import product4 from '../../../images/Eye/e4.png'
import product5 from '../../../images/Eye/e5.png'



const Eye = ({ navigation }) => {

  Dental_Care = [
    {
      id: 1,
      image: Image.resolveAssetSource(img1).uri,
      title: 'SeeBest eye drop',
      price: '140',
      subtitle: 'make healthy eyes',
      detail:'Seebest Eye Drops provide temporary relief from dry eye symptoms like red eyes, itching eyes, burning eyes, stinging eyes, irritated eyes, and watering eyes. Use Dry Eye Relief as often as needed with no known side effects'
    },
    {
      id: 2,
      image: Image.resolveAssetSource(img2).uri,
      title: 'Green Nature Eye Care ',
      price: '100',
      subtitle: 'protect eyes from germs',
      detail:'Nourish eyes with Healthyr-U eye and vision care tablets. a holistic blend with DHA, a powerful antioxidant astaxanthin, lutein, and L-glutathione. All of which are important for maintaining healthy eyes and vision. Protect your eyes in digital era from harmful blue light, eye fatigue, dryness.'
    },
    {
      id: 3,
      image: Image.resolveAssetSource(img3).uri,
      title: 'Eye Logic',
      price: '550',
      subtitle: 'Dry eyes drop',
      detail:'Ayurveda Sunetra Regular Herbal Eyedrops (17-60 years age) from Renowned Eye Hospital, Relieves Dryness, Redness & Itching, Cooling Daily-use Eyedrops with Rosewater, Holy Basil Leaves and Pure Honey, 100% Ayurvedic'
    },
    {
      id: 4,
      image: Image.resolveAssetSource(img4).uri,
      title: 'Mamira eye drops',
      price: '530',
      subtitle: 'For cool and Sothing eyes',
      detail:'Ayurveda Sunetra Regular Herbal Eyedrops (17-60 years age) from Renowned Eye Hospital, Relieves Dryness, Redness & Itching, Cooling Daily-use Eyedrops with Rosewater, Holy Basil Leaves and Pure Honey, 100% Ayurvedic'

    },
  ]

  Product = [
    {
      id: 1,
      image: Image.resolveAssetSource(product1).uri,
      title: 'Eye Care herbal Capsule',
      subtitle: 'Ayurvedic - 60 Tablets',
      price: '145',
      rating: '3.7',
      detail:'Nourish eyes with Healthyr-U eye and vision care tablets. a holistic blend with DHA, a powerful antioxidant astaxanthin, lutein, and L-glutathione. All of which are important for maintaining healthy eyes and vision. Protect your eyes in digital era from harmful blue light, eye fatigue, dryness.'

    },
    {
      id: 2,
      image: Image.resolveAssetSource(product2).uri,
      title: 'OphthaCare Eye Drops ',
      subtitle: 'Himalaya OphthaCare Eye Drops have cooling properties',
      price: '210',
      rating: '3.8',
      detail:'Ayurveda  Eyedrops (17-60 years age) from Renowned Eye Hospital, Relieves Dryness, Redness & Itching, Cooling Daily-use Eyedrops with Rosewater, Holy Basil Leaves and Pure Honey, 100% Ayurvedic'

    },
    {
      id: 3,
      image: Image.resolveAssetSource(product3).uri,
      title: 'Ciplox Ciprofloxacin Eye Drops',
      subtitle: 'Ciplox Eye/Ear Drops is an antibiotic, used in the treatment of bacterial eye/ear infections.',
      price: '210',
      rating: '3.8',
      detail:'Ayurveda  Eyedrops (17-60 years age) from Renowned Eye Hospital, Relieves Dryness, Redness & Itching, Cooling Daily-use Eyedrops with Rosewater, Holy Basil Leaves and Pure Honey, 100% Ayurvedic'

    },
    {
      id: 4,
      image: Image.resolveAssetSource(product4).uri,
      title: 'Maxvision Tablet:',
      subtitle: 'Buy Strip of 15 tablets',
      price: '210',
      rating: '3.8',
      detail:'Nourish eyes with Healthyr-U eye and vision care tablets. a holistic blend with DHA, a powerful antioxidant astaxanthin, lutein, and L-glutathione. All of which are important for maintaining healthy eyes and vision. Protect your eyes in digital era from harmful blue light, eye fatigue, dryness.'

    },
    {
        id: 5,
        image: Image.resolveAssetSource(product5).uri,
        title: 'Buy Strip of 15 tablets',
        subtitle: 'Lutein, Astaxanthin, Zeaxanthin, Bilberry Extract, Gingko Biloba Extract',
        price: '210',
        rating: '3.8',
        detail:'Ayurveda  Eyedrops (17-60 years age) from Renowned Eye Hospital, Relieves Dryness, Redness & Itching, Cooling Daily-use Eyedrops with Rosewater, Holy Basil Leaves and Pure Honey, 100% Ayurvedic'

      }
  ];


  const Care = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle ,detail: item.detail})}>
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
      <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle,detail: item.detail })}>
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
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '5%' }}>Eye Care</Text>
        </View>
        <Image
          source={require('../../../images/Eye/f1.png')}
          style={{ width: '95%', height: 150, borderRadius: 15, alignSelf: 'center', margin: 20 }} />
        <View style={{ margin: 10, height: '50%' }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Dental Care</Text>
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

export default Eye