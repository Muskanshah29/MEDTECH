import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Confirm = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#f7f7f7', flex: 1, }}>
      <Image
        source={require('../images/confirm.png')}
        style={{ width: '75%', height: '40%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: '20%' }}
      />
      <View style={{ width: '75%', height: '22%', alignSelf: 'center', marginTop: '5%' }}>
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ color: 'black', fontSize: 25, fontWeight: '500' }}>Thank You </Text>
          {/* <Text style={{color:'black',fontSize:15,fontWeight:'700'}}>  </Text> */}
        </View>
        <View style={{ alignSelf: 'center', marginTop: '10%' }}>
          <Text style={{ color: 'grey', fontSize: 14, }}>Your Order will be delivered with</Text>
          <Text style={{ color: 'grey', fontSize: 14, }}>invoice #9ds69hs. You can track the delivery in the order section." </Text>
          {/* <Text style={{color:'grey',fontSize:14,}}>in the order section."</Text> */}
        </View>
      </View>

      <TouchableOpacity style={{ alignItems: 'center', height: '8%', marginTop: '20%' }} >
        <View style={{ backgroundColor: '#4157FF', alignContent: 'center', height: '80%', width: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }} >Continue Order</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Confirm