
import { Container,Header,Item,Icon,Button,Input } from "native-base";
import React from "react";
import {View,Text,StyleSheet,ScrollView} from "react-native";
import Search from "../../Shared/Search";
import PersonnelCard from "../Jobs/Personnel-card";


const ServicesContainer = ({navigation})=>{
    const services = [1,2,3,4,5,6,7,8,9,10];
    
    return(
        <View style={styles.container}>
            <Search/>
            <View style={styles.result}>
                <Text style={styles.result__text}>Voyer ce que nous trouvons pour vous</Text>
            </View>
            <View style={styles.result}>
                <Text style={styles.trouve}>12 services Trouvé</Text>
            </View>

          
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{marginTop:20}}>

                {services.map((serv)=>(
                    <PersonnelCard 
                    navigation={navigation}
                    key={serv.toLocaleString()}/>
                ))}
            </ScrollView>
           
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    result:{
        marginTop:20
    },
    result__text:{
        fontSize:14,
        fontWeight:"700",
        color:"#352961"
    },
    trouve:{
        color:"#3529614b"
    }
})

export default ServicesContainer;
