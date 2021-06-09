import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,StyleSheet } from 'react-native';
import HomeContainer from "./Screens/Home/Home-container";
import JobsContainer from "./Screens/Jobs/Jobs-container";
import Header from "./Shared/Header/Header-container";

export default function App() {
  return (
    <View>
      <Header/>
      <JobsContainer/>
      <StatusBar backgroundColor="white"/>
    </View>
  );
}



