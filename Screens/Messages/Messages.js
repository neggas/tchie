import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Messages = ({user}) => {
    return (
        <View style={[{width: '100%', marginBottom: 16,}, user ? {alignItems: 'flex-end'} : null]}>
            <Text style={[
                styles.messagesContainer,
                user ? styles.userMessage : styles.noUser
            ]}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    messagesContainer: {
        padding: 8,
        borderRadius: 25,
        maxWidth: 320,
        fontSize: 12
    },
    userMessage: {
        backgroundColor: '#352961',
        color: 'white',
    },
    noUser: {
        backgroundColor: 'white',
        color: 'black',
    }
})

export default Messages;
