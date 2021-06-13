
import React from "react";
import { StyleSheet,View,Text} from "react-native";
import {H3,Button} from "native-base"

const Titre = ({titre})=>{

    return(
        <View style={styles.jobs}>
            <View>
                <H3 style={styles.left}>{titre}</H3>
                <View style={styles.trait}></View>
            </View>

            <View>
                <Button transparent>
                    <Text style={styles.right}>Voir plus</Text>
                </Button>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    jobs:{
        flexDirection:"row",
        marginTop:10,
        padding:10,
        justifyContent:"space-between",
        alignItems:"center",
        zIndex:99999,
    },
    left:{
        fontSize:18,
        color:"#352961",
        fontWeight:"700",
    },
    right:{
        fontSize:14,
        color:"#fa8072",
        fontWeight:"700"
    },
    trait:{
        height:3,
        width:25,
        backgroundColor:"#fa8072"
    },
})


export default Titre;