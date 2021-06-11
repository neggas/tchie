import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,StyleSheet } from 'react-native';
import HomeContainer from "./Screens/Home/Home-container";
import ServicesContainer from "./Screens/Services/Service-container";
import JobsContainer from "./Screens/Jobs/Jobs-container";
import Header from "./Shared/Header/Header-container";

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"#f6f7f9"}}>
       <Header/>
        <StatusBar backgroundColor="white"/>
        <ServicesContainer/>
     
    </View>
  );
}



