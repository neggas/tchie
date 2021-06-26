import React from "react";
import {View,Text,TextInput,Pressable} from "react-native";
import styles from "./login-styles";
import AuthHeader from "../../Components/AuthHeader/AuthHeader";

const Login = ()=>{
    return(
       <View style={styles.login_container}>
            <View style={styles.container}>
                <AuthHeader/>

                <View style={styles.info}>
                    <TextInput placeholder="Nom utilisateur" style={styles.input}/>
                    <TextInput placeholder="Mot de passe " style={styles.input}/>
                </View>

                <View style={styles.connect}>
                    <Pressable style={styles.button}>
                        <Text style={styles.button_text}>Se connecter</Text>
                    </Pressable>

                    <Pressable>
                        <Text style={{color:"#ccc"}}>Mot de passe oublié ?</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.bottom_container}>
                <View style={styles.add_account}>
                    <Text style={styles.button_text}>Vous n'avez pas un compte ? </Text>
                    <Pressable>
                        <Text style={styles.button_text}>S'inscrire</Text>
                    </Pressable>
                </View> 
            </View>

       </View>
       
    )
}

export default Login;