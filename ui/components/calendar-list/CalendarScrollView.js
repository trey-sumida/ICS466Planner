import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import CalendarCard from './CalendarCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CalendarScrollView({ navigation }) {

    //const [events, setEvents] = useState(null);

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

    const [events, setEvents] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            getEvents();
        }, [])
    )

    const getEvents = async () => {
        await AsyncStorage.getItem("EVENTS").then(events => {
            setEvents(JSON.parse(events));
        })
    }

    // get event info from async


    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                {events ? Object.keys(events).map(keyName => (
                    <CalendarCard title={keyName} color={events[keyName].color} time={events[keyName].time } location={events[keyName].location } description={events[keyName].description } navigation={navigation} key={keyName} id={keyName} />
                ))  : null }
            </ScrollView>
        </View>
    )
}
