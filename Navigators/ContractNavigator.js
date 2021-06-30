
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Service from "../Screens/Services/Services";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Contract"
                component={Service}
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

export default function ContractNavigator(){
    return <MyStack/>
}