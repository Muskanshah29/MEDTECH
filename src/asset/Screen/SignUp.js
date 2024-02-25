import { View, Text, TextInput, TouchableOpacity, Alert, ToastAndroid, } from 'react-native'
import React, { useEffect, useState } from 'react'
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';

const SignUp = ({ navigation }) => {

    const [name, setEname] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [userError, setUserError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    // useEffect(() => {
    //     db.transaction(txn => {
    //         txn.executeSql(
    //             "SELECT name FROM sqlite_master WHERE type='table' AND name='signup'",
    //             [],
    //             (tx, res) => {
    //                 console.log('item:', res.rows.length);
    //                 if (res.rows.length == 0) {
    //                     txn.executeSql('DROP TABLE IF EXISTS signup', []);
    //                     txn.executeSql(
    //                         'CREATE TABLE IF NOT EXISTS signup(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), mobile INT(12), email VARCHAR(20),password VARCHAR(20))',
    //                         []
    //                     );
    //                 }
    //                 else {
    //                     console.log('Table already exits');
    //                 }
    //             }
    //         );
    //     });
    // }, [])

    
    const  handleRegister = async () => {
        try {
          const response = await fetch('https://rest-api-tan-delta.vercel.app/user/getAlluser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  name, email, mobile, password }),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            // Handle successful login
            console.log('Registration successful');
            Alert.alert('Registration Successful', result.message);
            navigation.navigate('login')
          } else {
            // Handle failed login
            Alert.alert('Registration Failed', result.message);
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };

    const Validation = () => {
        var isValid = true;
        const uname = "[A-Za-z]"
        const mobile1 = "^[(\+\d{1,3}[- ]?)?\d{10}$]"
        if (name == '') {
            setUserError('Username do not empty');
            isValid = false;
        }
        else if (!name.match(uname)) {
            setUserError('not match')
            isValid = false;
        }
        else {
            setUserError('');
        }

        if (password == '') {
            setPasswordError('Password do not empty');
            isValid = false;
        }

        else {
            setPasswordError('');
        }

        if (mobile == '') {
            setMobileError('Mobile number do not empty');
            isValid = false;
        }
        else {
            setMobileError('');
        }

        if (email == '') {
            setEmailError('Email do not empty');
            isValid = false;
        } else {
            setEmailError('');
        }
        if (isValid) {
            handleRegister();
        }
    }

    // const addEmployee = () => {
    //     var isValid = false;
    //     console.log(name, mobile, email, password);

    //     if (name != '' && mobile != '' && email != '', password != '') {
    //         isValid = true;
    //     }

    //     if (isValid == true) {
    //         db.transaction(tx => {
    //             tx.executeSql(
    //                 'INSERT INTO signup (name, mobile, email,password) VALUES (?,?,?,?)',
    //                 [name, mobile, email, password],
    //                 (tx, results) => {
    //                     console.log('Results', results);
    //                     if (results.rowsAffected > 0) // 0>0  false   1>0 true
    //                     {
    //                         ToastAndroid.show('employee added successfully', ToastAndroid.SHORT);
    //                         setEmail('');
    //                         setEname('');
    //                         setPassword('');
    //                         setMobile('');
    //                         navigation.navigate('login');
    //                     }
    //                     else {
    //                         console.log('fail')
    //                     }
    //                 }
    //             );
    //         });
    //     }
    //     // else {
    //     //     Alert.alert('Please enter the all filds');
    //     // }
    // }

    return (
        <View style={{ flex: 1, margin: 25 }}>
            <View style={{ flexDirection: 'row', height: 40, marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavig')}>
                    <LeftArrow

                        name='arrow-left'
                        size={30}
                        color='black'
                    //style={{ marginLeft: 10 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: '700', color: 'black', marginLeft: '8%', alignContent: 'center' }}>Add Your Account</Text>
            </View>
            <View style={{ marginTop: 40 }}>
                <TextInput
                    value={name}
                    style={{ backgroundColor: '#fff', marginTop: '10%', borderRadius: 10, borderWidth: 2, alignItems: 'center', borderColor: 'grey' }}
                    placeholder='Enter  name'
                    onChangeText={(text) => setEname(text)}
                >
                </TextInput>
                <Text style={{ color: 'red', marginLeft: 2 }}>{userError}</Text>


                <TextInput
                    value={mobile}
                    style={{ backgroundColor: '#fff', marginTop: '8%', borderRadius: 10, borderWidth: 2, alignItems: 'center', borderColor: 'grey' }}
                    placeholder='Enter Mobile Number'
                    onChangeText={(text) => setMobile(text)}
                    maxLength={10}
                >
                </TextInput>
                <Text style={{ color: 'red', marginLeft: 2 }}>{mobileError}</Text>


                <TextInput
                    value={email}
                    style={{ backgroundColor: '#fff', marginTop: '8%', borderRadius: 10, borderWidth: 2, alignItems: 'center', borderColor: 'grey' }}
                    placeholder='Enter Email'
                    onChangeText={(text) => setEmail(text)}
                >
                </TextInput>
                <Text style={{ color: 'red', marginLeft: 2 }}>{emailError}</Text>


                <TextInput
                    value={password}
                    style={{ backgroundColor: '#fff', marginTop: '8%', borderRadius: 10, borderWidth: 2, alignItems: 'center', borderColor: 'grey' }}
                    placeholder='Enter Password'
                    onChangeText={(text) => setPassword(text)}
                    maxLength={5}
                >
                </TextInput>
                <Text style={{ color: 'red', marginLeft: 2 }}>{passwordError}</Text>


            </View>

            <TouchableOpacity style={{
                backgroundColor: '#4157FF', padding: 15,
                borderRadius: 40,
                borderColor: 'white',
                borderWidth: 2,
                justifyContent: 'center',
                marginTop: '20%'
            }} onPress={() => Validation()}>

                <Text style={{
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontSize: 17,
                }}>
                    Add Account
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp
