import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars';

export default function CalendarGridScreen() {

    const styles = StyleSheet.create({
        view: {
            flex: 1,
        }
    })
    return (
        <SafeAreaView style={styles.view}>
            <Calendar />
        </SafeAreaView>
    )
}
