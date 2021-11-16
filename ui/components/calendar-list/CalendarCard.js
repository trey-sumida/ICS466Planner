import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CalendarCard({ title, color, time, location, description }) {

    const styles = StyleSheet.create({
        cardView: {
            //height: 150,
            backgroundColor: "white",
            margin: 10,
            borderRadius: 5,
            borderWidth: 2,
            elevation: 5
        },
        cardTopText: {
            color: "white",
            fontSize: 17,
        },
        cardHeader: {
            padding: 5,
        },
        cardBody: {
            padding: 10,
        },
        cardBodyText: {
            fontSize: 15,
        },
        parent: {
            flexDirection: "row",
            //justifyContent: "space-around"
        },
        textLeft: {
            flex: 1,
            textAlign: "left",
        },
        textRight: {
            flex: 1,
            textAlign: "right",
        }

    })

    return (
        <View style={ styles.cardView } borderColor={ color }>
            <View style={ [styles.cardHeader, styles.parent] } backgroundColor={ color }>
                <Text style={ [styles.cardTopText, styles.textLeft] } >{ title }</Text>
                <Text style={ [styles.cardTopText, styles.textRight] } >{ time }</Text>
            </View>
            <View style={ styles.cardBody }>
                <Text style={ styles.cardBodyText }>{ location }</Text>
                <Text style={styles.cardBodyText}>{ description }</Text>
            </View>
        </View>
    )
}
