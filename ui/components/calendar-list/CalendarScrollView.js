import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import CalendarCard from './CalendarCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function CalendarScrollView({ navigation, type }) {

    //const [events, setEvents] = useState(null);

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
        noneLeftText: {
            fontSize: 15,
            textAlign: "center",
        },
    });

    const [events, setEvents] = useState(null);
    var [someEvents, setSomeEvents] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            getEvents();
        }, [])
    )

    const getEvents = async () => {
        await AsyncStorage.getItem("EVENTS").then(events => {
            setEvents(JSON.parse(events));
            setSomeEvents(JSON.parse(events));
            //console.log("new");
            //console.log(someEvents);
            //console.log(events);
            //filterEvents();
            console.log("new");
            console.log(someEvents);
        })
    }


    // get event info from async

    return (
        <View style={styles.view}>
            <ScrollView style={styles.scrollView}>
                {someEvents ? Object.keys(someEvents).map(keyName => {
                    {
                    if (type == "red" && someEvents[keyName].color == "red") {
                        console.log("1 red")
                        return <CalendarCard title={keyName} color={someEvents[keyName].color} time={someEvents[keyName].time} location={someEvents[keyName].location} description={someEvents[keyName].description} navigation={navigation} key={keyName} id={keyName} />
                    }
                    if (type == "blue" && someEvents[keyName].color == "blue") {
                        console.log("2 blue")
                        return <CalendarCard title={keyName} color={someEvents[keyName].color} time={someEvents[keyName].time} location={someEvents[keyName].location} description={someEvents[keyName].description} navigation={navigation} key={keyName} id={keyName} />
                    }
                    if (type == "all") {
                        console.log("3 all")
                        return <CalendarCard title={keyName} color={someEvents[keyName].color} time={someEvents[keyName].time} location={someEvents[keyName].location} description={someEvents[keyName].description} navigation={navigation} key={keyName} id={keyName} />
                    }
                    }
                }) : <Text style={styles.noneLeftText}>no events made, you should make one :-)</Text>}
            </ScrollView>
        </View>
    )
}
