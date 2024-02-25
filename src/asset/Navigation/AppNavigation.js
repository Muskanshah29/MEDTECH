import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../Screen/SplashScreen'
import FirstScreen from '../Screen/FirstScreen'
import SecondScreen from '../Screen/SecondScreen'
import Welcome from '../Screen/Welcome'
import Login from '../Screen/Login'
import HomeScreen from '../Screen/HomeScreen'
import SignUp from '../Screen/SignUp'
import Wellnes from '../Screen/SubScreen/Category/Wellnes'
import Dental from '../Screen/SubScreen/Category/Dental'
import BottomTabNavig from './BottomTabNavig'
import Homeo from '../Screen/SubScreen/Category/Homeo'
import Detail from '../Screen/SubScreen/ProductDetail/Detail'
import Cart from '../Screen/Cart'
import Confirm from '../Screen/Confirm'
import Eye from '../Screen/SubScreen/Category/Eye'
import Skin from '../Screen/SubScreen/Category/Skin'
import CheckOut from '../Screen/CheckOut'
import Himalaya from '../Screen/SubScreen/Brands/Himalaya'
import ProtinScreen from '../Screen/SubScreen/Brands/ProtinScreen'
import VLCC from '../Screen/SubScreen/Brands/VLCC'
import Address from '../Screen/Address'
import Notification from '../Screen/Notification'
const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Splash'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='first'
                    component={FirstScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='second'
                    component={SecondScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='welcome'
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='signup'
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='home'
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='BottomTabNavig'
                    component={BottomTabNavig}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='wellness'
                    component={Wellnes}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='homeo'
                    component={Homeo}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='detail1'
                    component={Detail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='dental'
                    component={Dental}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='cart'
                    component={Cart}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='eye'
                    component={Eye}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='skin'
                    component={Skin}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='checkout'
                    component={CheckOut}
                    options={{ headerShown: false }}
                />



                <Stack.Screen
                    name='confirm'
                    component={Confirm}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='himalaya'
                    component={Himalaya}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='protin'
                    component={ProtinScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='vlcc'
                    component={VLCC}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='address'
                    component={Address}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='notification'
                    component={Notification}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation