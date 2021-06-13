
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import JobsContainer from "../Screens/Jobs/Jobs-container";
import JobDetails from "../Screens/Jobs/JobDetails";
import ProfilDetails from "../Components/ProfilDetails";
import { title } from "min-document";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={JobsContainer}
                options={{
                    headerShown:false,
                  
                }}
            />

            <Stack.Screen
                name="Detail job"
                component={JobDetails}
                options={{
                    headerShown:true,
                    title:""
                }}
            /> 

            <Stack.Screen
                name="Detail profil"
                component={ProfilDetails}
                options={{
                    headerShown:true,
                    title:""
                }}
            /> 
           
        </Stack.Navigator>
    )
}

export default function HomeNavigator(){
    return <MyStack/>
}