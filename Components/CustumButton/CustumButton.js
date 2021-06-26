import React from "react";
import {TouchableOpacity,Text} from "react-native";
import styles from "./custtumButton-styles"


const CustumButton = ({text})=>{
    return(
        <TouchableOpacity
            style={styles.button}>
            <Text style={styles.button_text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustumButton;