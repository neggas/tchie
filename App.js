

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View,StyleSheet,Text,DrawerLayoutAndroid,Button } from 'react-native';
import HomeContainer from "./Screens/Home/Home-container";
import ServicesContainer from "./Screens/Services/Service-container";
import JobsContainer from "./Screens/Jobs/Jobs-container";
import CategorieEntreprise from "./Screens/CategorieEntreprise/CategorieEntreprise-Container"
import Entreprise from "./Screens/Entreprise/Entreprise-container";
import Header from "./Shared/Header/Header-container";
import Service from './Screens/Services/Services';
import JobDetails from './Screens/Jobs/JobDetails';
import CompagnyDetails from './Screens/Entreprise/CompagnyDetails';
import ProfilDetails from './Screens/Profil/ProfilDetails';
import Login from "./Screens/Login/Login-container";
import Inbox from './Screens/Inbox/Inbox_container';
import Reset from './Screens/Reset/ResetContainer';
import Register from "./Screens/Register/Register-container";
import MessagesInbox from "./Screens/Messages/InboxContainer"
import JobForm from './Screens/Jobs/JobForm';
import SideBar from './Shared/SideBar';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigationView from "./Shared/Drawer";
import Main from "./Navigators/Main";
import { useRef } from 'react';

export default function App() {
 
  const [start,setStart] = useState(false)
  const [drawerPosition,setDrawerPosition] = useState("left")
  const drawer = useRef(null);
  
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );


    return(
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={DrawerNavigationView}
      >
        <View style={{height:"100%"}}>
          <Header/>
          <JobForm/>
        </View>
      </DrawerLayoutAndroid>
    )
 
}

