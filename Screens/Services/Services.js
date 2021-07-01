import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Search from '../../Shared/Search';
import ServiceCard from './ServiceCard';

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
            jobLocality: 'Cocody, Angré',
        },
        {
            id: 2,
            jobTitle: 'Designer web',
            salary: 234000,
            contratTime: 5,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Deux Plateaux',
        },
        {
            id: 3,
            jobTitle: 'Front-end Dev',
            salary: 300000,
            contratTime: 12,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Cocody, Rivera',
        },
        {
            id: 4,
            jobTitle: 'Journaliste',
            salary: 150000,
            contratTime: 6,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Cocody',
        },
        {
            id: 5,
            jobTitle: 'Menusier',
            salary: 70000,
            contratTime: 8,
            compagnyName: 'Linkedin Comporation',
            jobLocality: 'Yopougon',
        },
    ])

    return(
        <View style={ServiceStyle.ServiceContainer}>
            
            <Search/>
            <View style={ServiceStyle.bottomBloc}>
                <Text style={{color: 'gray', marginTop: 10, marginBottom: 10}}>2 Services trouvés</Text>
                <ScrollView
                 showsVerticalScrollIndicator={false}
                >
                    {
                        items.map((item) =>{
                            return(
                                <ServiceCard key={item.id} item={item} />
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
    bottomBloc: {
        height: "100%",
        paddingBottom: 30,
    },
    ServiceContainer: {
        flex: 1,
        backgroundColor: '#F5F7F9',
        padding: 15,
    },
})

export default Service;
