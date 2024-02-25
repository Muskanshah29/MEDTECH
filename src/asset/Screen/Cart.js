import { StyleSheet, Text, View, FlatList, TouchableOpacity, ToastAndroid, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { openDatabase } from 'react-native-sqlite-storage'
import { useIsFocused } from '@react-navigation/native';
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Add from "react-native-vector-icons/Octicons"
import Cross from "react-native-vector-icons/Entypo"
import Add1 from "react-native-vector-icons/MaterialIcons"
import Inc from './Component/Inc';
import { counter } from './Component/Inc';
import Dec from './Component/Dec';
import Id from './Component/Id';


const Cart = ({ navigation, }) => {

  //const [counter, setCounter] = useState(1);
  

  var db = openDatabase({ name: 'MedTechProject.db' });
  const [prodList, setprodList] = useState([])
  const [pricelist, setPricelist] = useState([])
  const [pricelist1, setPricelist1] = useState([])

  var totalcartPrice = 0;


  const [counter, setCounter] = useState(1);


  const handleClick1 = () => {
    console.log("Inc:" + counter);
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };


  const isFocused = useIsFocused();
  useEffect(() => {
    getData();
  }, [isFocused, counter])

  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM cart1', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          console.log(results.rows.item(i))

        }
        setprodList(temp);
      });
    });
  };

  const Empty = ({ }) => {
    return (

      <Text style={{ alignSelf: 'center', marginTop: '80%', fontSize: 20, color: 'purple' }} >
        No Data Found
      </Text>
    );
  };

  const deleteProd = (id) => {

    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM cart1 where prod_id=?',
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



  const ProdInfo = ({ item }) => {
    totalcartPrice += item.prod_price;
    setPricelist(totalcartPrice)
    setPricelist1(pricelist*counter)

    return (
      //<TouchableOpacity onPress={()=>navigation.navigate('checkout',{price:item.prod_price,title:item.prod_title})}>
        <View style={{ marginTop: 18, width: '100%', height: 140, flexDirection: 'row', borderBlockColor: 'black', borderRadius: 1, borderWidth: 1, paddingTop: 2, paddingBottom: 4 }}>
          <View style={{ width: '25%' }}>
            <Image
              source={{ uri: item.prod_image }}
              style={{ height: 90, width: 80, }} />
          </View>
          <View style={{ width: '45%' }}>
            <View style={{}}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#1D1E20' }}>{item.prod_title}</Text>
              <Text style={{ fontSize: 10, fontWeight: '500', color: '#1D1E20' }}>{item.prod_subtitle}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 15, fontWeight: '900', color: '#1D1E20' }}>{item.prod_price}/-</Text>
            </View>
          </View>
          <View style={{ width: '30%', }}>
            <View style={{ alignItems: 'flex-end' }}>
              <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 30 / 2, borderWidth: 1 }} onPress={() => deleteProd(item.prod_id)}>
                <Cross
                  name='cross'
                  size={28}
                  color='black'
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: '30%', backgroundColor: '#F2F4FF', alignItems: 'center' }}>
              <Inc onPress1={() => setCounter(counter + 1)}/>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <Text style={{ color: 'black'}}>{counter}</Text>
            </View>
            <Dec onPress2={() => counter >= 2?setCounter(counter - 1):1}/>
              {/* <Id onPress1={() => setCounter(counter + 1)} /> */}
            </View>
          </View>
        </View>
      //</TouchableOpacity>
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
          <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '8%' }}>Your cart</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <View>
            <Text>two item in your Cart</Text>
          </View>
          <View style={{ alignSelf: 'center', alignItems: 'center', }} >
            <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => addCart()}>
              <Add
                name='diff-added'
                color="#006AFF"
                size={20} />

              <Text style={{ color: '#006AFF', fontSize: 12 }} > Add more</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <FlatList
            data={prodList}
            renderItem={ProdInfo}
            keyExtractor={(item) => item.Employee}
            ListEmptyComponent={Empty}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Payment Summary</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text>Order Total</Text>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>{pricelist1}/-</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text>Items Discount</Text>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>- 28/-</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text>Coupon Discount</Text>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>-15/-</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <Text>Shipping</Text>
            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Free</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <Text style={{ color: 'black', fontSize: 18, }}>Total</Text>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>{pricelist1-28-15}/-</Text>
          </View>
        </View>

        <TouchableOpacity style={{ backgroundColor: '#4157FF', width: '100%', height: 50, justifyContent: 'center', alignSelf: 'center', borderRadius: 25, marginTop: 40, marginBottom: 50 }} onPress={()=>navigation.navigate('checkout',{pricelist1})}>
          <Text style={{ textAlign: 'center', color: 'white', fontWeight: '600' }}>Place Order {pricelist1-28-15}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default Cart

const styles = StyleSheet.create({
  Container: {
    marginTop: '10%',
    backgroundColor: 'pink',
    borderRadius: 20,
    padding: '8%',
    justifyContent: 'center',
    margin: '6%'
  },

})