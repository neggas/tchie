
import React from "react";
import {View,Text,Pressable} from "react-native";
import styles from "./fixed-style";

const FixedContainer = ()=>{
    return(
        <View style={styles.add_account}>
            <Text style={styles.button_text}>Vous n'avez pas un compte ? </Text>
            <Pressable>
                <Text style={styles.button_text}>S'inscrire</Text>
            </Pressable>
        </View>
    )
}

export default FixedContainer;