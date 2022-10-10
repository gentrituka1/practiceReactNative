import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Fruit } from '../data'



export default function Listitem(item: Fruit) {
  return (
    <View style={styles.container}>
        <View style={{
            ...styles.listItem,
            alignItems: "flex-start"
        }}>
            <Text>{item.name}</Text>
        </View>
        <View style={{...styles.listItem, alignItems: "flex-end" }}>
            <Text>{item.price}</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: 1.05,
        borderBottomWidth: 1,
        borderBottomColor: "#aaa",
        marginVertical: 10
    },
    listItem: {
        flex: 0.5,
        justifyContent: "center"
    },
    item: {
        padding: 5,
        fontWeight: "600",
        fontSize: 16
    }
})