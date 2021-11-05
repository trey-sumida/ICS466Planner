import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CalendarScrollView from '../components/CalendarScrollView'

export default function CalendarListScreen() {
    return (
        <View style={{ flex: 1 }}>
            <CalendarScrollView />
        </View>
    )
}
