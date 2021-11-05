import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function NotesListScreen() {

    const styles = StyleSheet.create({
        button: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: '100%',
        },
        buttonText: {
            fontSize: 20
        },  
        buttonView: {
            flex: 1,
            justifyContent: 'flex-end'
        }
    });

    const addNote = () => {
        console.log("Adding Note");
    }

    return (
        <View style={{ flex: 1 }}>
            <Text>Notes List Screen</Text>
            <View style={styles.buttonView}>
            <TouchableOpacity
                style={styles.button}
                onPress={addNote}
            >
                <Text style={styles.buttonText}>Add Note</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
