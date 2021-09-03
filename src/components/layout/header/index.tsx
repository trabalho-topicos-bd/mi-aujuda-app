import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export interface HeaderProps {
    title: string;
}

export const Header = ({title}: HeaderProps): JSX.Element => (
    <View style={styles.root}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
