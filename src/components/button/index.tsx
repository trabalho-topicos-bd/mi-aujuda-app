import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {TouchableOpacityProps, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {theme} from '../../styles/theme';

interface ButtonProps extends TouchableOpacityProps {
    text: string;
}

export const Button = ({text, ...rest}: ButtonProps): JSX.Element => {
    const gradientColors = [theme.colors.primary, theme.colors.primaryDark];

    return (
        <TouchableOpacity activeOpacity={0.9} style={styles.root} {...rest}>
            <LinearGradient colors={gradientColors} style={styles.gradient}>
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};
