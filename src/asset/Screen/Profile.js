import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
      <View style={{ margin: 16, }}>
        <Text style={{ color: 'black', fontWeight: '600', fontSize: 18 }}>My Profile</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
          <Image
            source={require('../images/manImg.png')}
            style={{ width: 70, height: 70, borderRadius: 70 / 2, borderColor: 'grey', borderWidth: 1 }} />
          <View>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '800' }}>   Hi,Ben Cline</Text>
            <Text>   Welcome to MedTech</Text>
          </View>
        </View>

        {/* ))))))))))00 */}
        <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
            <Image
              source={require('../images/profile_icons/one.png')}
              style={{ width: 40, height: 40, }} />
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ color: 'black', fontSize: 15, }}> My Cart</Text>
              <Image
                source={require('../images/profile_icons/left.png')}
                style={{ width: 30, height: 30, marginLeft: 200 }} />
            </View>
          </View>
        </TouchableOpacity>


        {/* 777777777777 */}
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Image
            source={require('../images/profile_icons/two.png')}
            style={{ width: 40, height: 40, }} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 15, }}>   My Consults</Text>
            <Image
              source={require('../images/profile_icons/left.png')}
              style={{ width: 30, height: 30, marginLeft: 143 }} />
          </View>
        </View> */}


        {/* 777777777777 */}
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Image
            source={require('../images/profile_icons/three.png')}
            style={{ width: 40, height: 40, }} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 15, }}>   My Order</Text>
            <Image
              source={require('../images/profile_icons/left.png')}
              style={{ width: 30, height: 30, marginLeft:172 }} />
          </View>
        </View> */}

        {/* 777777777777 */}
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Image
            source={require('../images/profile_icons/four.png')}
            style={{ width: 40, height: 40, }} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 15, }}>   Billing</Text>
            <Image
              source={require('../images/profile_icons/left.png')}
              style={{ width: 30, height: 30, marginLeft: 200 }} />
          </View>
        </View> */}

        {/* 777777777777 */}
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Image
            source={require('../images/profile_icons/five.png')}
            style={{ width: 40, height: 40, }} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 15, }}>   Faq</Text>
            <Image
              source={require('../images/profile_icons/left.png')}
              style={{ width: 30, height: 30, marginLeft: 220 }} />
          </View>
        </View> */}

        {/* 777777777777 */}
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Image
            source={require('../images/profile_icons/six.png')}
            style={{ width: 40, height: 40, }} />
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 15, }}>   Setting</Text>
            <Image
              source={require('../images/profile_icons/left.png')}
              style={{ width: 30, height: 30, marginLeft: 190 }} />
          </View>
        </View> */}

      </View>
    </View>
  )
}

export default Profile