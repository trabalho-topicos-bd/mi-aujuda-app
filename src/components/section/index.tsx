import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface SectionProps {
    subtitle: string;
    children: React.ReactNode;
}

export const Section = ({subtitle, children}: SectionProps): JSX.Element => (
    <View style={styles.root}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {children}
    </View>
);
