import React from "react";
import {View, StyleSheet} from "react-native";
import {H3} from "native-base"

const SimpleTitle = ()=>{
    return(
        <View style={styles.jobs}>
            <View>
                <H3 style={styles.left}>Détails personnel</H3>
                <View style={styles.trait}></View>
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
       
    },
    left:{
        fontSize:18,
        color:"#352961",
        fontWeight:"700",
    },
    trait:{
        height:4,
        width:25,
        backgroundColor:"#fa8072"
    },
})

export default SimpleTitle;