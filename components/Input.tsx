import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

interface Props {
    icon: string
    placeholder: string
    onChangeText: (text: string) => void
}

export default function Input(props: Props) {
  return (
    <View>
        <View>
            <Ionicons name={props.icon} size={22} color="#555"/>
        </View>
        <View>
            <TextInput placeholderTextColor="#555" placeholder={props.placeholder} onChange={props.onChangeText}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})