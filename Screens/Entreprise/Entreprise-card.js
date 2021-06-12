
import React  from "react";
import { Dimensions, StyleSheet, Text,TouchableOpacity,View} from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 

const {height} = Dimensions.get("window")
const EntrepriseCard = ()=>{
    return(
       <TouchableOpacity style={styles.card} onPress={()=>console.log("mechant")}>
           <View style={styles.entreprise}>
               <View style={styles.box}></View>
               <View style={{marginLeft:10}}>
                   <Text style={styles.entrepriseNom}>AZO Comporation</Text>
                   <Text style={styles.dg}>Fabrice HounDjenoukon</Text>
               </View>
           </View>
           <View style={styles.zoneContainer}>
                <View style={styles.zone}>
                    <View style={styles.line}>
                        <EvilIcons name="location" size={24} color="#3529616b" style={{marginRight:5}}/>
                        <Text  style={styles.adress}>Plateau</Text>
                    </View>
                    <View style={styles.line}>
                        <EvilIcons name="location" size={24} color="#3529616b" style={{marginRight:5}}/>   
                        <Text style={styles.adress}>Adoble XD</Text>
                    </View>
                </View>
           </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        width:"100%",
        height:height/4,
        backgroundColor:"white",
        marginTop:10,
        borderRadius:15,
        flex:1,
        elevation:2,
        padding:20,
        justifyContent:"space-between"
    },
    entreprise:{
        
        height:"45%",
        flexDirection:"row"
    },
   
    box:{
        width:30,
        height:30,
        borderRadius:10,
        backgroundColor:"#ffe70c"
    },
    entrepriseNom:{
        fontSize:15,
        color:"#352961",
        fontWeight:"bold"
    },

    dg:{
        color:"#3529616b",
    },
    zoneContainer:{
        height:"55%",
    },
    zone:{
        width:"100%",
        height:"100%",
        borderRadius:12,
       
        backgroundColor:"#3529612b",
        justifyContent:"center"
    },
    line:{
        flexDirection:"row",
        margin:5
    },
    adress:{
        color:"#352961"
    }
})

export default EntrepriseCard;