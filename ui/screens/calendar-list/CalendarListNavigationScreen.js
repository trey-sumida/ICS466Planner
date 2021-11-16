import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CalendarListScreen from './CalendarListScreen'
import AddEvent from '../../components/calendar-list/AddEvent'

export default function CalendarListNavigationScreen() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CalendarList"
                component={CalendarListScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Add Event" component={AddEvent} />
        </Stack.Navigator>
    )
}
