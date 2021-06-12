import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';


const Service = ()=> {

    const [items, setItems] = useState([
        {
            id: 1,
            jobTitle: 'Remote JavaScript Dev',
            salary: 200000,
            contratTime: 3,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Cocody',
        },
        {
            id: 2,
            jobTitle: 'Remote JavaScript Dev',
            salary: 200000,
            contratTime: 3,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Cocody',
        },
        {
            id: 3,
            jobTitle: 'Remote JavaScript Dev',
            salary: 200000,
            contratTime: 3,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Cocody',
        },
        {
            id: 4,
            jobTitle: 'Remote JavaScript Dev',
            salary: 200000,
            contratTime: 3,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Cocody',
        },
        {
            id: 5,
            jobTitle: 'Remote JavaScript Dev',
            salary: 200000,
            contratTime: 3,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Cocody',
        },
    ])

    return(
        <View style={ServiceStyle.ServiceContainer}>
            <View style={ServiceStyle.topBloc}>
                <TouchableOpacity
                    style={ServiceStyle.returnButton}
                    activeOpacity={0.5}
                >
                    <Text>
                        <FontAwesome5
                            name="long-arrow-alt-left"
                            size={18}
                        />
                    </Text>
                </TouchableOpacity>

                <View style={ServiceStyle.logoContainer}>
                    <Image
                        style={ServiceStyle.logo}
                        source={require('../assets/LOGO.png')}
                        resizeMode='stretch'
                    />
                </View>

                <View style={[ServiceStyle.container, {flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 20}]}>
                    <TextInput
                        style={ServiceStyle.searchInput}
                        placeholder='Recherchez...'
                    />
                    <View style={ServiceStyle.searchBtn}>
                        <FontAwesome5
                            name='search'
                            color='white'
                            size={16}
                        />
                    </View>
                </View>
                <Text>Voyer ce que nous trouvons pour vous</Text>
            </View>

            <View style={ServiceStyle.bottomBloc}>
                <Text style={{color: 'gray', marginTop: 10, marginBottom: 10}}>2 Services trouvés</Text>
                <ScrollView>
                    {
                        items.map((item) =>{
                            return(
                                <View
                                    style={[ServiceStyle.container, ServiceStyle.searchItems]}
                                    key={item.id}
                                >
                                    <View style={ServiceStyle.titleContainer}>
                                <Text style={ServiceStyle.itemTitle}>{item.jobTitle}</Text>
                                <View>
                                    <FontAwesome5
                                        name='bookmark'
                                        color='grey'
                                        size={16}
                                    />
                                </View>
                            </View>
                                    <View style={[ServiceStyle.container, {flexDirection: 'row', alignItems: 'center', marginBottom: 10}]}>
                                <Text>{item.salary} Fcfa/Mois</Text>
                                <Text style={ServiceStyle.contratTime}>{item.contratTime} Mois</Text>
                            </View>
                                    <View style={[ServiceStyle.container, {flexDirection: 'row', alignItems: 'center'}]}>
                                <View style={ServiceStyle.logoItem}>
                                    <FontAwesome5
                                        name='pencil-ruler'
                                        color='#352961'
                                        size={18}
                                    />
                                </View>
                                <View>
                                    <Text style={ServiceStyle.compagnyName}>{item.compagnyName}</Text>
                                    <Text style={ServiceStyle.jobLocality}>{item.jobLocality}</Text>
                                </View>
                            </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const ServiceStyle = StyleSheet.create({
    container: {
        width: '100%',
    },
    ServiceContainer: {
        flex: 1,
        backgroundColor: '#F5F7F9',
        padding: 15,
    },
    topBloc: {
        position: 'relative',
        width: "100%",
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    returnButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        position: 'absolute',
        top: 8,
        left: 0,
    },
    logoContainer: {
        width: 45,
        height: 45,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    searchInput: {
        flex: 1,
        borderRadius: 5,
        padding: 1.5,
        paddingLeft: 5,
        fontSize: 16,
        color: 'gray',
        backgroundColor: '#fff',
        marginRight: 5
    },
    searchBtn: {
        width: 30,
        height: 30,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#352961'
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

export default Service;
