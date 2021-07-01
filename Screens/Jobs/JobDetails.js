import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

const JobDetails = () => {
    return (
        <View style={[JobStyle.container, {
            position: 'relative',
        }]}>
            {/* Le top avec l'image de fond */}
            <ImageBackground style={JobStyle.bgContainer}
            source={require('../../assets/bg1.png')}
            >
                <View style={[JobStyle.container, {
                    position: 'relative',
                    padding: 15,
                    alignItems: 'center',
                    backgroundColor: '#11111140',
                }]}>
                    
                    <View style={[JobStyle.container, {
                        width: '100%',
                        alignItems: 'flex-start',
                        marginTop: 60,
                        marginBottom: 40,
                    }]}>
                        <Text style={JobStyle.jobTitle}>Community Manager</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white', fontSize: 15}}>200000 Fcfa/Mois</Text>
                            <Text style={JobStyle.contratTime}>3 Mois</Text>
                        </View>
                    </View>
                </View>

            </ImageBackground>

            {/* la partie du bas contenant les elements */}
            <View style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
                position: 'absolute',
                top: 210,
                bottom: 0,
            }}>
                    <View style={JobStyle.bottomContainer}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                <View style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 15,
                                    backgroundColor: 'yellow',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 6,
                                    position: 'relative',
                                }}>
                                    <Text>LOGO</Text>
                                </View>
                                <View>
                                    <Text style={JobStyle.compagnyName}>Linkedin Corporation</Text>
                                    <Text style={JobStyle.jobLocality}>Cocody</Text>
                                </View>
                            </View>

                            <View style={JobStyle.navigation}>
                                <Text style={JobStyle.navItem}>Descrptions</Text>
                                <Text style={[JobStyle.navItem,JobStyle.active]}>Compagnie</Text>
                                <Text style={JobStyle.navItem}>Activiés</Text>
                            </View>
                        
                            <View style={JobStyle.detailContainer}>
                                <View style={JobStyle.detailItem}>
                                    <Text style={JobStyle.detailTitle}>Outils:</Text>
                                    <Text>Réseaux sociaux, Gestion de projet</Text>
                                </View>
                                <View style={JobStyle.detailItem}>
                                    <Text style={JobStyle.detailTitle}>Experiences:</Text>
                                    <Text>2 à 3 ans</Text>
                                </View>
                                <View style={JobStyle.detailItem}>
                                    <Text style={JobStyle.detailTitle}>Autre:</Text>
                                    <Text>Adobe Illustration, Adobe PhotoShop, Adobe XD</Text>
                                </View>
                            </View>

                        </ScrollView>
                    </View>
                    
                    <View style={{
                        position: 'absolute',
                        bottom: 8,
                        width: '95%',
                        flexDirection: 'row',
                        left: 10,
                    }}>
                        <TouchableOpacity style={JobStyle.favContainer}>
                            <FontAwesome5
                                name="heart"
                                size={30}
                                activeOpacity={0.8}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={JobStyle.postBtn}
                            activeOpacity={0.8}
                        >
                            <Text style={{color: 'white', fontSize: 18,}}>Postuler</Text>
                        </TouchableOpacity>
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
        minHeight: 250,
        marginTop: 40
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
    jobTitle: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },
    contratTime: {
        backgroundColor: '#fc8080',
        marginLeft: 12,
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        padding: 2,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 3,
    },
    bottomContainer: {
        width: '99%',
        flex: 1,
        margin: 'auto',
        padding: 20,
        paddingBottom: 50,
        backgroundColor: 'white',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
    },
    compagnyName: {
        fontSize: 14,
    },
    jobLocality: {
        fontSize: 12,
        color: 'gray'
    },
    navigation: {
        width: '100%',
        backgroundColor: '#cacaca67',
        marginTop: 25,
        marginBottom: 35,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    navItem: {
        fontSize: 15,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    active: {
        backgroundColor: '#352961',
        color: 'white',
        borderRadius: 8,
    },
    detailItem: {
        marginBottom: 25,
    },
    detailTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    favContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#cacaca67',
        marginRight: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postBtn: {
        flex: 1,
        backgroundColor: '#352961',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
})

export default JobDetails;
