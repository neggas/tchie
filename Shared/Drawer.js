import React from "react";
import {StyleSheet,View,Text} from "react-native";


const DrawerNavigationView = ()=>{
    return(
        <View style={styles.drawer}>
            <Text style={styles.titre}>Fais le disign ici</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    drawer:{
       justifyContent:"center",
       textAlign:"center"
    },
    titre:{
        fontSize:20,
        color:"red"
    }
})

export default DrawerNavigationView;