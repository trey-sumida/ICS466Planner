import React from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Calendar } from 'react-native-calendars';


export default function CalendarGridView({ navigation }) {
    const styles = StyleSheet.create({
        view: {
            flex: 1,
            height: "100%",
        },
        scrollView: {
        },
        button: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: '100%',
        },
        buttonText: {
            fontSize: 20
        },
    })

    return (

        <ScrollView style={styles.view}>

        <Calendar/>
		
		</ScrollView>
	)
}