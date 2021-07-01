import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ProfilCard = ({item}) => {
    return (
        <View
            style={[{width: '100%'}, styles.expItems]}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.itemTitle}>{item.jobTitle}</Text>
            </View>
            <View style={{
                width: 220,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
            }}>
                <Text style={{
                    color: '#352961',
                    fontWeight: '600',
                    fontSize: 15,
                }}>
                    <FontAwesome5
                        style={{
                            marginRight: 10,
                        }}
                        name="home"
                        size={15}
                    />
                    lorem ipsum
                </Text>

                <Text style={{
                    color: '#352961',
                    fontWeight: '600',
                    fontSize: 15,
                }}>
                    <FontAwesome5
                        style={{
                            marginRight: 10,
                        }}
                        name="home"
                        size={15}
                    />
                    lorem ipsum
                </Text>
            </View>
            <View style={[styles.container, {flexDirection: 'row', alignItems: 'center'}]}>
                <View>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    expItems: {
        borderRadius: 25,
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    itemTitle: {
        color: '#352961',
        fontWeight: "bold",
        fontSize: 18,
    },
})

export default ProfilCard;
