import { Form, H1,Item,CheckBox } from "native-base";
import React from "react";
import {View,Text, StyleSheet} from  "react-native";

import SimpleTitle from "../../Shared/Simple-Title";


const Register = ()=>{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <H1 style={styles.title}>Inscription</H1>
                <Text style={styles.decription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum consequuntur, necessitatibus quia impedit nihil hic qui, porro id praesentium, eaque nisi in repellendus beatae. Ipsa minus fugit laborum ad!</Text>
            </View>
            <Form>
                <SimpleTitle/>
                <View style={{width:60,backgroundColor:"red",height:10}}>
                    <View style={{flexDirection:"row"}}>
                        <CheckBox style={styles.custumChecked} checked={true} color="#fc8080"/>
                        <Text>Homme</Text>
                    </View>
                </View>
            </Form>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    
        backgroundColor:"#f5f7f9",
        padding:10
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
        padding:.1
    }
})

export default Register