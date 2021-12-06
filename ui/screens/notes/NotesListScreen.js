import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, KeyboardAvoidingView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotesScrollView from '../../components/notes/NotesScrollView';

export default function NotesListScreen({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = React.useState(null);

    const closeModal = () => {
        onChangeText(null);
        setModalVisible(!modalVisible);
    }

    const createNote = async () => {
        const name = text.trim();
        const value = await AsyncStorage.getItem("NOTES");
        const notes = value ? JSON.parse(value) : {};
        if (name in notes) {
            console.log("Name already exists");
        } else {
            notes[name] = '';
            setModalVisible(!modalVisible);
            await AsyncStorage.setItem("NOTES", JSON.stringify(notes)).then(() => {
                navigation.setOptions({ title: name});
                navigation.navigate("Note", {title: name});
            });
        }
    }

    const styles = StyleSheet.create({
        button: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10,
            width: '100%',
        },
        buttonText: {
            fontSize: 20
        },  
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
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
        textInput: {
            borderWidth: 1,
            padding: 10,
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        },
        modalButtonClose: {
            alignItems: "center",
            padding: 10,
            width: "50%",
            borderWidth: 1,
            borderBottomLeftRadius: 10,
        },
        modalButtonCreate: {
            alignItems: "center",
            padding: 10,
            width: "50%",
            borderWidth: 1,
            borderBottomRightRadius: 10,
        },
    });


    return (
        <View style={{ flex: 1 }}>
            <Modal
                avoidKeyboard={true}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(!modalVisible);
                }}
            >
                <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput 
                            style={styles.textInput}
                            value={text}
                            onChangeText={onChangeText}
                            placeholder='Enter Name of Note'
                            placeholderTextColor="black"
                            autoFocus={true}
                        />
                        <View style={{ flexDirection: 'row', width: "100%" }}>
                            <TouchableOpacity
                                style={styles.modalButtonClose}
                                onPress={closeModal}
                            ><Text>Close</Text></TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButtonCreate}
                                onPress={createNote}
                            ><Text>Create</Text></TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Modal>

            <NotesScrollView navigation={navigation} />

            <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Add Note</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
