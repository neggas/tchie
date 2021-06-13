import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeNavigator from "./HomeNavigator";
import ServiceNavigator from "./ServiceNavigator";
import CompagnyNavigator from "./CompagnyNavigator";
import ContractNavigator  from "./ContractNavigator";
import JobNavigator from "./JobNavigator";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
 

const Tab =  createBottomTabNavigator()


const Main = ()=>{
    return(

        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                inactiveTintColor:"#352961",
                activeTintColor:"#fc8080",
                keyboardHidesTabBar:true,
                style:{
                
                    backgroundColor:"#ffffff",
                    height:70,
                    borderTopRightRadius:20,
                    borderTopLeftRadius:20
                }
            }}

           
        >

        <Tab.Screen
         name="Job"
         component={ContractNavigator}
         options={{
             tabBarIcon:({color})=>(
            
                <MaterialCommunityIcons 
                    name="file-document-edit" 
                    size={30} 
                    color={color} />
             )
         }}/>

        <Tab.Screen
         name="Compagny"
         component={CompagnyNavigator}
         options={{
             tabBarIcon:({color})=>(
            
                <FontAwesome5 
                name="share-alt" 
                color={color}
                size={30} 
                 />
             )
         }}/>
        <Tab.Screen
         name="Home"
         component={HomeNavigator}
         options={{
             tabBarIcon:({color})=>(
            
                <MaterialIcons name="home-filled" 
                style={{position:"relative"}}
                size={30} color={color} />
             )
         }}/>

         <Tab.Screen
            name="Service"
            component={ServiceNavigator}
            options={{
                tabBarIcon:({color})=>(
               
                    <Ionicons name="person" 
                    style={{position:"relative"}}
                    size={30} color={color} />
                )
            }}/>

        <Tab.Screen
            name="Setting"
            component={ServiceNavigator}
            options={{
                tabBarIcon:({color})=>(
               
                    <Ionicons 
                    name="settings" 
                    style={{position:"relative"}}
                    size={30} color={color} />
                )
            }}/>

        </Tab.Navigator>
    )
}

export default Main;