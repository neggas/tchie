

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import HomeContainer from "./Screens/Home/Home-container";
import ServicesContainer from "./Screens/Services/Service-container";
import JobsContainer from "./Screens/Jobs/Jobs-container";
import CategorieEntreprise from "./Screens/CategorieEntreprise/CategorieEntreprise-Container"
import Entreprise from "./Screens/Entreprise/Entreprise-container";
import Header from "./Shared/Header/Header-container";
import Service from './Components/Services';
import JobDetails from './Screens/Jobs/JobDetails';
import CompagnyDetails from './Screens/Entreprise/CompagnyDetails';
import ProfilDetails from './Components/ProfilDetails';
import {NavigationContainer} from "@react-navigation/native";
import Main from "./Navigators/Main";

export default function App() {
 
  const [start,setStart] = useState(false)
 
  return start ? (
    <NavigationContainer>
      <Header/>
      <Main/>
    </NavigationContainer>
  ) : <HomeContainer setStart={setStart}/>
}

