import React from "react";

import {View,Text,TouchableOpacity} from "react-native";
import {ListItem,Left,Thumbnail,Body,Right} from "native-base"
import styles from "./inbox-item-style"

const InboxItem = ()=>{
    return(
             <ListItem avatar>
               
                    <Left>
                        <Thumbnail

                            circle
                            small
                            source={require("../../assets/p1.png")}
                        />
                    </Left>

                    <Body>
                        <Text style={styles.name}>Fabrice houndjenoukon</Text>
                        <Text style={styles.message}>Lorem ipsum dolor sit, amet consectetur adipisicing...</Text>
                    </Body>

                    <Right>
                        <Text style={styles.heure}>12h25</Text>
                    </Right>
              
               
            </ListItem>
    )
}

export default InboxItem;