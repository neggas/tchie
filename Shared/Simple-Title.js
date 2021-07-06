import React from "react";
import {View, StyleSheet} from "react-native";
import {H3} from "native-base"

const SimpleTitle = ({text, padd, marg})=>{
    return(
        <View style={[styles.jobs, {padding: padd, margin: marg}]}>
            <View>
                <H3 style={styles.left}>{text}</H3>
                <View style={styles.trait}></View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    jobs:{
        flexDirection:"row",
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