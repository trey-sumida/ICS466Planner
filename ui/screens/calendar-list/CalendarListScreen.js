import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, Text, SafeAreaView } from 'react-native'
import AddEvent from '../../components/calendar-list/AddEvent';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CalendarScrollView from '../../components/calendar-list/CalendarScrollView'

export default function CalendarListScreen({ navigation, route }) {

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            height: "100%"
        },
        scrollView: {
        },
        buttonAddEvent: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: '100%',
        },
        headerBox: {
            backgroundColor: "#FFF",
            paddingTop: 20,
            elevation: 5,
        },
        headerText: {
            fontSize: 25,
            paddingLeft: 10,
            paddingRight: 10,
        },
        buttonText: {
            fontSize: 20
        },
        bg: {
            backgroundColor: "#00CCCC",
        },
        parent: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        iconSelector: {
            alignItems: "flex-end",
            margin: 10,
            padding: 0,
        },
        buttonSelector: {
            alignItems: "center",
            padding: 5,
            backgroundColor: "#DDD",
        },
        buttonSelectorPressed: {
            alignItems: "center",
            padding: 5,
            backgroundColor: "#00DDDD",
        },
        headerButtonText: {
            textAlignVertical: "center",
            fontSize: 15,
            padding: 0,
            margin: 0,
        },
        buttonAlign: {
            marginTop: 20,
            marginRight: 0,
            marginBottom: 0,
            padding: 10
        },
    });

    async function clearData() {
        await AsyncStorage.clear();

    }

    const addEvent = () => {
        //console.log("Adding Event");
        navigation.navigate("Add Event");
    }

    const [isBAllPress, setBAllPress] = React.useState(false);
    const [isBDatePress, setBDatePress] = React.useState(false);
    const [isBDeadPress, setBDeadPress] = React.useState(false);

    const bAllPresser = () => {
        setBAllPress(true);
        setBDatePress(false);
        setBDeadPress(false);
    }
    const bDatePresser = () => {
        setBAllPress(false);
        setBDatePress(true);
        setBDeadPress(false);
    }
    const bDeadPresser = () => {
        setBAllPress(false);
        setBDatePress(false);
        setBDeadPress(true);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.headerBox, styles.parent]}>
                <View style={[styles.parent, styles.iconSelector]}>
                    <TouchableOpacity >
                        <AntDesign style={styles.iconLSelector} name="leftcircle" size={25} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Date</Text>
                    <TouchableOpacity>
                        <AntDesign style={styles.iconRSelector} name="rightcircle" size={25} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.parent, styles.buttonAlign]}>
                    <TouchableHighlight onPress={() => bAllPresser()}
                        style={isBAllPress ? styles.buttonSelectorPressed : styles.buttonSelector} >
                        <Text style={styles.headerButtonText}>All</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => bDatePresser()}
                        style={isBDatePress ? styles.buttonSelectorPressed : styles.buttonSelector} >
                        <Text style={styles.headerButtonText}>Date</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => bDeadPresser()}
                        style={isBDeadPress ? styles.buttonSelectorPressed : styles.buttonSelector} >
                        <Text style={styles.headerButtonText}>Dead line</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <TouchableOpacity
                onPress={clearData}>
                <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>

            <CalendarScrollView navigation={navigation} />

            <TouchableOpacity
                style={styles.buttonAddEvent}
                onPress={addEvent}
            >
                <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}
/*
 <View style={styles.headerBox, styles.parent}>
                <Text style={styles.headerText}>Calendar List</Text>
                <View style={styles.parent, {marginTop: 20, marginRight: 0, marginBottom: 0, padding: 0}}>
                    <TouchableOpacity
                        style={styles.buttonConfirm} >
                        <Text style={styles.headerButtonText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonConfirm} >
                        <Text style={styles.headerButtonText}>Date</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonConfirm} >
                        <Text style={styles.headerButtonText}>Dead line</Text>
                    </TouchableOpacity>
                </View>
            </View>
 * */