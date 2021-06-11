import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity,Text} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Right, View } from "native-base";

const {width} = Dimensions.get("window")

const CategorieCard = ()=>{
    return(
        <TouchableOpacity style={styles.card}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name="chalkboard-teacher" size={30} color="#fc8080" />
            </View>

                
            <View style={styles.bottomContainer}>
                <Text style={styles.titre}>Education</Text>
                <Text style={styles.desc}>10 services</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    card:{
        width:width/2 - 20,
        height:width/2,
        marginTop:5,
        padding:10,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"white",
        marginBottom:5,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        elevation:5
    },
    iconContainer:{
        position:"absolute",
        top:"30%",
        backgroundColor:"#fc80803b",
        padding:8,
        borderRadius:10
    },
    bottomContainer:{
        position:"absolute",
        bottom:"10%",
        backgroundColor:"#f5f7f9" ,
        borderRadius:5,
        width:"100%",
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:5,
        zIndex:99999
    },
    titre:{
        fontSize:16,
        color:"#352961",
        fontWeight:"800"
    },
    desc:{
        color:"#3529617b",
    }
})
export default CategorieCard;