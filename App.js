import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import HomeContainer from "./Screens/Home/Home-container";
import ServicesContainer from "./Screens/Services/Service-container";
import JobsContainer from "./Screens/Jobs/Jobs-container";
import CategorieEntreprise from "./Screens/CategorieEntreprise/CategorieEntreprise-Container"
import Entreprise from "./Screens/Entreprise/Entreprise-container";
import Header from "./Shared/Header/Header-container";

export default function App() {
 
  const [start,setStart] = useState(false)
  return start ?  (
    <View style={{flex:1,backgroundColor:"#f6f7f9"}}>
       <Header/>
        <StatusBar backgroundColor="white"/>
        <JobsContainer/>
    </View>
  ) : (
    <HomeContainer setStart={setStart}/>
  )
}



