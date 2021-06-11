
import React from "react";
import {View,Text,TouchableOpacity,StyleSheet, Dimensions} from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Left,Right} from "native-base";

const {width} = Dimensions.get("window");
const JobCard = ()=>{
    return(
        <TouchableOpacity style={styles.container}>
            <View styles={styles.job__title}>
                <Text style={styles.text}>Web Designer UX</Text>
                <Fontisto name="favorite" size={18} color="white"  style={styles.font}/>
            </View>
            <View style={styles.priceView}>
                <Text style={{color:"white"}}>2000000</Text>
                <Text style={styles.month}>3 Mois</Text>
            </View>
            
            <View style={styles.desc}>
                <View  style={styles.icon}>
                    <MaterialCommunityIcons 
                        name="fountain-pen" 
                        size={20} color="white"/>
                </View>
                <Text style={{color:"white"}}>Mechant mechant</Text>
            </View>
           
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        width:(width/2)+15,
        height:130,
        borderRadius:15,
        padding:15,
        backgroundColor:"#352961",
        margin:2
    },
    job__title:{
        flex:1,
        flexDirection:"row",
        width:"100%",
    },
    text:{
        position:"absolute",
        color:"white",
        fontWeight:"700",
        top:5
    },
    font:{
        left:"90%",
        top:8
    },
    priceView:{
       
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:20
    },
    month:{
        color:"white",
        backgroundColor:"#fa8072",
        opacity:.4,
        padding:2
    },
    desc:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    icon:{
        backgroundColor:"#ffffff4b",
        padding:2,
        borderRadius:6
    }
})
export default JobCard;