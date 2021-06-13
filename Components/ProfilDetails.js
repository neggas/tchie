import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

const ProfilDetails = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            jobTitle: 'Web marketing',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 2,
            jobTitle: 'Web marketing',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ])

    return (
        <View style={[JobStyle.container, {
            position: 'relative',
        }]}>
            {/* Le top avec l'image de fond */}
            <ImageBackground style={JobStyle.bgContainer}
            source={require('../assets/bg2.png')}
            >
                <View style={[JobStyle.container, {
                    position: 'relative',
                    padding: 15,
                    alignItems: 'center',
                    backgroundColor: '#11111140',
                }]}>
                    
                </View>

            </ImageBackground>

            {/* la partie du bas contenant les elements */}
            <View style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
                position: 'absolute',
                top: 150,
            }}>
                <View style={JobStyle.bottomContainer}>
                    
                    <Text style={{
                        color: '#fc8080',
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginBottom: 15,
                    }}>Profil</Text>
                    <View style={JobStyle.profilContainer}>
                        <View style={JobStyle.profilInfo}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Text style={JobStyle.profilName}>John</Text>
                                <Text style={JobStyle.profilName}>Doe</Text>
                            </View>
                            <Text style={JobStyle.profilJob}>Consultant & Commerçant</Text>
                        </View>
                        <View style={JobStyle.profilImageContainer}>
                            <Image
                                style={JobStyle.image}
                                source={require('../assets/bg1.png')}
                                resizeMode='cover'
                            />
                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={[JobStyle.btn, {
                            color: 'white',
                            backgroundColor: '#352961',
                        }]}>200000 Fcfa/Mois</Text>
                        <TouchableOpacity style={[JobStyle.btn,{
                            backgroundColor: '#eee',
                            flexDirection: 'row',
                        }]}>
                            <FontAwesome5
                                name="long-arrow-alt-left"
                                size={18}
                                color='#352961'
                            />
                            <Text style={{
                                color: '#352961',
                                marginLeft: 5,
                                fontSize: 14,
                                fontWeight: 'bold',
                            }}>Contactez-moi</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                
                <View style={{
                    backgroundColor: '#F5F7F9',
                    padding: 20,
                }}>
                    <View style={JobStyle.detailContainer}>
                        <View style={JobStyle.detailItem}>
                        <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={JobStyle.detailTitle}>A propos</Text>
                                <TouchableOpacity style={{backgroundColor: '#fc808040', padding:0, paddingLeft: 5, paddingRight: 5, borderRadius: 3}}>
                                    <Text style={{color: '#352961', fontSize: 12}}>-</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[JobStyle.smallBar]}></View>
                            <Text style={{
                                fontSize: 16,
                                marginTop: 6,
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, 
                            </Text>
                        </View>
                        <View style={JobStyle.detailItem}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={JobStyle.detailTitle}>Compétences</Text>
                                <TouchableOpacity style={{backgroundColor: '#fc808040', padding:0, paddingLeft: 5, paddingRight: 5, borderRadius: 3}}>
                                    <Text style={{color: '#352961', fontSize: 12}}>-</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[JobStyle.smallBar]}></View>
                            <View style={JobStyle.competenceContainer}>
                                <Text style={JobStyle.competenceItem}>Illustrator</Text>
                                <Text style={JobStyle.competenceItem}>Responsable</Text>
                                <Text style={JobStyle.competenceItem}>Html</Text>
                                <Text style={JobStyle.competenceItem}>Communication</Text>
                                <Text style={JobStyle.competenceItem}>PhotoShop</Text>
                            </View>
                        </View>
                        <View style={JobStyle.detailItem}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Text style={JobStyle.detailTitle}>Experiences</Text>
                                <TouchableOpacity style={{backgroundColor: '#fc808040', padding:0, paddingLeft: 5, paddingRight: 5, borderRadius: 3}}>
                                    <Text style={{color: '#352961', fontSize: 12}}>-</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[JobStyle.smallBar, {marginBottom: 15}]}></View>
                            
                            <FlatList
                                data={items}
                                renderItem={({item}) => (
                                    <View
                                    style={[{width: '100%'}, JobStyle.expItems]}
                                    keyExtractor={(item) => item.id.toString()}
                                    >
                                        <View style={JobStyle.titleContainer}>
                                            <Text style={JobStyle.itemTitle}>{item.jobTitle}</Text>
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
                                        <View style={[JobStyle.container, {flexDirection: 'row', alignItems: 'center'}]}>
                                            <View>
                                                <Text style={JobStyle.description}>{item.description}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const JobStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgContainer: {
        width: '100%',
        minHeight: 150,
        marginTop: 40,
    },
    returnButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: 'white',
        position: 'absolute',
        top: 25,
        left: 10,
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
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    bottomContainer: {
        width: '99%',
        flex: 1,
        margin: 'auto',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 35,
    },
    profilContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profilName: {
        fontSize: 18,
        marginRight: 5,
    },
    profilJob: {
        fontWeight: 'bold',
        color: '#352961',
        marginBottom: 25,
    },
    profilImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    btn: {
        padding: 2,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    compagnyName: {
        fontSize: 14,
    },
    jobLocality: {
        fontSize: 12,
        color: 'gray'
    },
    detailContainer: {
        position: 'relative',
    },
    detailItem: {
        marginBottom: 25,
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#352961',
        fontWeight: 'bold',
        flexDirection: 'column',
    },
    smallBar:  {
        width: 30,
        height: 4,
        backgroundColor: '#fc8080',
    },
    competenceContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },

    competenceItem: {
        marginRight: 8,
        fontSize: 14,
        color: '#fc8080',
        fontWeight: 'bold',
        padding: 3,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fc808020',
        borderRadius: 3,
        marginBottom: 10,
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

export default ProfilDetails;
