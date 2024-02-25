import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, CellRenderer } from 'react-native'
import React, { useEffect, useState } from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Star from "react-native-vector-icons/FontAwesome"
import img1 from '../../../images/Dental/care1.png'
import img2 from '../../../images/Dental/dental2.png'
import img3 from '../../../images/Dental/dental3.png'
import img4 from '../../../images/Dental/d14.png'

import product1 from '../../../images/Dental/d11.png'
import product2 from '../../../images/Dental/d12.png'
import product3 from '../../../images/Dental/d13.png'
import product4 from '../../../images/Dental/d14.png'


const Dental = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  Dental_Care = [
    {
      id: 1,
      image: Image.resolveAssetSource(img1).uri,
      title: 'herbal  tablet',
      price: '300',
      subtitle: 'Anti Smoking Natural Tablet',
      detail: 'Product highlights Helps to protect the liver against hepatotoxins Guards the liver against jaundice and hepatitis A & B Stimulates the overall growth and appetite of the body Helps to improve the digestion process'
    },
    {
      id: 2,
      image: Image.resolveAssetSource(img2).uri,
      title: 'herbal tooth past tablet',
      price: '100',
      subtitle: 'Best for teeth freshnes',
      detail: ' Colgate Herbal toothpaste is an anti-cavity toothpaste that combines the science of Colgate and natures best herbs to give you and your family healthy teeth. Colgate is Indias Most Trusted oral care brand and is IDA certified. This toothpaste is 100% vegan, sugar-free and gluten-free.'
    },
    {
      id: 3,
      image: Image.resolveAssetSource(img3).uri,
      title: 'Multi Protection Mint',
      price: '550',
      subtitle: 'protect teeth from germes',
      detail: 'Product highlights Helps to protect the liver against hepatotoxins Guards the liver against jaundice and hepatitis A & B Stimulates the overall growth and appetite of the body Helps to improve the digestion process'

    },
    {
      id: 4,
      image: Image.resolveAssetSource(img4).uri,
      title: 'ToothPaste Tablet',
      price: '530',
      subtitle: 'Anti Smoking Natural Tablet',
      detail: ' Colgate Herbal toothpaste is an anti-cavity toothpaste that combines the science of Colgate and natures best herbs to give you and your family healthy teeth. Colgate is Indias Most Trusted oral care brand and is IDA certified. This toothpaste is 100% vegan, sugar-free and gluten-free.'

    },
  ]

  // Product = [
  //   {
  //     id: 1,
  //     image: Image.resolveAssetSource(product1).uri,
  //     title: 'Dental Herbal Tablet',
  //     subtitle: 'Anti Smoking Natural Tablet',
  //     price: '112',
  //     rating: '4.2',
  //     detail:'Product highlights Helps to protect the liver against hepatotoxins Guards the liver against jaundice and hepatitis A & B Stimulates the overall growth and appetite of the body Helps to improve the digestion process'

  //   },
  //   {
  //     id: 2,
  //     image: Image.resolveAssetSource(product2).uri,
  //     title: 'Dental Pain relief Tablet',
  //     subtitle: 'Best for teeth freshnes',
  //     price: '210',
  //     rating: '3.8',
  //     detail:'corticosteroids such as Orabase-HCA, Oracort, and Oralone are anti-inflammatory medications that are used to relieve discomfort and redness of the mouth; and for severe pain conditions, narcotic analgesics such as codeine or hydrocodone (Vicodin) may be given.'
  //   },
  //   {
  //     id: 3,
  //     image: Image.resolveAssetSource(product3).uri,
  //     title: 'Dental Pain relief Tablet',
  //     subtitle: 'protect teeth from germes',
  //     price: '210',
  //     rating: '3.8',
  //     detail:'corticosteroids such as Orabase-HCA, Oracort, and Oralone are anti-inflammatory medications that are used to relieve discomfort and redness of the mouth; and for severe pain conditions, narcotic analgesics such as codeine or hydrocodone (Vicodin) may be given.'

  //   },
  //   {
  //     id: 4,
  //     image: Image.resolveAssetSource(product4).uri,
  //     title: 'ToothPaste Tablet',
  //     subtitle: 'Anti Smoking Natural Tablet',
  //     price: '210',
  //     rating: '3.8',
  //     detail:' Colgate Herbal toothpaste is an anti-cavity toothpaste that combines the science of Colgate and natures best herbs to give you and your family healthy teeth. Colgate is Indias Most Trusted oral care brand and is IDA certified. This toothpaste is 100% vegan, sugar-free and gluten-free.'

  //   }
  // ];

  useEffect(() => {
    fetch('https://rest-api-tan-delta.vercel.app/product/getAllproduct')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log(products);

      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  const Care = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('detail1')}>
        {/* , { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle, detail: item.detail } */}
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
   
      if (!item) {
       console.log('item')
      }
      else if(!item.image){
        console.log('ite.image null')
      }
    return (
      <TouchableOpacity onPress={() => navigation.navigate('detail1')}>
        {/* { img: item.image.toString(), title: item.title, price: item.price, subtitle: item.subtitle, detail: item.detail } */}
        {/* {products.map((item, index) => ( */}
       
          <View  style={{ backgroundColor: 'white', height: 240, marginTop: 10, width: 165, marginLeft: 5, borderRadius: 10, margin: 8, borderColor: '#EEEEF0', borderWidth: 1.5 }}>
            <View style={{ backgroundColor: '#EEEEF0', height: 150, borderRadius: 10 }}>
              <Image
               source={{url: item.image}}
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
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '5%' }}>Dental Care</Text>
        </View>
        <Image
          source={require('../../../images/Dental/dental1.png')}
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

          {/* //////////////// */}
          <FlatList
            data={products}
            keyExtractor={(item, index) => String(index)}
            renderItem={ProductDeal}
            numColumns={2}
          />
         
         
          {/* 
          <FlatList
            data={products}
            renderItem={({ item, index }) => (
              <CellRenderer
                key={index} // Use array index as the key
                product={item}
              />
            )}
          /> */}
        </View>
      </View>



    </ScrollView>

  )
}

export default Dental