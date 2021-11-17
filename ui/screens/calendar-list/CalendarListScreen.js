import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
//import AddEvent from '../../components/calendar-list/AddEvent';
import CalendarScrollView from '../../components/calendar-list/CalendarScrollView'

export default function CalendarListScreen( {navigation} ) {

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            height: "100%"
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
    });

    const addEvent = () => {
        console.log("Adding Event");
        navigation.navigate("Add Event", { title: "Add Event" });
    }

    return (
        <View style={{ flex: 1 }}>
            <CalendarScrollView />
            
            <TouchableOpacity
                style={styles.button}
                onPress={addEvent}
            >
                <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
        </View>
    )
}
