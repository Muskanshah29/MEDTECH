import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Star from "react-native-vector-icons/FontAwesome"
import img1 from '../../../images/sk/s1.png'
import img2 from '../../../images/sk/s2.png'
import img3 from '../../../images/sk/s3.png'
import img4 from '../../../images/sk/s4.png'

import product1 from '../../../images/sk/s5.png'
import product2 from '../../../images/sk/s6.png'
import product3 from '../../../images/sk/s7.png'
import product4 from '../../../images/sk/s8.png'


const Skin = ({ navigation }) => {

  Dental_Care = [
    {
      id: 1,
      image: Image.resolveAssetSource(img1).uri,
      title: 'hair grey tablet',
      price: '220',
      subtitle: 'LIH09 Dr Reckeweg Wiesbaden 30 Hair Fall Medicine & HAIR CARE Tablet (2pcs) COMBO',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'
    },
    {
      id: 2,
      image: Image.resolveAssetSource(img2).uri,
      title: 'hair grow tablet',
      price: '100',
      subtitle: 'Aayucure 100% Natural Hair Gro Tablets - 100 Tablets (Hair Loss Medicine)',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'

    },
    {
      id: 3,
      image: Image.resolveAssetSource(img3).uri,
      title: 'Kesh king hair oil',
      price: '550',
      subtitle: 'protect from hairfall ',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'

    },
    {
      id: 4,
      image: Image.resolveAssetSource(img4).uri,
      title: 'Hairfall Tablet',
      price: '530',
      subtitle: 'Healthy Hair',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'

    },
  ]

  Product = [
    {
      id: 1,
      image: Image.resolveAssetSource(product1).uri,
      title: 'Skedine',
      subtitle: 'Relive healthy Skin ',
      price: '102',
      rating: '4.2',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'

    },
    {
      id: 2,
      image: Image.resolveAssetSource(product2).uri,
      title: 'Skin gel',
      subtitle: 'Skin pigmentation',
      price: '450',
      rating: '3.8',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'

    },
    {
      id: 3,
      image: Image.resolveAssetSource(product3).uri,
      title: 'shin & hair Tablet',
      subtitle: 'healthy hair & SkinS',
      price: '310',
      rating: '3.8',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'

    },
    {
      id: 4,
      image: Image.resolveAssetSource(product4).uri,
      title: 'E skin drops',
      subtitle: 'prevent Acne And dark spot',
      price: '290',
      rating: '3.8',
      detail:'Gives your body an allover healthy glow that starts from within*Support skin smoothness, brightness and firmness with tomato extract* Lycopene, phytoene, and phytofluene from tomato extract and carnosic acid from rosemary support skin appearance*'

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
      <TouchableOpacity onPress={() => navigation.navigate('detail1', { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle ,detail:item.detail})}>
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
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '5%' }}>Skin & hair care</Text>
        </View>
        <Image
          source={require('../../../images/sk/sk.png')}
          style={{ width: '95%', height: 150, borderRadius: 15, alignSelf: 'center', margin: 20 }} />
        <View style={{ margin: 10, height: '50%' }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}>Skin & hair Care</Text>
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

export default Skin