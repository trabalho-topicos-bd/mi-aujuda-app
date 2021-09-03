import React, {useCallback} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import {items} from './data';
import {Routes} from '../../types/router';
import {styles} from './styles';

export const DrawerContent = ({navigation}: DrawerContentComponentProps): JSX.Element => {
    const handleNavigate = useCallback(
        (to: keyof Routes) => {
            navigation.navigate(to);
        },
        [navigation],
    );

    return (
        <View style={styles.root}>
            <Image source={require('../../../assets/img/miaujuda.png')} style={styles.logo} />
            <View style={styles.listWrapper}>
                {items.map(el => (
                    <TouchableOpacity
                        key={`drawer-item-${el.to}`}
                        onPress={() => handleNavigate(el.to)}
                        style={styles.itemButton}>
                        <Text style={styles.itemText}>{el.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.label}>v1.0.0</Text>
        </View>
    );
};
