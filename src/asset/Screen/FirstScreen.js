import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FirstScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#f7f7f7', flex: 1, }}>
      <Image
        source={require('../images/first.png')}
        style={{ width: '75%', height: '40%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: '30%' }}
      />

      <View style={{ width: '75%', height: '22%', alignSelf: 'center', marginTop: '5%' }}>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>  View and buy </Text>
          <Text style={{ color: 'black', fontSize: 15, fontWeight: '700' }}>Medicine Online </Text>
        </View>
        <View style={{ alignSelf: 'center', marginTop: '5%' }}>
          <Text style={{ color: 'grey', fontSize: 14, }}>          Wherever the art of </Text>
          <Text style={{ color: 'grey', fontSize: 14, }}>medicine is loved, there is also</Text>
          <Text style={{ color: 'grey', fontSize: 14, }}>          a love for humanity.</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', margin: '5%', top: '20%' }}>
        <Text style={{ color: 'grey', fontSize: 15, fontWeight: '500' }}>Skip</Text>
        <TouchableOpacity onpress={() => navigation.navigate('second')}>
          <Text style={{ color: '#4157FF', fontSize: 15, fontWeight: '500' }} onPress={()=>navigation.navigate('second')}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FirstScreen