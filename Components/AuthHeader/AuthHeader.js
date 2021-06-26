import React from "react";
import styles from "./authHeader-styles";
import {View,Text} from "react-native";

const AuthHeader = ()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Connexion</Text>
            <Text style={styles.decription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nostrum consequuntur, necessitatibus quia impedit nihil hic qui, porro id praesentium, eaque nisi in repellendus beatae. Ipsa minus fugit laborum ad!</Text>
        </View>
    )
}

export default AuthHeader;