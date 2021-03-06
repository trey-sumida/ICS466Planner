import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, View, StyleSheet } from 'react-native'
import NoteItem from './NoteItem';

export default function NotesScrollView({ navigation }) {

    const [notes, setNotes] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            getNotes();
        }, [])
    )

    const getNotes = async () => {
        await AsyncStorage.getItem("NOTES").then(notes => {
            setNotes(JSON.parse(notes));
        })
    }

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            height: "100%",
        }
      });

    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                {notes ? Object.keys(notes).map(keyName => (
                    <NoteItem title={keyName} navigation={navigation} key={keyName} id={keyName}/>
                )) : null}
            </ScrollView>
        </View>
    )
}
