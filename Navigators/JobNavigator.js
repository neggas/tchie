
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import JobsContainer from "../Screens/Jobs/Jobs-container";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Service"
                component={JobsContainer}
                options={{
                    headerShown:false
                }}
            />
{/* 
            <Stack.Screen
                name="Detail product"
                component={DetailsProduct}
                options={{
                    headerShown:false
                }}
            /> */}
           
        </Stack.Navigator>
    )
}

export default function JobNavigator(){
    return <MyStack/>
}