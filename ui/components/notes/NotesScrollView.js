import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
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
            height: "100%"
        }, 
        delete: {
            backgroundColor: "red",
            color: "white",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: 50
        }
      });

      const renderRightActions = (_progress, _dragAnimatedValue) => {
        return (
            <TouchableOpacity onPress={()=>{console.log(`deleting ${notes}`)}}>
                <View style={styles.delete}>
                    <Ionicons name="trash-bin-outline" size={30}/>
                </View>
            </TouchableOpacity>
        );
      };

    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                {notes ? Object.keys(notes).map(keyName => (
                    <Swipeable renderRightActions={renderRightActions} key={keyName}><NoteItem title={keyName} navigation={navigation} key={keyName} id={keyName}/></Swipeable>
                )) : null}
            </ScrollView>
        </View>
    )
}
