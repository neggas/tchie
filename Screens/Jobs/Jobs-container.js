import React from "react";
import {View,Text,StyleSheet} from "react-native";
import {Left,Right,Container,H3} from "native-base";
import JobCard from "../Jobs/Job-card"
import Search from "../Jobs/Search-container";

const JobsContainer = ()=>{
    return (
        <View style={styles.jobs_container}>
            <Search/>
            <View style={styles.jobs}>
                <Left>
                    <H3 style={styles.left}>Service/Jobs</H3>
                    <View style={styles.trait}></View>
                </Left>

                <Right>
                    <Text style={styles.right}>mechant</Text>
                </Right>
            </View>

            <View style={{backgroundColor:"#ddd",width:"100%",height:100,padding:5}}>
                <JobCard/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    jobs_container:{
        height:"100%",
        marginTop:10,
        backgroundColor:"#f5f7f9",
        alignItems:"center"
    },
    jobs:{
        flexDirection:"row",
        marginTop:10,
        padding:10,
    },
    left:{
        fontSize:18,
        color:"#352961",
        fontWeight:"700"
    },
    right:{
        fontSize:14,
        color:"#fa8072",
        fontWeight:"700"
    },
    trait:{
        height:3,
        width:25,
        backgroundColor:"#fa8072"
    }
})

export default JobsContainer;