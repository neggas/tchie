import { Form } from "native-base";
import React from "react";
import {View,Text,TextInput} from "react-native"
import styles from "./reset-style";
import CustumButton from "../../Components/CustumButton/CustumButton";
import FixedContainer from "../../Components/FixedContainer/Fixed_container";

const Reset = ()=>{
    return(
        <View style={styles.reset_container}>
            <View style={styles.firstChild}>
               <Text style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nulla magni alias dolor, nostrum eligendi mollitia ad ullam fugit atque voluptatibus, qui illum magnam doloribus laborum eveniet aliquid delectus quaerat.</Text>
              
                <TextInput placeholder="Email" style={styles.input}/>
                <View style={{padding:25}}>
                    <CustumButton text="Réinitialiser le mot de passe"/>     
                </View>
                <Text>Mot de passe oublié ?</Text>
                   
            </View>
            <View style={styles.lastChild}>
                <FixedContainer/>
            </View>
        </View>
    )
}

export default Reset