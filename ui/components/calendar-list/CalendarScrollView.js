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


    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                <CalendarCard time="11/5/21" title="ICS 312 HW 8" location="UH Manoa" description="assignment" color="red"/>
                <CalendarCard time="11/7/21" title="ICS 313 Quiz" location="UH Manoa" description="assignment" color="red" />
                <CalendarCard time="11/10/21" title="CHEM 162L" location="UH Manoa" description="class" color="blue" />
{/*                <CalendarCard time="11/10/21" title="CHEM 162L Lab Report" location="UH Manoa" description="assignment" color="red"/>
                <CalendarCard time="11/11/21" title="ICS 469 Exam" location="UH Manoa" description="assignment" color="red"/>
                <CalendarCard time="11/11/21" title="ICS 312 HW 9" location="UH Manoa" description="assignment" color="red"/>*/}
            </ScrollView>
        </View>
    )
}
