
import {Icon,Button } from "native-base";
import React from "react";
import {View,Text,StyleSheet,TextInput} from "react-native";


const Search = ()=>{
    return(
       
            <View style={styles.header}>
                <TextInput
                    style={styles.input}
                    placeholder="UI Designer"
                />

                <Button transparent style={styles.iconButton}>
                    <Icon name="ios-search" style={{color:"white"}}/>
                </Button>

            </View>
       
    )
}

const styles = StyleSheet.create({
    
    header:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    input:{
        height:40,
        width:"85%",
        backgroundColor:"white",
        borderRadius:20,
        padding:10,
        color:"#3529614b"
    },
    iconButton:{
        backgroundColor:"#352961",
        justifyContent:"center",
        alignItems:"center",
        height:40,
        borderRadius:15,
    }
  
    
})

export default Search;
