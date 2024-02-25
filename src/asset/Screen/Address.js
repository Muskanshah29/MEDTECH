import { View, Text, TextInput, TouchableOpacity, StyleSheet,ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import ToggleSwitch from 'toggle-switch-react-native';
import LeftArrow from 'react-native-vector-icons/MaterialCommunityIcons'

import { openDatabase } from 'react-native-sqlite-storage'
var db = openDatabase({ name: 'MedTechProject.db' });

const Address = ({ navigation }) => {
    const [name, setEname] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        db.transaction(txn => {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='address'",
                [],
                (tx, res) => {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS address', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS address(address_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), country VARCHAR(20), city VARCHAR(20),phone INT(12),address VARCHAR(25))',
                            []
                        );
                    }
                    else {
                        console.log('Table already exits');
                    }
                }
            );
        });
    }, [])
    const addAddress = () => {
        var isValid = false;
        console.log(name, country, city, phone,address);

        if (name != '' && country != '' && city != '', phone != '',address!='') {
            isValid = true;
        }

        if (isValid == true) {
            
            if (isValid == true) {
                db.transaction(tx => {
                    tx.executeSql(
                        'INSERT INTO address (name, country, city, phone,address) VALUES (?,?,?,?,?)',
                        [name, country, city, phone,address],
                        (tx, results) => {
                            console.log('Results', results);
                            if (results.rowsAffected > 0) // 0>0  false   1>0 true
                            {
                                ToastAndroid.show('Address added successfully', ToastAndroid.SHORT);
                                navigation.navigate('checkout');
                            }
                            else {
                                console.log('fail')
                            }
                        }
                    );
                });
            }
            else {
                Alert.alert('Please enter the all filds');
            }
        }
    }

    return (
        <View style={{ flex: 1, margin: 20 }}>
            <View style={{ flexDirection: 'row', height: 40 }}>
                <TouchableOpacity onPress={() => navigation.navigate('checkout')}>
                    <LeftArrow
                        name='arrow-left'
                        size={28}
                        color='black'
                    //style={{ marginLeft: 10 }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: '700', color: 'black', marginLeft: '8%' }}>Add Address</Text>
            </View>

            <View style={{ marginTop: '5%' }}>
                <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                >Name</Text>
                <TextInput
                    style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                    placeholder='Mrh Raju'
                    onChangeText={(text) => setEname(text)}>
                </TextInput>
            </View>

            <View style={{ marginTop: '5%', flexDirection: 'row' }}>
                <View style={{
                    marginRight: '10%',
                    width: '45%'
                }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                    >Country</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                        placeholder='Bangladesh'
                        onChangeText={(text) => setCountry(text)}>
                    </TextInput>
                </View>

                <View style={{ width: '45%' }}>
                    <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                    >City</Text>
                    <TextInput
                        style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                        placeholder='Sylhet'
                        onChangeText={(text) => setCity(text)}>
                    </TextInput>
                </View>
            </View>


            <View style={{ marginTop: '5%', }}>
                <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                >Phone Number</Text>
                <TextInput
                    style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                    placeholder='+880 1453-987533'
                    onChangeText={(text) => setPhone(text)}>
                </TextInput>
            </View>

            <View style={{ marginTop: '5%', }}>
                <Text style={{ fontSize: 17, color: '#1D1E20', fontWeight: '800' }}
                >Address</Text>
                <TextInput
                    style={{ backgroundColor: '#F5F6FA', marginTop: '3%', borderRadius: 10 }}
                    placeholder='Chhatak, Sunamgonj 12/8AB'
                    onChangeText={(text) => setAddress(text)}>
                </TextInput>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '6%' }}>
                <Text style={{
                    fontSize: 15,
                    color: '#1D1E20',
                    fontWeight: 'bold',
                    marginTop: '5%'
                }}>
                    Save as primary address
                </Text>

                <ToggleSwitch
                    isOn={isEnabled}
                    onColor="green"
                    offColor="#D6D6D6"
                    size="small"
                    onToggle={toggleSwitch}
                />
            </View>
            <View >

                <TouchableOpacity style={styles.bottomButton}  onPress={()=>addAddress()}>
                    <Text style={styles.saveText}>Save Address</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Address
const styles = StyleSheet.create({

    saveText: {
        textAlign: 'center',
        color: '#FEFEFE',
        fontSize: 15,
        fontWeight: '500'
    },
    bottomButton: {
        padding: 12,
        backgroundColor: '#4157FF',
        marginTop: '20%',
        borderRadius: 30,
        justifyContent: 'center'
    }
})