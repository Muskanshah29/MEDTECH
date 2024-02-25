import { View, Text, ScrollView, TouchableOpacity, Image, FlatList ,ToastAndroid} from 'react-native'
import React, { useState, useEffect } from 'react'
import { openDatabase } from 'react-native-sqlite-storage'
import { useIsFocused } from '@react-navigation/native';

import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import { RadioButton } from 'react-native-paper';
import Add from "react-native-vector-icons/Octicons"
import Cross from "react-native-vector-icons/Entypo"
import { useRoute } from "@react-navigation/native"

var db = openDatabase({ name: 'MedTechProject.db' });

const CheckOut = ({ navigation }) => {
  const route = useRoute();
  const [selectedValue, setSelectedValue] = useState('option1');
  const [prodList, setprodList] = useState([])
  const [price, setPrice] = useState('');
 // const [title, setTitle] = useState('');
 const [checked, setChecked] = React.useState('first');

  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
  }, [isFocused])

  useEffect(()=>{
    const price1 = route.params.pricelist1;
    setPrice(price1)
    //setTitle(title1)
  },[])

  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM address', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          console.log(results.rows.item(i))

        }
        setprodList(temp);
      });
    });
  };


  const deleteProd = (id) => {

    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM address where address_id=?',
        [id],
        (tx, results) => {

          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            ToastAndroid.show('record deleted successfully', ToastAndroid.SHORT);
            getData();
          }
        }

      );
    });
  }

  Data = ({ item }) => {
    return (
      <View style={{ width: '100%', height: 120, borderWidth: 1, borderRadius: 10, borderColor: 'grey', marginTop: 20, flexDirection: 'row', }}>
        <View style={{ width: 50 }}>
          <RadioButton.Android
            value="option1"
            status={selectedValue === 'option1' ?
              'checked' : 'unchecked'}
            onPress={() => setSelectedValue('option1')}
            color="#007BFF"
            fontSize='40%' />
        </View>
        <View style={{ width: '75%' }}>
          <Text style={{ marginTop: 5, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ marginTop: 5 }}>{item.phone}</Text>
          <Text style={{ marginTop: 5 }}>{item.address}  {item.country}</Text>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 1 }} onPress={() => deleteProd(item.address_id)}>
            <Cross
              name='cross'
              size={28}
              color='black'
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  
  return (
    <ScrollView style={{ margin: 15 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', height: 40 }}>
          <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavig')}>
            <LeftArrow
              name='arrow-left'
              size={28}
              color='black'
            //style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '8%' }}>CheckOut</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems: 'center' }}>
          <View>
            <Text>price</Text>
          </View>
          <View style={{ alignSelf: 'center', alignItems: 'center', }} >
            <Text>Total</Text>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{price-28-15}/-</Text>
          </View>
        </View>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginTop: 15 }}>Delivery Address</Text>
        <View>
          <FlatList
            data={prodList}
            renderItem={Data}
            keyExtractor={(item) => item.Employee}
          //ListEmptyComponent={Empty}
          />
        </View>
        <View style={{ alignSelf: 'flex-end', alignItems: 'center', marginTop: 20 }} >
          <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate('address')}>
            <Add
              name='diff-added'
              color="#006AFF"
              size={20} />

            <Text style={{ color: '#006AFF', fontSize: 12 }} > Add Address</Text>
          </TouchableOpacity>

        </View>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Payment Method</Text>

        <View>
          <View style={{ width: '100%', height: 80, marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: '18%', height: 60, borderColor: 'grey', borderWidth: 1, borderRadius: 20 }}>
              <Image
                source={require('../images/credit.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 20 }}
              />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ marginLeft: 20, width: '60%' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Credit Card</Text>
              </View>
              <View>
                <RadioButton.Android
                // value="option1"
                // status={selectedValue === 'option1' ?
                //   'checked' : 'unchecked'}
                // onPress={() => setSelectedValue('option1')}
                 color="#007BFF"
                // fontSize='40%' 
                value="first"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
                />
              </View>
            </View>
          </View>
          {/* ////////////////////////////////////// */}
          <View style={{ width: '100%', height: 80, marginTop: 8, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: '18%', height: 60, borderColor: 'grey', borderWidth: 1, borderRadius: 20 }}>
              <Image
                source={require('../images/paypal.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 20 }}
              />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ marginLeft: 20, width: '60%' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Paypal</Text>
              </View>
              <View>
                <RadioButton.Android
                // value="option1"
                // status={selectedValue === 'option1' ?
                //   'checked' : 'unchecked'}
                // onPress={() => setSelectedValue('option1')}
                 color="#007BFF"
                // fontSize='40%' 
                value="sec"
                status={ checked === 'sec' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('sec')}
                />
              </View>
            </View>
          </View>


          {/* ////////////////////////////////////// */}
          <View style={{ width: '100%', height: 80, marginTop: 8, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: '18%', height: 60, borderColor: 'grey', borderWidth: 1, borderRadius: 20 }}>
              <Image
                source={require('../images/google.png')}
                style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 20 }}
              />
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <View style={{ marginLeft: 20, width: '60%' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Google Pay</Text>
              </View>
              <View>
                <RadioButton.Android
                // value="option1"
                // status={selectedValue === 'option1' ?
                //   'checked' : 'unchecked'}
                // onPress={() => setSelectedValue('option1')}
                 color="#007BFF"
                // fontSize='40%'
                value="third"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')} 
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{ backgroundColor: '#4157FF', width: '100%', height: 50, justifyContent: 'center', alignSelf: 'center', borderRadius: 25, marginTop: 40, marginBottom: 50 }} onPress={() => navigation.navigate('confirm')}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: '600' }}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default CheckOut