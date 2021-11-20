import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TextInput } from 'react-native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function NoteScreen({ route, navigation }) {

    const [notes, setNotes] = useState(null);
    const [note, setNote] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            getNote();
        }, [])
    )

    const getNote = async () => {
        await AsyncStorage.getItem("NOTES").then(notes => {
            const allNotes = JSON.parse(notes);
            const currNote = allNotes[route.params.title];
            setNote(currNote);
            setNotes(allNotes);
        })
    }

    const save = async () => {
        notes[route.params.title] = note;
        await AsyncStorage.setItem("NOTES", JSON.stringify(notes)).then(() => {
            navigation.navigate("NotesList");
        });
    }

    const styles = StyleSheet.create({
        textInput: {
            fontSize: 20,
            margin: 10,
        },
        button: {
            alignItems: "center",
            backgroundColor: "blue",
            padding: 10,
            width: '100%',
        },
        buttonText: {
            fontSize: 20,
            color: "white",
        },
    })

    return (
        <View>
            <TextInput
                style={styles.textInput}
                editable
                value={note}
                multiline
                numberOfLines={4}
                onChangeText={text => setNote(text)}
            />
            <TouchableOpacity style={styles.button} onPress={save}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}
