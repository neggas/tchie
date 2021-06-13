
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import CategorieEntreprise from "../Screens/CategorieEntreprise/CategorieEntreprise-Container";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Compagny"
                component={CategorieEntreprise}
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

export default function CompagnyNavigator(){
    return <MyStack/>
}