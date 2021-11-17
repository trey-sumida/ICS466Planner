import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
//import AsyncStorage from '@react-native-community/async-storage';

export default function AddEvent({ route, title, color, time, location, description }) {

    const styles = StyleSheet.create({
        buttonConfirm: {
            alignItems: "center",
            padding: 10,
            width: '75%',
            backgroundColor: "#00FFAA",
        },
        buttonText: {
            fontSize: 18
        },
        parent: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10
        },
        titleText: {
            fontSize: 30,
            paddingBottom: 10
        },
        eventText: {
            fontSize: 18
        },
        mainLayout: {
            padding: 10,
            marginBottom: 0,
            backgroundColor: "#FFF",
            flex: 1, 
        },
        popUpLayout: {
            padding: 10,
            marginBottom: 0,
            backgroundColor: "#FFF"
        },
        shadow: {
            elevation: 5,
        },
        scrollView: {
        },

    })

    const addEvent = () => {
        console.log("Adding an event");
    }

    return (
        <ScrollView style={[styles.popUpLayout]}>
            <View style={styles.popUpLayout}>
                <Text style={styles.eventText}>Event Title</Text>
                <TextInput value={title} />
            </View>
            <View style={styles.popUpLayout}>
                <Text style={styles.eventText}>Type</Text>
                <TextInput value={color} />
            </View>

            <View style={styles.popUpLayout}>
                <Text style={styles.eventText}>Time</Text>
                <TextInput value={time} />
            </View>

            <View style={styles.popUpLayout}>
                <Text style={styles.eventText}>Location</Text>
                <TextInput value={location} />
            </View>

            <View style={styles.popUpLayout}>
                <Text style={styles.eventText}>Description</Text>
                <TextInput value={description} />
            </View>
            <View style={styles.parent}>
                <TouchableOpacity
                    style={styles.buttonConfirm}
                    onPress={addEvent}
                >
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
