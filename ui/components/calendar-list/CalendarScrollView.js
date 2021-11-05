import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import CalendarCard from './CalendarCard';

export default function CalendarScrollView({ navigation }) {

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
                <CalendarCard />
                <CalendarCard />
                <CalendarCard />
                <CalendarCard />
                <CalendarCard />
                <CalendarCard />
            </ScrollView>
        </View>
    )
}
