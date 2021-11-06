import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CalendarCard({ date, description }) {

    const styles = StyleSheet.create({
        cardView: {
            height: 150,
            backgroundColor: 'white',
            margin: 10,
            borderColor: 'red',
            borderRadius: 5,
            borderWidth: 1
        },
        cardHeader: {
            backgroundColor: 'red',
            padding: 5,
        }
    })

    return (
        <View style={styles.cardView}>
            <View style={styles.cardHeader}>
                <Text>{date}</Text>
            </View>
            <Text>{description}</Text>
        </View>
    )
}
