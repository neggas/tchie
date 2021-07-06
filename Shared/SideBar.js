import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import SimpleTitle from "../Shared/Simple-Title";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const SideBar = () => {
    return (
        <View style={styles.sideBarContainer}>
            <View style={styles.sideBar}>
                <View style={styles.sideBarTop}>
                    <View style={styles.profilContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/bg.png')}
                            resizeMode='cover'
                        />
                    </View>
                    <Text style={styles.profilName}>Joel Konan</Text>
                    <Text style={styles.profilJob}>JavaScript Developer</Text>
                </View>

                <View style={styles.sideBarBody}>
                    <ScrollView style={styles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                        <View>
                            <SimpleTitle text="Tableau de bord" style={styles.simpleTitle}/>
                            <Text style={styles.text}>Mon profil</Text>
                            <Text style={styles.text}>Tchat</Text>
                        </View>

                        <View style={styles.dropContainer}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.dropLabel}>Gestion de Job</Text>
                                <FontAwesome5
                                    name='angle-down'
                                    size={18}
                                    color='#352961'
                                />
                            </View>
                            <View style={{paddingLeft: 20}}>
                                <Text style={styles.dropItem}>Ajouter un Job</Text>
                                <Text style={styles.dropItem}>Voir les Jobs</Text>
                            </View>
                        </View>

                        <Text style={styles.text}>Favories</Text>
                        <TouchableOpacity>
                            <Text style={styles.text}>Deconnexion</Text>
                        </TouchableOpacity>

                        <View>
                            <SimpleTitle text="General" style={styles.simpleTitle}/>
                            <Text style={styles.text}>A propos</Text>
                            <Text style={styles.text}>Evaluer l'application</Text>
                            <Text style={styles.text}>Inviter un ami</Text>
                            <Text style={styles.text}>Support</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sideBarContainer: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        backgroundColor: '#ababab70',
        zIndex: 1000,
    },
    sideBar: {
        height: "100%",
        width: "70%",
        backgroundColor: 'white',
    },
    sideBarTop: {
        width: '100%',
        height: 180,
        backgroundColor: '#f3f3f3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    profilName: {
        color: "#352961",
        fontWeight: '500',
    },
    profilJob: {
        fontSize: 16,
        color: '#333',
        fontWeight: '100',
    },
    sideBarBody: {
        flex: 1,
    },
    scrollViewContainer: {
        height: "100%",
        padding: 18,
    },
    simpleTitle: {
        padding: 0,
        margin: 0,
    },
    text: {
        fontSize: 18,
        marginTop: 12,
    },
    dropContainer: {
        marginTop: 12,
    },
    labelContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 8,
        backgroundColor: '#cccccc40'
    },
    dropLabel: {
        fontSize: 18,
    },
    dropItem: {
        fontSize: 17,
        marginBottom: 5
    }
})

export default SideBar;
