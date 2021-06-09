
import React from "react";
import { View,StyleSheet,Text, Dimensions,ImageBackground,TextInput } from "react-native";
import {H3} from "native-base";

const {width} = Dimensions.get("window")
const Search = ()=>{
    return(
        <View style={styles.search__container}>
            <View style={styles.illustartion}>
                <View  style={styles.input_zone}>
                    <ImageBackground
                        style={styles.bgImage}
                        source={require("../../assets/circle.png")}>
                        <H3 style={styles.title}>
                            Recherche rapide
                        </H3>
                        <Text style={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Text>
                    </ImageBackground>
                </View>
                <View style={styles.image_zone}>
                    <ImageBackground
                        style={styles.bgImage}
                        source={require("../../assets/finder_icon.png")}>

                    </ImageBackground>
                </View>
            </View>
            <TextInput placeholder="useless placeholder" style={styles.homeInput} />
        </View>
    )
}



const styles = StyleSheet.create({
    homeInput: {
        width: "100%",
        position: "absolute",
        bottom: 5,
        zIndex: 9999,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 6,
        paddingBottom: 6,
        backgroundColor: "#f5f5f5",
        borderTopColor: "#352961",
        borderWidth: 5,
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRadius: 2,
    },

    search__container:{
        backgroundColor:"#fff",
        height:160,
        width:width-30,
        elevation:5,
        borderRadius:20,
    },
    illustartion:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    input_zone:{
        width:"54%",
        height:"100%",
        zIndex:-10,
        position:"relative",
      
       
       
    },
    image_zone:{
        width:"48%",
        height:"100%",
        position:"relative",
        bottom:30,
      
        
    },
    bgImage:{
        flex: 1,
        resizeMode: "cover",
        borderTopLeftRadius: 20,
        overflow: 'hidden',
    },
    title:{
        fontWeight:"700",
        color:"#352961",
        fontSize:18,
        margin:10
    },
    desc:{
        padding:2,
        bottom:10,
        left:8,
        color:"#3529614b"
    }
})

export default Search;