import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    reset_container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#f5f7f9"
    },
    firstChild:{
       
        height:"90%",
        width:"100%",
        padding:10,
        justifyContent:"center",
        alignItems:"center"

       
    },
    input:{
        width:"100%",
        height:50,
        borderColor:"#352961",
        borderWidth:1,
        padding:8,
        marginTop:30,
        backgroundColor:"white",
        justifyContent:"center"
    },
    lastChild:{
        flex:1,
        width:"100%",
        justifyContent:"flex-end"
    }

})

export default styles;