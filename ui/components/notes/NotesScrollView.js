import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import NoteItem from './NoteItem';

export default function NotesScrollView({ navigation }) {

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            height: "100%"
        }, 
        scrollView: {
        },
      });
      
    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                <NoteItem title="ICS 311" navigation={navigation}/>
                <NoteItem title="ICS 314" navigation={navigation}/>
                <NoteItem title="ICS 321" navigation={navigation}/>
                <NoteItem title="ICS 313" navigation={navigation}/>
            </ScrollView>
        </View>
    )
}
