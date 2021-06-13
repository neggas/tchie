
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ServicesContainer from "../Screens/Services/Service-container";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Service"
                component={ServicesContainer}
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

export default function ServiceNavigator(){
    return <MyStack/>
}