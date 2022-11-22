import React, { useState } from "react";
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import { HoldItem } from "react-native-hold-menu";
import colors from "../assets/Colors";
import {format} from 'date-fns'

// Hold Menu Items
const MenuItems = [
    { text: 'Complete' },
    { text: 'Due Date' },
    { text: 'Create Reminder' },
    { text: 'Tag' }
]

const Task = (props) => {
    // set the difficulty of the items
    const [dif, setDif] = useState(null)

    // set the due date for each item
    var date = format(new Date(),'mm/dd')
    const [dueDate, setDueDate] = useState(date)

    // set the dueDate  
    const handleDueDate = (date) => {
        setDueDate(date)
    }



    {/*change taskDif */ }
    const handleDif = (dif) => {
        // if taskDif = 2 => 0
        // else +1
        if (dif === null)
            setDif('low')
        else if (dif === 'low')
            setDif('mid')
        else if (dif === 'mid')
            setDif('high')
        else {
            setDif(null)
        }
    }


    function getDif(dif) {
        if (dif === null)
            return { borderColor: colors.circular.gray }
        else if (dif === 'low')
            return { borderColor: colors.circular.green }
        else if (dif === 'mid')
            return { borderColor: colors.circular.yellow }
        else (dif === 'high')
        return { borderColor: colors.circular.red }
    }

    return (

        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <HoldItem items={MenuItems} menuAnchorPosition="top-left">
                    <TouchableOpacity style={styles.sqaure}></TouchableOpacity>
                </HoldItem>
                <Text style={styles.itemText}>{[props.text, '\n', dueDate, '\n', dif,]}</Text>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => handleDif(dif)}
                    style={[styles.circular, getDif(dif)]}></TouchableOpacity>
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
        maxWidth: '80%',
        color: colors.text,
        fontWeight: 'bold'
    },
    circular: {
        width: 20,
        height: 20,
        borderRadius: 9,
        borderWidth: 5,
        opacity: 0.8

    }
});

export default Task;