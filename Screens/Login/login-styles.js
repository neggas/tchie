import {Dimensions, StyleSheet} from "react-native";
const {height} = Dimensions.get("window")

export default styles = StyleSheet.create({
    login_container: {
        flex:1,
        flexDirection:"column"
        
    },
    container:{
        alignItems:"center",
        padding:10,
        width: "100%",
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
    info:{
        width:"100%",
        height:250,
        justifyContent:"center",
       
    },
    connect:{
        width:"100%",
        alignItems:"center",
        height:120,
        justifyContent:"space-between"
    },button:{
        justifyContent:"center",
        backgroundColor:"#352961",
        borderColor:"white",
        width:180,
        alignItems:"center",
        borderRadius:15,
        height:40,
        marginTop:30
    },
    button_text:{
        color:"white",
        fontSize:16,
    },
    bottom_container:{
        flex:1,
        justifyContent:"flex-end"
    },
    add_account:{
        backgroundColor:"#352961",
        width:"100%",
        paddingTop: 10,
        paddingBottom: 10,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-around",
    }
})