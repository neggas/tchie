
import React from "react";
import {View,StyleSheet, ScrollView, Dimensions,Text} from "react-native";
import Titre from "../../Shared/Titre";
import CategorieCard from "./Categorie-card";
const {width,height} = Dimensions.get("window")
const tems = [1,2,3,4,5,6,7,8]


const CategorieEntreprise = ()=>{
    return(
        <View style={styles.container}>
            <Titre titre="Entreprise par entreprise"/>

            <View style={{height:(height/2)+(width/2 - 20),width:"100%",marginTop:5}}>
                <ScrollView
                    
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.categories}>
                        {tems.map((te)=>(
                            <CategorieCard key={te.toLocaleString()}/>
                        ))}
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    categories:{
       
        flexDirection:"row",
        flexWrap:"wrap",
    }
})
export default CategorieEntreprise;