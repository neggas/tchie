import { Button, View } from "native-base";
import React from "react";
import {Text,StyleSheet, Dimensions,Image, ImageBackground} from "react-native"
import {Buton} from "native-base"

const {height,width} = Dimensions.get("window")
const HomeContainer = ()=>{
    return(
        <View style={styles.container}>

            <ImageBackground source={require("../../assets/motif_bg.png")} style={styles.bg}>
                <Image source={require("../../assets/TCHIE.png")} style={styles.image__logo}/>
                

                <View style={styles.descripton}>
                    <Text style={styles.description__text}>Trouvez vos emplois ou des freelancer rapidement et facilement</Text>
                </View>

                <View style={styles.button__container}>
                    <Button  rounded style={styles.button__start}>
                        <Text style={styles.button__text}>Commencer</Text>
                    </Button>
                </View>
            </ImageBackground>
           
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#191970',
       
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },
    descripton:{
        position:"absolute",
        top: height/2+150,
        width:width-50,
    },
    description__text:{
        color:"#fff",
        textAlign:"center",
        fontWeight:"700"
    },
    button__container:{
        position:"absolute",
        top: height-120,
       
    },
    button__start:{
        justifyContent:"center",
        backgroundColor:"#fa8072",
        width:width/2,
    },
    button__text:{
        color:"white",
        textAlign:"center",
        fontWeight:"700"
    },
    
    image__logo:{
        width:165,
        height:120
    }
})
export default HomeContainer;