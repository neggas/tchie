import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    Form,
} from "native-base";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MessageProfilCard from './MessageProfilCard';
import Messages from './Messages';

const InboxContainer = () => {
    return (
        <View
            style={styles.InboxContainer}
        >
            <MessageProfilCard/>
            <View
                style={{
                    marginTop: 20,
                    paddingLeft: 12,
                    paddingRight: 12,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Messages/>
                    <Messages user={true}/>
                    <Messages/>
                </ScrollView>
            </View>
            <Form
                style={styles.inputContainer}
            >
                <View>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder={"Your Message"}
                        placeholderTextColor={"#9E9E9E"}
                        multiline={true}
                    />
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    activeOpacity={0.8}
                >
                    <FontAwesome5
                        name="paper-plane"
                        color='#352961'
                        size={25}
                    />
                </TouchableOpacity>
            </Form>
        </View>
    )
}

const styles = StyleSheet.create({
    InboxContainer: {
        flex: 1,
        backgroundColor: '#f5f7f9',
        position: 'relative',
    },
    inputStyle: {
        width: 350,
        minHeight: 38,
        maxHeight: 80,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20 ,
        backgroundColor : "#FFFFFF",
        padding: 8,
        marginRight: 8,
        fontSize: 16,
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        paddingLeft: 8,
        paddingRight: 8,
    }
})

export default InboxContainer;