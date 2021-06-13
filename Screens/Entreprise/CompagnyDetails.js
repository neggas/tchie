import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';

const CompagnyDetails = () => {
    return (
        <View style={[JobStyle.container, {
            position: 'relative',
        }]}>
            {/* Le top avec l'image de fond */}
            <ImageBackground style={JobStyle.bgContainer}
            source={require('../../assets/bg2.png')}
            >
                <View style={[JobStyle.container, {
                    position: 'relative',
                    padding: 15,
                    alignItems: 'center',
                    backgroundColor: '#11111140',
                }]}>
                    <TouchableOpacity
                        style={JobStyle.returnButton}
                        activeOpacity={0.5}
                    >
                        <Text>
                            <FontAwesome5
                                name="long-arrow-alt-left"
                                size={18}
                            />
                        </Text>
                    </TouchableOpacity>

                    <View style={JobStyle.logoContainer}>
                        <Image
                            style={JobStyle.logo}
                            source={require('../../assets/LOGO.png')}
                            resizeMode='stretch'
                        />
                    </View>

                    <View style={[JobStyle.container, {
                        width: '100%',
                        alignItems: 'flex-start',
                        marginTop: 60,
                        marginBottom: 40,
                    }]}>
                        <Text style={JobStyle.jobTitle}>AZO Comporation</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={[JobStyle.iconContainer, {
                                width: 30,
                                height: 30,
                                borderRadius: 5,
                            }]}>
                                <FontAwesome5
                                    name="map-marker-alt"
                                    size={22}
                                    color='white'
                                />
                            </View>
                            <Text style={{color: 'white', fontSize: 15}}>7ème Tranche, Cocody</Text>
                        </View>
                    </View>
                </View>

            </ImageBackground>

            {/* la partie du bas contenant les elements */}
            <View style={{
                width: '100%',
                flex: 1,
                height: '60%',
                alignItems: 'center',
                position: 'absolute',
                top: 255,
            }}>
                <View style={JobStyle.bottomContainer}>
                    <View style={{
                        width: 60,
                        height: 65,
                        borderRadius: 15,
                        backgroundColor: 'yellow',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 6,
                        position: 'absolute',
                        right: 18,
                        top: '-6%',
                        }}>
                        <Text>LOGO</Text>
                    </View>
                    
                    <View style={JobStyle.detailContainer}>
                        <View style={[JobStyle.iconContainer,{
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 18,
                        }]}>
                            <FontAwesome5
                                name="share-alt"
                                size={24}
                                color='black'
                            />
                        </View>
                        <View style={JobStyle.detailItem}>
                            <View>
                                <Text style={JobStyle.detailTitle}>A propos</Text>
                                <View style={JobStyle.smallBar}></View>
                            </View>
                            <Text style={{
                                fontSize: 16,
                                marginTop: 6,
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Text>
                        </View>
                        <View style={JobStyle.detailItem}>
                        <View>
                            <Text style={JobStyle.detailTitle}>Localité</Text>
                                <View style={JobStyle.smallBar}></View>
                            </View>
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 8,
                            }}>
                                <View style={[JobStyle.iconContainer, {
                                    width: 50,
                                    height: 50,
                                    borderRadius: 15,
                                    backgroundColor: '#eee'
                                }]}>
                                    <FontAwesome5
                                        name="map-marker-alt"
                                        size={25}
                                        color='#352961'
                                    />
                                </View>
                                <View>
                                    <Text style={{fontSize: 16}}>7ème Tranche, Cocody, Abidjan</Text>
                                    <Text style={{fontSize: 16}}>Côte d'Ivoire</Text>
                                </View>
                            </View>
                        </View>
                        <View style={JobStyle.detailItem}>
                            <View>
                            <Text style={JobStyle.detailTitle}>Contact</Text>
                                <View style={JobStyle.smallBar}></View>
                            </View>
                            
                            <View style={{
                                marginLeft: 10,
                                marginTop: 3,
                            }}>
                                <Text style={JobStyle.contact}>+225 07 00 82 92 23</Text>
                                <Text style={JobStyle.contact}>+225 01 00 82 92 23</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        flexDirection: 'row',
                        left: 20,
                    }}>
                        <TouchableOpacity
                            style={JobStyle.postBtn}
                            activeOpacity={0.8}
                        >
                            <Text style={{color: 'white', fontSize: 18, fontWeight: '600',}}>Enregistrer l'entreprise</Text>
                            <FontAwesome5
                                name="long-arrow-alt-right"
                                size={30}
                                color='white'
                            />
                        </TouchableOpacity>
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
        minHeight: 250,
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
    detailContainer: {
        position: 'relative',
        marginTop: 20,
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
        flexDirection: 'row',
        backgroundColor: '#352961',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
        paddingLeft: 25,
        paddingRight: 25,
    },
    contact: {
        fontSize: 15,
    },
    smallBar:  {
        width: 30,
        height: 4,
        backgroundColor: '#fc8080',
    }
})

export default CompagnyDetails;
