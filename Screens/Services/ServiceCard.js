import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ServiceCard = ({item}) => {
    return (
        <View>
            <View
                style={[styles.container, styles.searchItems]}
                key={item.id}
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.itemTitle}>{item.jobTitle}</Text>
                    <View>
                        <FontAwesome5
                            name='bookmark'
                            color='grey'
                            size={16}
                        />
                    </View>
                </View>
                <View style={[styles.container, {flexDirection: 'row', alignItems: 'center', marginBottom: 10}]}>
                    <Text>{item.salary} Fcfa/Mois</Text>
                    <Text style={styles.contratTime}>{item.contratTime} Mois</Text>
                </View>

                <View style={[styles.container, {flexDirection: 'row', alignItems: 'center'}]}>
                    <View style={styles.logoItem}>
                        <FontAwesome5
                            name='pencil-ruler'
                            color='#352961'
                            size={18}
                        />
                    </View>
                    <View>
                        <Text style={styles.compagnyName}>{item.compagnyName}</Text>
                        <Text style={styles.jobLocality}>{item.jobLocality}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    searchItems: {
        borderRadius: 25,
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 15,
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
    contratTime: {
        backgroundColor: '#fc808080',
        marginLeft: 12,
        color: '#352961',
        fontSize: 10,
        fontWeight: 'bold',
        padding: 2,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 3,
    },
    logoItem: {
        width: 35,
        height: 35,
        borderRadius: 3,
        backgroundColor: '#F5F7F9',
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    compagnyName: {
        fontSize: 14,
    },
    jobLocality: {
        fontSize: 12,
        color: 'gray'
    }
})

export default ServiceCard;
