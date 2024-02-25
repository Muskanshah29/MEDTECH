import { View, Text, Image } from 'react-native'
import React from 'react'

const SecondScreen = ({navigation}) => {
  return (
    <View style={{  backgroundColor:'#f7f7f7',flex: 1,}}>
      <Image
        source={require('../images/second.png')}
        style={{  width: '75%', height: '40%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: '30%' }}
      />

      <View style={{width:'75%',height:'22%',alignSelf: 'center',marginTop:'5%'}}>
        <View style={{alignSelf:'center'}}>
        <Text style={{color:'black',fontSize:15,fontWeight:'700'}}>Online Medical & </Text>
        <Text style={{color:'black',fontSize:15,fontWeight:'700'}}>      HealthCare </Text>
        </View>
        <View style={{alignSelf:'center',marginTop:'5%'}}>
        <Text style={{color:'grey',fontSize:14,}}>    A Wise Physician said, </Text>
        <Text style={{color:'grey',fontSize:14,}}>   “The best medicine for </Text>
        <Text style={{color:'grey',fontSize:14,}}>          Humans is LOVE."</Text>
        </View>
      </View>

      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',margin:'5%' ,top:'20%'}}>
        <Text style={{color:'grey',fontSize:15, fontWeight:'500'}}>Skip</Text>
        <Text style={{color:'#4157FF',fontSize:15, fontWeight:'500'}} onPress={()=>navigation.navigate('welcome')}>Next</Text>
      </View>
    </View>
  )
}

export default SecondScreen