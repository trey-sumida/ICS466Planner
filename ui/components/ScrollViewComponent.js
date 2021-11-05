import React from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'

export default function ScrollViewComponent() {

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
            </ScrollView>
        </View>
    )
}
