import React from 'react'
import { SafeAreaView } from 'react-native'
import CalendarScrollView from '../../components/calendar-list/CalendarScrollView'

export default function CalendarListScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CalendarScrollView />
        </SafeAreaView>
    )
}
