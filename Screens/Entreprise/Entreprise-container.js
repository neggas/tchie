
import React  from "react";
import { ScrollView, StyleSheet, Text,View} from "react-native";
import Search from "../../Shared/Search";
import Titre from "../../Shared/Titre";
import EntrepriseCard from "./Entreprise-card"

const Entreprise = ()=>{
    return(
        <View style={styles.container}>
           <Search/>
           <Titre titre="Entreprise par catégorie"/>
           <ScrollView
              showsVerticalScrollIndicator={false}
           >
            <EntrepriseCard/>
            <EntrepriseCard/>
            <EntrepriseCard/>
            <EntrepriseCard/>
            <EntrepriseCard/>
            <EntrepriseCard/>
           </ScrollView>
         
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1
    }
})

export default Entreprise;