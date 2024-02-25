import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../Screen/HomeScreen';
import Cart from '../Screen/Cart';
import Notification from '../Screen/Notification';
import Profile from '../Screen/Profile';


import Home from "react-native-vector-icons/AntDesign";
import Cart1 from "react-native-vector-icons/Feather";
import Profile1 from "react-native-vector-icons/MaterialCommunityIcons";
import Bell from "react-native-vector-icons/Fontisto"

const Tab = createBottomTabNavigator();
const BottomTabNavig = () => {
    return (
        
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        //borderRadius: 15,
                        height: '8%',
                        ...styles.shadow

                    }
                }}>
                <Tab.Screen
                    name="HomeScren"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {focused ?
                                    <Home
                                        name='home'
                                        color='#3f55f8'
                                        size={30}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    />

                                    :

                                    <Home
                                        name='home'
                                        color="grey"
                                        size={30}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    />
                                }
                            </View>
                        )
                    }}
                />

                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {focused ?

                                    <Bell
                                        name='bell'
                                        color='#3f55f8'
                                        size={28}
                                        style={{ alignSelf: 'center', marginTop: 2 }} />

                                    :

                                    <Bell
                                        name='bell'
                                        color="grey"
                                        size={28}
                                        style={{ alignSelf: 'center', marginTop: 2 }} />
                                }

                            </View>
                        )
                    }}
                />


                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {focused ?
                                    <Cart1
                                        name='shopping-bag'
                                        color='#3f55f8'
                                        size={27}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    /> :
                                    <Cart1
                                        name='shopping-bag'
                                        color="grey"
                                        size={27}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    />
                                }
                            </View>
                        )
                    }}
                />

                <Tab.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <View>
                                {focused ?
                                    <Profile1
                                        name='account'
                                        color='#3f55f8'
                                        size={30}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    /> :
                                    <Profile1
                                        name='account'
                                        color="grey"
                                        size={30}
                                        style={{ alignSelf: 'center', marginTop: 2 }}
                                    />
                                }
                            </View>
                        )
                    }}
                />
            </Tab.Navigator>
       

    )
}

export default BottomTabNavig
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',

        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})