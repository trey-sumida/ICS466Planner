import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NoteItem({ title, navigation }) {

    const styles = StyleSheet.create({
        button: {
            marginTop: 5,
            alignItems: "center",
            backgroundColor: "#64b9ee",
            padding: 10,
            width: '100%',
            borderColor: 'white',
            borderWidth: 1,
        },
        buttonText: {
            fontSize: 20,
        },
        delete: {
            marginTop: 5,
            backgroundColor: "red",
            color: "white",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: 50
        },
    });

    const openNote = () => {
        navigation.navigate("Note", {title: title});
    }

    const deleteNote = async () => {
        const data = await AsyncStorage.getItem("NOTES");
        const notes = JSON.parse(data);
        delete notes[title];
        await AsyncStorage.setItem("NOTES", JSON.stringify(notes));
    }

    const renderRightActions = (_progress, _dragAnimatedValue) => {
        return (
            <TouchableOpacity onPress={deleteNote}>
                <View style={styles.delete}>
                    <Ionicons name="trash-bin-outline" size={30}/>
                </View>
            </TouchableOpacity>
        );
      };

    return (
        <Swipeable renderRightActions={renderRightActions} key={title}>
            <TouchableOpacity style={styles.button} onPress={openNote}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </Swipeable>
    )
}
