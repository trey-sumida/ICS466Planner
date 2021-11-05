import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function NoteItem({ title, navigation }) {

    const styles = StyleSheet.create({
        button: {
            alignItems: "center",
            backgroundColor: "#000000",
            padding: 10,
            width: '100%',
        },
        buttonText: {
            fontSize: 20,
            color: 'white'
        },  
    });

    const openNote = () => {
        console.log('opening note');
        navigation.navigate("Note", {title: title});
    }

    return (
        <TouchableOpacity style={styles.button} onPress={openNote}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
