import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddEvent({ route, navigation }) {

    const styles = StyleSheet.create({
        buttonConfirm: {
            alignItems: "center",
            padding: 10,
            width: '75%',
            backgroundColor: "#00FFAA",
        },
        buttonText: {
            fontSize: 18
        },
        parent: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10
        },
        eventText: {
            fontSize: 18
        },
        mainLayout: {
            padding: 10,
            marginBottom: 0,
            backgroundColor: "#FFF",
            flex: 1, 
        },
        popUpLayout: {
            padding: 10,
            marginBottom: 0,
            backgroundColor: "#FFF"
        },
        shadow: {
            elevation: 5,
        },
        scrollView: {
        },
        inputBox: {
            borderColor: "gray",
            borderWidth: .5,
            paddingLeft: 5,
            paddingRight: 5,
        },
        pickerBox: {
            backgroundColor: "gray",
        },
        sections: {
            paddingBottom: 10,
        }

    })

    const [events, setEvents] = useState(null);
    const [title, onChangeTitle] = React.useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const [timeInput, setTime] = useState(null);
    const [locationInput, setLocation] = useState(null);
    const [descriptionInput, setDescription] = useState(null);
    const defaultColor = "blue";

    // create events info

    const addEvent = async () => {
        const name = title.trim();
        const value = await AsyncStorage.getItem("EVENTS");
        const events = value ? JSON.parse(value) : {};
        if (name in events) {
            throw new Error("Event name exists");
        } else if (name == null) {
            throw new Error("Name is null");
        }
        events[name] = { title: name, color: selectedValue, time: timeInput, location: locationInput, description: descriptionInput };
        if (selectedValue == null) { events[name].color = "blue" }
        await AsyncStorage.setItem("EVENTS", JSON.stringify(events)).then(() => {
                navigation.navigate("CalendarList");
            });
        
    }

    return (
        <View style={[styles.popUpLayout]}>
            <ScrollView>
                <View style={ styles.sections } >
                    <Text style={styles.eventText}>Event Title</Text>
                        <TextInput
                        style={ styles.inputBox }
                        value={title}
                        onChangeText={onChangeTitle}
                        placeholder='Enter Name of Event'
                        placeholderTextColor="black"
                    />
                </View>
                <View style={styles.sections} >
                    <Text style={styles.eventText}>Type</Text>
                    <Picker
                        selectedValue={defaultColor}
                        onValueChange={(color, itemIndex) => setSelectedValue(color)}
                    >
                        <Picker.Item label="Event" value="blue" />
                        <Picker.Item label="Deadline" value="red" />
                    </Picker>
                </View>

                <View style={styles.sections} >
                    <Text style={styles.eventText}>Time</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={timeInput}
                        onChangeText={setTime}
                        />
                </View>

                <View style={styles.sections} >
                    <Text style={styles.eventText}>Location</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={locationInput}
                        onChangeText={setLocation} />
                </View>

                <View style={styles.sections} >
                    <Text style={styles.eventText}>Description</Text>
                    <TextInput
                        style={styles.inputBox}
                        value={descriptionInput}
                        multiline
                        numberOfLines={4}
                        onChangeText={setDescription} />
                </View>

                <View style={styles.parent}>
                    <TouchableOpacity
                        style={styles.buttonConfirm}
                        onPress={addEvent}
                    >
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
