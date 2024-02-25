import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'


const Notification = ({ navigation }) => {
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '5%' }}>Notification</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', color: '#1987FB', marginLeft: '28%' }}>Clear All</Text>

          </View>
        </View>
        <View style={{ marginTop: 60, flexDirection: 'row', justifyContent: 'center', }}>

          <Image
            source={require('../images/notification/f1.png')}
            style={{ width: '6%', height: 30, top: 5 }}
          />
          <View style={{ width: 320, marginLeft: 10 }}>
            <Text style={{ fontSize: 13, color: 'black', fontWeight: 500 }}>We know that — for children AND adults — learning is most effective when it is</Text>
            <Text style={{ fontSize: 12, color: 'black', }}>Aug 12, 2020 at 12:08 PM</Text>
          </View>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: '#D8D8D8', marginTop: 20 }} />



        {/*  */}

        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', }}>
          <Image
            source={require('../images/notification/f2.png')}
            style={{ width: '6%', height: 23, top: 5 }}
          />
          <View style={{ width: 320, marginLeft: 10 }}>
            <Text style={{ fontSize: 13, color: 'black', fontWeight: 500 }}>The future of professional learning is immersive, communal experiences for </Text>
            <Text style={{ fontSize: 12, color: 'black', }}>Aug 12, 2020 at 12:08 PM</Text>
          </View>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: '#D8D8D8', marginTop: 20 }} />


        {/*  */}

        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', }}>
          <Image
            source={require('../images/notification/f3.png')}
            style={{ width: '6%', height: 25, top: 5 }}
          />
          <View style={{ width: 320, marginLeft: 10 }}>
            <Text style={{ fontSize: 13, color: 'black', fontWeight: 500 }}>With this in mind, Global Online Academy created the Blended Learning Design  </Text>
            <Text style={{ fontSize: 12, color: 'black', }}>Aug 12, 2020 at 12:08 PM</Text>
          </View>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: '#D8D8D8', marginTop: 20 }} />

        {/*  */}

        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', }}>
          <Image
            source={require('../images/notification/f3.png')}
            style={{ width: '6%', height: 25, top: 5 }}
          />
          <View style={{ width: 320, marginLeft: 10 }}>
            <Text style={{ fontSize: 13, color: 'black', fontWeight: 500 }}>Technology should serve, not drive, pedagogy. Schools often discuss  </Text>
            <Text style={{ fontSize: 12, color: 'black', }}>Aug 12, 2020 at 12:08 PM</Text>
          </View>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: '#D8D8D8', marginTop: 20 }} />


      </View>

    </ScrollView>
  )
}

export default Notification