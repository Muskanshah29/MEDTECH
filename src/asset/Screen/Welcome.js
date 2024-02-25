import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Facebook from 'react-native-vector-icons/Entypo'
const Welcome = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#f7f7f7', flex: 1, }}>
            <Image
                source={require('../images/WelcomeImage.png')}
                style={{ width: '75%', height: '40%', resizeMode: 'contain', justifyContent: 'center', alignSelf: 'center', marginTop: '5%' }}
            />

            <View style={{ width: '75%', height: '18%', alignSelf: 'center', marginTop: '2%' }}>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '700' }}>Welcome To MedTech </Text>
                </View>
                <View style={{ alignSelf: 'center', marginTop: '5%' }}>
                    <Text style={{ color: 'grey', fontSize: 14, }}>         Do you want some help</Text>
                    <Text style={{ color: 'grey', fontSize: 14, }}>with your health to get better life?
                    </Text>
                </View>
            </View>

            <TouchableOpacity style={{ alignItems: 'center', height: '10%' }}>
                <View style={{ backgroundColor: '#4157FF', alignContent: 'center', height: '70%', width: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>SIGN UP WITH EMAIL</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center', height: '10%' }}>
                <View style={{ backgroundColor: '#f7f7f7', alignContent: 'center', height: '70%', width: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, borderColor: 'grey', borderWidth: 1, flexDirection: 'row' }}>
                    <Facebook
                        name='facebook-with-circle'
                        size={32}
                        color='#4157FF'
                    />
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>  CONTINUE WITH FACEBOOK</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center', height: '10%' }}>
                <View style={{ backgroundColor: '#f7f7f7', alignContent: 'center', height: '70%', width: '85%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, borderColor: 'grey', borderWidth: 1, flexDirection: 'row' }}>
                    <Image
                        source={require('../images/google.png')}
                        style={{ width: 25, height: 25 }}
                    />
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: '500' }}>  CONTINUE WITH GOOGLE</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 15 }} onPress={()=>navigation.navigate('login')}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome