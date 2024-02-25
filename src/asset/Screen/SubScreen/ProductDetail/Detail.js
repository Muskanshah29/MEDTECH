import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, ToastAndroid, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Bell from "react-native-vector-icons/Fontisto"
import Bag from "react-native-vector-icons/Feather"
import Add from "react-native-vector-icons/Octicons"
import Star from "react-native-vector-icons/Entypo"
import { useRoute } from "@react-navigation/native"
import { openDatabase } from 'react-native-sqlite-storage'

var db = openDatabase({ name: 'MedTechProject.db' });
console.log(db);
const Detail1 = ({ navigation }) => {
  const route = useRoute();
  const [imgPath, setImagePath] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState('');
  const [detail, setDetail] = useState('');


  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='cart1'",
        [],
        (tx, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS cart1', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS cart1(prod_id INTEGER PRIMARY KEY AUTOINCREMENT, prod_title VARCHAR(50), prod_price INT(10), prod_subtitle VARCHAR(50), prod_image VARCHAR(50))',
              []
            );
          }
          else {
            console.log('Table cart1 already exits111');
          }
        }
      );
    });
  }, [])

  useEffect(() => {
    const image1 = route.params.img;
    const title1 = route.params.title;
    const price1 = route.params.price;
    const subtitle1 = route.params.subtitle;
    const detail1 = route.params.detail;

    //console.log('routes.param.img:', image1);
    setImagePath(image1)
    setTitle(title1)
    setSubtitle(subtitle1)
    setPrice(price1)
    setDetail(detail1)

  }, [])

  ////////////////////////////////////////////

  const addCart = () => {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO cart1 (prod_title, prod_price, prod_subtitle,prod_image) VALUES (?,?,?,?)',
          [title, price, subtitle, imgPath],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              navigation.navigate('Cart')
            } else console.log('cant add');
          }
        );
      });
  }
///////////////////////////
var price1 =price*2;
var price2 =price*3;


  return (
    <ScrollView style={{ flex: 1, }}>
      <View style={{ margin: 16, }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('dental')}>
            <LeftArrow
              name='arrow-left'
              size={28}
              color='black' />
          </TouchableOpacity>

          <TouchableOpacity>
            <Bell
              name='bell'
              color="black"
              size={24}
              style={{ alignSelf: 'center', marginLeft: '75%' }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Bag
              name='shopping-bag'
              color="black"
              size={24} />
          </TouchableOpacity>

        </View>
        <Text style={{ fontSize: 17, color: 'black', marginTop: 20, fontWeight: 'bold' }}>{title}</Text>
        <Text>{subtitle}</Text>

        <View style={{ backgroundColor: '#F5F7FA', height: 200, marginTop: 20 }}>
          <Image
            source={{ uri: imgPath }}
            style={{ height: 200, width: 150, alignSelf: 'center', }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <View>
            <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>{price}/-</Text>
            <Text style={{ fontWeight: '500', fontSize: 12 }}>price </Text>
          </View>
          <View style={{ alignSelf: 'center', alignItems: 'center', }} >
            <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => addCart()}>
              <Add
                name='diff-added'
                color="#006AFF"
                size={20} />

              <Text style={{ color: '#006AFF', fontSize: 12 }} > Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'grey', marginTop: 20 }} />
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', marginTop: 20 }}>Pakage size</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={styles.box}>
            <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 16 }}>{price}/-</Text>
            <Text style={{ color: 'orange', fontSize: 12 }}>100 pellets</Text>
          </View>
          <View style={styles.box1}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{price1}/-</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>250 pellets</Text>
          </View>
          <View style={styles.box1}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{price2}/-</Text>
            <Text style={{ color: 'black', fontSize: 12 }}>500 pellets</Text>
          </View>
        </View>
        <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', marginTop: 20 }}>Product Detail</Text>
        <View style={{ width: 361, height: 200, marginTop: 10, }}>
          <Text>
            {detail}
          </Text>
        </View>

        <Text style={{ color: 'black', fontSize: 16, fontWeight: '500', marginTop: 5 }}>Rating and Reviews</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <View style={{ marginTop: 15 }}>
            <Text>923 Ratings</Text>
            <Text>and 257 Reviews </Text>
          </View>

          <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '500' }}>4.4 </Text>
            <Star
              name='star'
              color="#FFC000"
              size={35} />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          
          
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'grey', marginTop: 20 }} />
        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Erric Hoffman</Text>
            <Text>05- oct 2020</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Star
              name='star'
              color="#FFC000"
              size={18} />
            <Text>4.2</Text>
          </View>
          <View style={{ width: 361, height: 100, marginTop: 10, }}>
            <Text>
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ut nisi odio. Nulla facilisi.
            </Text>
          </View>

        </View>
        <TouchableOpacity style={{ backgroundColor: '#4157FF', width: 320, height: 50, justifyContent: 'center', alignSelf: 'center', borderRadius: 25 }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Detail1

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    width: 115,
    height: 100,
    marginTop: 18,
    justifyContent: 'center',
    paddingLeft: 10,
    borderColor: 'orange',
    borderWidth: 1.5,
    borderRadius: 15,
    backgroundColor: '#F5DEB3'
  },
  box1: {
    backgroundColor: 'white',
    width: 115,
    height: 100,
    marginTop: 18,
    justifyContent: 'center',
    paddingLeft: 10,

    borderRadius: 15,
    backgroundColor: '#F5F7FA'
  }
})