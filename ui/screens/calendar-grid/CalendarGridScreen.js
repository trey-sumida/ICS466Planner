import React from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import CalendarGridView from '../../components/calendar-grid/CalendarGridView'


export default function CalendarGridScreen( {navigation, route} ) {

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            //height: "100%", 
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

    const addEvent = () => {
        //console.log("Adding Event");
        navigation.navigate("Add Event", { title: "Add Event" });
    }

    return (
        <View style={styles.view}>
            <CalendarGridView />

            <TouchableOpacity
                style={styles.button}
                onPress={addEvent}
            >
                <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
        </View>
    )
}
