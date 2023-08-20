import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import theme from '../../theme/theme'

interface PrimaryButtonProps {
    text: string;
    onPress?: () => void;
}

export const PrimaryButton = ({ text, onPress }: PrimaryButtonProps) => {
    return (
        <TouchableOpacity
            style={style.button}
            onPress={onPress}>
            <Text style={style.textbtn}>{text}</Text>
        </TouchableOpacity >
    )
}

const style = StyleSheet.create({
    textbtn: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: theme.fonts.bold,
    },
    button: {
        backgroundColor: '#40235E',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '3%',
        borderRadius: 8,
    },
})
