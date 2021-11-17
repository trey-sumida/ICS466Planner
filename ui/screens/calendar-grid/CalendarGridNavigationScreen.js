import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CalendarGridScreen from './CalendarGridScreen'
import AddEvent from '../../components/calendar-list/AddEvent'

export default function CalendarGridNavigationScreen() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CalendarList"
                component={CalendarGridScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Add Event" component={AddEvent} />
        </Stack.Navigator>
    )
}
