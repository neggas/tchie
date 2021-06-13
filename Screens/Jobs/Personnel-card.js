
import { View,Text,StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import { Thumbnail, Right,Icon } from "native-base";

const PersonnelCard = (props)=>{
    const {navigation} = props
    return(
        
            <TouchableOpacity 
                onPress={()=>navigation.navigate("Detail profil")}
            >
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

                        <Right>
                            <Icon name='heart' style={styles.unlike}/>
                        </Right>
                    
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
    },
    unlike:{
        color:"#0000004b"
    },
    like:{
        color:"#fc8080"
    }
})
export default PersonnelCard;