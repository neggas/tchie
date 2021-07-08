import { Form, H1,Item,CheckBox, Select ,Input,Picker } from "native-base";
import React, { useState } from "react";
import { useEffect } from "react";
import {View,Text, StyleSheet,TextInput ,TouchableOpacity,ScrollView} from  "react-native";
import CustumButton from "../../Components/CustumButton/CustumButton";


const data = require("../../assets/data/countries.json");
import SimpleTitle from "../../Shared/Simple-Title";


const Register = ()=>{
    const [pays,setPays] = useState([])


    useEffect(()=>{
        setPays(data)

        return function(){
            setPays([])
        }
    },[])

    return(
        <View style={{backgroundColor:"#f5f7f9",flex:1}}>

        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
            
                <View style={styles.header}>
                        <H1 style={styles.title}>Inscription</H1>
                        <Text style={styles.decription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum consequuntur, necessitatibus quia impedit nihil hic qui, porro id praesentium, eaque nisi in repellendus beatae. Ipsa minus fugit laborum ad!</Text>
                </View>
                <Form>
                    <SimpleTitle padd={10} marg={10} text="Détails personnel"/>
                    <View style={styles.gender}>
                        <View style={{flexDirection:"row"}}>
                            <CheckBox style={styles.custumChecked} checked={true} color="#fc8080"/>
                            <Text>Homme</Text>
                        </View>

                        <View style={{flexDirection:"row"}}>
                            <CheckBox style={styles.custumChecked} checked={false} color="#fc8080"/>
                            <Text>Femme</Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <TextInput placeholder="Nom" style={styles.input}/>
                        <TextInput placeholder="Prenom" style={styles.input}/>
                        <TextInput placeholder="Nom utilisateur" style={styles.input}/>
                        <TextInput placeholder="Mot de passe" style={styles.input}/>
                        <TextInput placeholder="Mot de passe confirmé" style={styles.input}/>
                        
                    </View>
                    <SimpleTitle padd={10} marg={10} text="Localité"/>
                    <Picker
                    
                        style={styles.picker}
                        placeholder="Select your favorite programming language"
                        mode="dropdown"
                        >
                        {pays.map((pys)=>(
                            <Picker.Item key={pys.code} label={pys.name} value={pys.code} />
                        ))}
                    
                    </Picker>
                    <SimpleTitle padd={10} marg={10} text="Statut"/>
                    <View style={styles.gender}>
                        <View style={{flexDirection:"row"}}>
                            <CheckBox style={styles.custumChecked} checked={true} color="#fc8080"/>
                            <Text>Entreprise</Text>
                        </View>

                        <View style={{flexDirection:"row"}}>
                            <CheckBox style={styles.custumChecked} checked={false} color="#fc8080"/>
                            <Text>Freelancer</Text>
                        </View>
                    </View>

                    
                </Form>
                
                
            </ScrollView> 
        </View>

            <View style={styles.bottomView}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                        <CustumButton text="S'inscrire"/>
                </View>
                <View style={styles.add_account}>
                    <Text style={styles.button_text}>Vous avez dejà un compte ? 
                        
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.button_text}>Se connecter</Text>
                    </TouchableOpacity>
                </View>
            </View>              
        </View>


        
    )
}

const styles = StyleSheet.create({
    container:{
        height:"80%",
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
    custumChecked:{
        color:"#fc8080",
        borderRadius:10,
        padding:.1,
        marginRight:20
    },
    gender:{
        flexDirection:"row",
        width:"100%",
        height:40,
        justifyContent:"flex-start",
        alignItems:"center"
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
    picker:{
        height:30,
        borderWidth:4,
        width:"60%",
    },
    button_text:{
        color:"white",
        fontSize:16,
    },
    add_account:{
        backgroundColor:"#352961",
        width:"100%",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10,
        marginTop:"6%"
       
    },
    coneText:{
        color:"white",
        fontSize:16,
    },
    bottomView:{
        flex:1,
        backgroundColor:"#FFF",
        flexDirection:"column",
        justifyContent:"flex-end",  
    }
})

export default Register