import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, Modal, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Foundation } from '@expo/vector-icons';

export default function EditEvent({ route, navigation }) {

    const styles = StyleSheet.create({
        buttonSave: {
            alignItems: "center",
            padding: 10,
            width: '75%',
            backgroundColor: "#00FFAA",
        },
        buttonText: {
            fontSize: 18,
            color: "black",
        },
        parent: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 10
        },
        titleText: {
            fontSize: 25,
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
        },
        modalButtonClose: {
            alignItems: "center",
            padding: 10,
            width: "50%",
            borderWidth: 1,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
        },
        modalButtonDelete: {
            alignItems: "center",
            padding: 10,
            width: "50%",
            borderWidth: 1,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
        },
        modalText: {
            fontSize: 25,
            padding: 5,
        },
        modalView: {
            width: "80%",
            backgroundColor: "white",
            borderRadius: 10,
            padding: 15,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
    })

    let [events, setEvents] = useState(null);
    let [name, setName] = useState(null);
    let [selectedValue, setSelectedValue] = useState(null);
    let [timeInput, setTime] = useState(null);
    let [locationInput, setLocation] = useState(null);
    let [descriptionInput, setDescription] = useState(null);
    let defaultColor = "blue";

    useFocusEffect(
        React.useCallback(() => {
            getEvent();
        }, [])
    )

    const getEvent = async () => {
        await AsyncStorage.getItem("EVENTS").then(events => {
            const allEvents = JSON.parse(events);
            const currEvent = allEvents[route.params.title];
            setName(currEvent.title);
            setSelectedValue(currEvent.color);
            setTime(currEvent.time);
            setLocation(currEvent.location);
            setDescription(currEvent.description);
            setEvents(allEvents);
        })
    }

    const trashEventPopUp = () => {
        console.log("registered");
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(!modalVisible);
    }

    removeValue = async (name) => {
        try {
            delete events[name];
            await AsyncStorage.setItem("EVENTS", JSON.stringify(events));
            closeModal();
            console.log(events);
            navigation.navigate("CalendarList");
            return true;
        } catch (e) {
            console.log("error " + name);
        }
    }

    const save = async () => {
        events[name] = { title: name, color: selectedValue, time: timeInput, location: locationInput, description: descriptionInput };

        console.log(events);
        await AsyncStorage.setItem("EVENTS", JSON.stringify(events)).then(() => {
            navigation.navigate("CalendarList");
        });
    }

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.popUpLayout, { flex: 1 }]}>
            <ScrollView>
                <View style={styles.sections} >
                    <Text style={styles.titleText}>{name}</Text>
                </View>
                <View style={styles.sections} >
                    <Text style={styles.eventText}>Type</Text>
                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(color, itemIndex) => setSelectedValue(color)}
                    >
                        <Picker.Item label="Event" value="blue" />
                        <Picker.Item label="Deadline" value="red" />
                    </Picker>
                </View>
                <View>
                    <Text style={styles.eventText}>Time</Text>
                    <TextInput
                        style={styles.inputBox}
                        editable
                        value={timeInput}
                        onChangeText={text => setTime(text)}
                    />
                </View>
                <View style={styles.sections} >
                    <Text style={styles.eventText}>Location</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={locationInput}
                        value={locationInput}
                        onChangeText={setLocation} />
                </View>
                <View style={styles.sections} >
                    <Text style={styles.eventText}>Description</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={descriptionInput}
                        value={descriptionInput}
                        multiline
                        numberOfLines={4}
                        onChangeText={setDescription} />
                </View>
                <View style={styles.parent}>
                    <TouchableOpacity onPress={trashEventPopUp}>
                        <Foundation style={[styles.parent, { paddingRight: 20 }]} name="trash" size={50} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSave} onPress={save}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
            <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure?</Text>
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <TouchableOpacity
                                style={styles.modalButtonClose}
                                onPress={closeModal}
                            ><Text>Close</Text></TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButtonDelete}
                                onPress={removeValue.bind(this, name)}
                            ><Text>Delete</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
