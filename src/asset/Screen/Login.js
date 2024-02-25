import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import Lock from 'react-native-vector-icons/Octicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TextInput } from 'react-native-paper'

//import { openDatabase } from 'react-native-sqlite-storage';
import { useIsFocused } from '@react-navigation/native';

const Login = ({ navigation }) => {
    //const db = openDatabase({ name: 'MedTechProject.db' });
    const [name, setEname] = useState('');
    const [password, setPassword] = useState('');
    const [name1, setEname1] = useState('');
    const [password1, setPassword1] = useState('');
    const [userError, setUserError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // useEffect(() => {
    //     getData();
    // }, [])


    // const getData = () => {
    //     db.transaction(tx => {
    //         tx.executeSql('SELECT name,password FROM signup', [], (tx, results) => {
    //             var temp = [];
    //             for (let i = 0; i < results.rows.length; ++i) {
    //                 temp.push(results.rows.item(i));
    //                 //console.log(results.rows.item(i))
    //                 var username = results.rows.item(i).name;
    //                 var Password = results.rows.item(i).password;
    //                 setEname(username);
    //                 setPassword(Password);
    //             }

    //         })
    //     })
    // }


    const Validation = () => {
        var isValid = true;
        if (name1 == '') {
            setUserError('Username do not empty');
            isValid = false;
        } else {
            setUserError('');
        }

        if (password1 == '') {
            setPasswordError('Password do not empty');
            isValid = false;
        } else {
            setPasswordError('');
        }
        if (isValid) {
            fetchData();
            console.log('call')
            // navigation.navigate('')
        }
    }



    // useEffect(() => {
    //     fetchData();
    // }, []);

    const fetchData = async () => {
        const apiUrl = 'https://rest-api-tan-delta.vercel.app/user/getAlluser';

        // Sending a GET request to the API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Retrieved data from the API
                console.log('Data from API:', data);

                // Retrieve entered data (assuming email and password)
                const enteredEmail = name1
                const enteredPassword = password1

                // Match entered data with API data
                const matchedUser = data.find(id => id.name === enteredEmail && id.password === enteredPassword);

                // Handle matching
                if (matchedUser) {
                    // Match found, login successful
                    console.log('Login successful');
                    Alert.alert('Login Successful');
                    navigation.navigate('BottomTabNavig')
                } else {
                    // No match found, login failed
                    Alert.alert('please enter registered usename & password');
                    console.log('Login failed');
                }
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('https://rest-api-mu-nine.vercel.app/user/getAlluser');
    //         const jsonData = await response.json();
    //         const namesArray = jsonData.map(item => item.name); // Assuming the API response is an array of objects with a "name" key
    //         const passArray = jsonData.map(item => item.password); // Assuming the API response is an array of objects with a "name" key

    //         console.log(namesArray);
    //         console.log(passArray);

    //         setEname(namesArray);
    //         setPassword(passArray);

    //         console.log('callllll')

    //     } catch (error) {
    //         console.error('Error:', error);

    //     }
    // }

    // const check = () => {
    //     console.log(name1)
    //     if ((name.filter(item => item.name == name1)) && (password.filter(item => item.password == password1))) {
    //         Alert.alert('Login Successful');
    //         navigation.navigate('BottomTabNavig')
    //     }
    //     else {
    //         Alert.alert('username & password not match ');

    //     }
    // }
    return (

        <KeyboardAwareScrollView
            behavior="padding"
            style={{ flex: 1, backgroundColor: '#f7f7f7', }}>
            <View style={{ margin: 20, backgroundColor: '#f7f7f7', flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
                    <LeftArrow
                        name='arrow-left'
                        size={30}
                        color='black'
                    />
                </TouchableOpacity>
                <View style={{ margin: 15, flex: 1, marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: 'black' }}>Welcome Back!</Text>

                    <View style={{ flexDirection: 'row', marginTop: '25%', backgroundColor: '#f7f7f7', alignItems: 'center', height: 45, justifyContent: 'center' }}>
                        <LeftArrow
                            name='account'
                            size={30}
                            color='black'
                            style={{ backgroundColor: '#f7f7f7', marginLeft: 5, }}
                        />

                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Username'
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => setEname1(text)}

                            style={{ height: 45, backgroundColor: '#f7f7f7', outline: 'none', width: 280, marginLeft: 2, }}

                        />

                    </View>
                    <Text style={{ color: 'red', marginLeft: 10 }}>{userError}</Text>



                    <View style={{ flexDirection: 'row', marginTop: '15%', backgroundColor: '#f7f7f7', alignItems: 'center', height: 45, justifyContent: 'center' }}>
                        <Lock
                            name='lock'
                            size={30}
                            color='black'
                            style={{ backgroundColor: '#f7f7f7', marginLeft: 5, resizeMode: 'stretch' }}
                        />

                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='Password'
                            placeholderTextColor={'grey'}
                            onChangeText={(text) => setPassword1(text)}
                            style={{ height: 45, backgroundColor: '#f7f7f7', outline: 'none', width: 280, marginLeft: 2, borderBottomWidth: 0 }}
                            secureTextEntry
                        />

                    </View>
                    <Text style={{ color: 'red', marginLeft: 10 }}>{passwordError}</Text>


                    <TouchableOpacity style={{ alignItems: 'center', height: '8%', marginTop: '20%' }} onPress={() => Validation()}>
                        {/* navigation.navigate('BottomTabNavig')} */}
                        <View style={{ backgroundColor: '#4157FF', alignContent: 'center', height: '150%', width: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 25 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }} >Login</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ height: '5%', marginTop: '15%' }} onPress={() => navigation.navigate('signup')}>
                        <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 13 }}>Don’t have an account? Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    fieldStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#E7E8EA',
        color: '#1D1E20',
    },
    labelText: {
        fontSize: 15,
        color: '#8F959E',
        marginTop: '5%'
    },
});


