import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const SplashScreen = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace("mainTabs");
    }, 3000);

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#64b9ee',
        },
        image: {
            height: '15%',
            width: '90%',
        }
    })

    return (
        <View style={styles.view}>
            <Image style={styles.image} source={require('../../assets/planote.png')}/>
        </View>
    )
}

export default SplashScreen;
