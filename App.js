import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Service from './Components/Services';
import JobDetails from './Components/JobDetails';
import CompagnyDetails from './Components/CompagnyDetails';
import ProfilDetails from './Components/ProfilDetails';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Les differents ecrans */}
      
      <Service />
      {/* <JobDetails/> */}
      {/* <CompagnyDetails/> */}
      {/* <ProfilDetails/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
