import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ScrollViewComponent from '../../components/notes/NotesScrollView'

export default function NotesListScreen({ navigation }) {

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
    });

    const addNote = () => {
        console.log("Adding Note");
        navigation.navigate("Note");
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollViewComponent navigation={navigation} />
            <View>
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
