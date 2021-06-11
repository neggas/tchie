import React from "react";
import {View,Text,StyleSheet,FlatList, Dimensions, ScrollView} from "react-native";
import {Left,Right,Button,H3} from "native-base";
import JobCard from "../Jobs/Job-card"
import Search from "../Jobs/Search-container";
import PersonnelCard from "../Jobs/Personnel-card";

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
                <View style={styles.jobs}>
                    <Left>
                        <H3 style={styles.left}>Service/Jobs</H3>
                        <View style={styles.trait}></View>
                    </Left>

                    <Right>
                        <Button transparent >
                            <Text style={styles.right}>Voir plus</Text>
                        </Button>
                    </Right>
                </View>
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
            <View style={styles.jobs}>
                        <Left>
                            <H3 style={styles.left}>Personnels</H3>
                            <View style={styles.trait}></View>
                        </Left>

                        <Right>

                            <Button transparent >
                                <Text style={styles.right}>Voir plus</Text>
                            </Button>

                        </Right>
                </View>
            <View style={{flex:2,width:"100%"}}>
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
    jobs:{
        flexDirection:"row",
        marginTop:10,
        padding:10,
        zIndex:99999
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