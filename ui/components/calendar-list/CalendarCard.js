import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Foundation } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CalendarCard({ route, navigation, title, color, time, location, description }) {

    const styles = StyleSheet.create({
        cardView: {
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
        cardTopDateText: {
            color: "white",
            fontSize: 15,
        },
        cardHeader: {
            padding: 5,
        },
        cardLower: {
            justifyContent: 'flex-end',
            paddingRight: 10,
            padding: 0,
            margin: 0,
        },
        locationText: {
            fontSize: 13,
            padding: 0,
            color: "#777",
        },
        cardBody: {
            paddingTop: 2,
            padding: 7,
        },
        cardBodyText: {
            fontSize: 17,
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
        },

    })


    const openEvent = () => {
        navigation.navigate("Edit Event", { title: title });
    }


    return (
        <View>
            <View style={styles.cardView} borderColor={color}>
                <View style={[styles.cardHeader, styles.parent]} backgroundColor={color}>
                    <Text style={[styles.cardTopText, styles.textLeft]} >{title}</Text>
                    <Text style={[styles.cardTopDateText, styles.textRight]} >{time}</Text >
                </View>

                {((location == "" || location == null) && (description == "" || description == null)) ? null :
                    <View style={styles.cardBody}>
                        {(location == "" || location == null) ? null : <Text style={styles.locationText}>{location}</Text>}
                        {(description == "" || description == null) ? null : <Text style={styles.cardBodyText}>{description}</Text>}
                        <Text style={ { textDecorationLine: 'underline', paddingTop: 5} }>Notes</Text>
                    </View>}

                <View style={[styles.cardLower, styles.parent]} backgroundColor={color}>
                    
                    <TouchableOpacity onPress={openEvent}>
                    <Foundation style={[styles.parent]} name="pencil" size={25} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
