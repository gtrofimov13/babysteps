import React from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import colors from "../assets/Colors";

const Task = (props) => {
    
    return (
        <View style = {styles.item}>
            <View style={styles.itemLeft}>            
                <TouchableOpacity style={styles.sqaure}></TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.circular}></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.item,
        padding: 15,
        beforeRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    sqaure: {
        width: 10,
        height: 50,
        backgroundColor: colors.square,
        opacity: 0.7,
        marginRight: 15
    },
    itemText: {
        maxWidth:'80%',
        color: colors.text,
        fontWeight: 'bold'
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor: colors.circular,
        borderWidth: 3,
        opacity: 0.5

    }
});

export default Task;