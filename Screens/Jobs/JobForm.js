import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';
import {
    Form,
    H1,
    Picker,
} from "native-base";
import SimpleTitle from "../../Shared/Simple-Title";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const JobForm = () => {

    const [niveaux, setNiveaux] = useState([
        {id:"1", label:"Niveau 1", value: "Niveau 1" },
        {id:"2", label:"Niveau 2", value: "Niveau 2" },
        {id:"3", label:"Niveau 3", value: "Niveau 3" },
        {id:"4", label:"Niveau 4", value: "Niveau 4" }
    ]) 

    return (
        <View style={{backgroundColor:"#f5f7f9",flex:1}}>

            <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            
                <View style={styles.header}>
                    <H1 style={styles.title}>Ajouter un Job</H1>
                    
                    <Text style={styles.decription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum consequuntur, necessitatibus quia impedit nihil hic qui, porro id praesentium, eaque nisi in repellendus beatae. Ipsa minus fugit laborum ad!</Text>
                </View>
                <Form>

                    <View>
                        <SimpleTitle padd={10} marg={10} text="Image du Job"/>
                        <View style={styles.imageContainer}>
                            <View
                                style={{
                                    width: 'auto',
                                    borderWidth: 1,
                                    borderColor: '#a3a3a3',
                                    padding: 8,
                                    borderRadius: 20,
                                }}
                            >
                                <ImageBackground
                                    source={require("../../assets/insert-picture-icon.png")}
                                    style={{
                                        width: 80,
                                        height: 80,
                                        position: 'relative',   
                                    }}
                                >
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{
                                        position: 'absolute',
                                        right: -8,
                                        bottom: -8,
                                        backgroundColor: 'transparent'
                                    }}
                                >
                                    <FontAwesome5
                                        name="camera"
                                        size={25}
                                        color="#181818"
                                    />
                                </TouchableOpacity>
                                </ImageBackground>
                            </View>
                        </View>
                    </View>

                    <SimpleTitle padd={10} marg={10} text="Détails du Job"/>
                    <View style={styles.info}>
                        <TextInput placeholder="Titre du job" style={styles.input}/>
                        <TextInput placeholder="Niveau d'experience" style={styles.input}/>
                        <TextInput placeholder="Durée du job" style={styles.input}/>

                        <SimpleTitle padd={10} marg={10} text="Niveau d'anglais"/>
                        <View style={styles.pickerContainer}>
                            <Picker

                                style={styles.picker}
                                placeholder="Niveau d'anglais"
                                mode="dropdown"
                            >
                                {niveaux.map((niveau) =>(
                                    <Picker.Item
                                    key={niveau.id}
                                    label={niveau.label}
                                    value={niveau.value}
                                />
                                ))}
                            </Picker>
                        </View>

                        <SimpleTitle padd={10} marg={10} text="Niveau du projet"/>
                        <View style={styles.pickerContainer}>
                            <Picker

                                style={styles.picker}
                                placeholder="Niveau du projet"
                                mode="dropdown"
                            >
                                {niveaux.map((niveau) =>(
                                    <Picker.Item
                                    key={niveau.id}
                                    label={niveau.label}
                                    value={niveau.value}
                                />
                                ))}
                            </Picker>
                        </View>
                        
                    </View>
                    <View>
                        <SimpleTitle padd={10} marg={10} text="Catégories du job"/>
                        <View style={styles.pickerContainer}>
                            <Picker

                                style={styles.picker}
                                placeholder="Niveau du projet"
                                mode="dropdown"
                            >
                                {niveaux.map((niveau) =>(
                                    <Picker.Item
                                    key={niveau.id}
                                    label={niveau.label}
                                    value={niveau.value}
                                />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    <View>
                        <SimpleTitle padd={10} marg={10} text="Description du job"/>
                        <TextInput placeholder="Description" style={styles.descriptionInput}
                        />
                    </View>
                    <View>
                        <SimpleTitle padd={10} marg={10} text="Compétences requises"/>
                        <View style={styles.pickerContainer}>
                            <Picker

                                style={styles.picker}
                                placeholder="Niveau du projet"
                                mode="dropdown"
                            >
                                {niveaux.map((niveau) =>(
                                    <Picker.Item
                                    key={niveau.id}
                                    label={niveau.label}
                                    value={niveau.value}
                                />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    
                </Form>
            </ScrollView> 
        </View>             
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        alignItems: 'center',
    },
    container:{
        height:"100%",
        flexDirection:"column",
        padding:10,
        justifyContent:"space-around"
    },
    header:{
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:30,
        color:"#352961",
        fontWeight:"bold"
    },
    decription:{
        textAlign:"center",
        fontSize:12
    },
    input:{
        width:"100%",
        height:40,
        borderColor:"#352961",
        borderWidth:1,
        padding:8,
        marginTop:10,
        backgroundColor:"white",
        justifyContent:"center"
    },
    descriptionInput: {
        width:"100%",
        height:100,
        borderColor:"#352961",
        borderWidth:1,
        padding:8,
        marginTop:10,
        backgroundColor:"white",
    },
    pickerContainer: {
        width:"100%",
        borderWidth:1,
        borderColor:"#352961",
    },
    picker:{
        width:"100%",
        height:40,
        borderWidth:1,
        borderColor:"#352961",
    },
})

export default JobForm;
