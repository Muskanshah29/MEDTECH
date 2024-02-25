import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = ({navigation}) => {
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('first');
        }, 2000)
    }, [])
    return (
        <View style={styles.container}>
            
            <ImageBackground
                source={require('../images/spashh.png')}
                 style={{ width: '100%', height: '100%' }}>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})