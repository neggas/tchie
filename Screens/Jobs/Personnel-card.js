
import { View,Text,StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import { ListItem,Left,Thumbnail,Body } from "native-base";

const PersonnelCard = ()=>{
    return(
        
            <TouchableOpacity >
                <View style={styles.listItem}>
                  
                        <Thumbnail
                            circle
                            source={require("../../assets/bg.png")}
                        />

                        <View style={styles.body}>
                            <Text style={{fontSize:12}}>Triel App</Text>
                            <Text style={styles.fonction}>Développeur Web</Text>
                            <Text style={styles.desc}>Motivation</Text>
                        </View>
                    
                </View>
            </TouchableOpacity>
       
        
    )
}


const styles = StyleSheet.create({
    listItem:{
        flexDirection:"row",
        backgroundColor:"white",
        width:"100%",
        padding:8,
        borderRadius:25,
        marginLeft:5,
        marginBottom:18,
    },
    body:{
        marginLeft:10
    },
    fonction:{
        fontWeight:"700",
        color:"#352961"
    },
    desc:{
        fontSize:12,
        color:"#3529614b"
    }
})
export default PersonnelCard;