import React from "react";
import {View,Text,TouchableOpacity,ScrollView, Pressable} from "react-native";
import styles from "./inbox-style";
import Search from "../../Shared/Search";
import InboxItem from "./Inbox-item";
const Inbox = ()=>{
    return(
        <View style={styles.inbox_container}>
            <Text style={styles.titre}>Inbox</Text>
            <Text style={styles.msg_num}>5 Messages</Text>
            <View style={styles.search}>
                <Search/>
            </View>

            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
                
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
            </ScrollView>
            
        </View>
    )
}

export default Inbox;