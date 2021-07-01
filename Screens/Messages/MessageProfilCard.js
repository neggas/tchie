import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

const MessageProfilCard = () => {
    return (
        <View
        style={styles.CardContainer}
        >
            <View style={styles.profilContainer}>
                <Image
                    source={require('../../assets/bg.png')}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 25,
                    }}
                />
            </View>
            <View>
                <Text style={styles.profilName}>Fabrice Houndzezeuhzefz</Text>
                <Text style={styles.profilStatus}>en ligne</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    CardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: 12,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    profilContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 14,
    },
    profilName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#352961'
    },
    profilStatus: {
        color: '#aaa',
    }
})

export default MessageProfilCard;
