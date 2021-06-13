
import React from "react";
import { SafeAreaView,Image,StyleSheet } from "react-native";

const Header = ()=>{
    return (
        <SafeAreaView style={styles.header}>
            <Image source={require("../../assets/logo_small.png")} 
                resizeMode="contain"
                style={{height:40}}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        marginTop:10,
        padding:20,
        zIndex:9999999,
    }
})

export default Header;