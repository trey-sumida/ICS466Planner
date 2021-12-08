import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotesListScreen from './NotesListScreen'
import NoteScreen from './NoteScreen'

export default function NotesNavigationScreen() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
          <Stack.Screen
            name="NotesList"
            options={{ title: 'Notes', headerStyle: { backgroundColor: "#64b9ee" } }}
            component={NotesListScreen}
          />
          <Stack.Screen 
            name="Note" 
            component={NoteScreen}
            options={({ route }) => ({ title: route.params.title })}
             />
        </Stack.Navigator>
    )
}
