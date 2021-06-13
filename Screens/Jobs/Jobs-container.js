import React from "react";
import {View,Text,StyleSheet,FlatList, Dimensions, ScrollView} from "react-native";
import {Left,Right,Button,H3} from "native-base";
import JobCard from "../Jobs/Job-card"
import Search from "../Jobs/Search-container";
import PersonnelCard from "../Jobs/Personnel-card";
import Titre from "../../Shared/Titre";

const {width,height} = Dimensions.get("window")

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
const JobsContainer = ()=>{
    return (
        <View style={styles.jobs_container}>
            <Search/>
           
        
             <View style={{flex:1}}>

                <Titre titre={"Personnel/Jobs"}/>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={({item})=>(
                        <JobCard/>
                    )}
                    keyExtractor={item => item.id}
                />
                
            </View> 
            
            <Titre titre={"Personnel"}/>
            <View style={{flex:1.5,width:"100%"}}>
                
                <ScrollView 
                showsVerticalScrollIndicator={false}
                style={styles.personnel__container}>
                    <PersonnelCard/>
                    <PersonnelCard/>
                    <PersonnelCard/>
                    <PersonnelCard/>
                    <PersonnelCard/>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    jobs_container:{
        height:"100%",
        marginTop:10,
        backgroundColor:"#f5f7f9",
        alignItems:"center",
    },
    personnels:{
        
        marginTop:height/4
    },
    personnel__container:{
        width:"100%",
        padding:15,
        height:"53%",
        position:"absolute",
    }
   
})

export default JobsContainer;