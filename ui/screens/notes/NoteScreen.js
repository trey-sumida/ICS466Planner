import React from 'react'
import { View, Text } from 'react-native'

export default function NoteScreen({ route }) {
    return (
        <View>
            <Text>Note Screen for {route.params.title}</Text>
        </View>
    )
}
