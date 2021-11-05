import React from 'react'
import { View } from 'react-native'
import CalendarScrollView from '../../components/calendar-list/CalendarScrollView'

export default function CalendarListScreen() {
    return (
        <View style={{ flex: 1 }}>
            <CalendarScrollView />
        </View>
    )
}
