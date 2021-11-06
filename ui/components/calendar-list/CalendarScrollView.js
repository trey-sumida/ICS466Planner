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
                <CalendarCard date="11/5/21" description="ICS 312 HW 8"/>
                <CalendarCard date="11/7/21" description="ICS 313 Quiz"/>
                <CalendarCard date="11/10/21" description="CHEM 162L Lab Report"/>
                <CalendarCard date="11/11/21" description="ICS 469 Exam"/>
                <CalendarCard date="11/11/21" description="ICS 312 HW 9"/>
            </ScrollView>
        </View>
    )
}
