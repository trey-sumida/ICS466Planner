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
            component={NotesListScreen}
          />
          <Stack.Screen 
            name="Note" 
            component={NoteScreen}
             />
        </Stack.Navigator>
    )
}
