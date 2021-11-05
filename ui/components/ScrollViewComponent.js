import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import NoteItem from './NoteItem';

export default function ScrollViewComponent({ navigation }) {

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            height: "100%"
        }, 
        scrollView: {
          backgroundColor: 'purple',
        },
      });
      
    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                <NoteItem title="ICS 311" navigation={navigation}/>
            </ScrollView>
        </View>
    )
}
