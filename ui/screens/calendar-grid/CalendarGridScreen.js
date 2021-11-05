import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars';

export default function CalendarGridScreen() {

    const styles = StyleSheet.create({
        view: {
            flex: 1,
        }
    })
    return (
        <View style={styles.view}>
            <Calendar />
        </View>
    )
}
