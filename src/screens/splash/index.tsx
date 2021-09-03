import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {theme} from '../../styles/theme';
import {lightenColor} from '../../util/helpers';
import {styles} from './styles';

export const SplashScreen = (): JSX.Element => {
    const gradientColors = [
        lightenColor(theme.colors.primary, 90),
        lightenColor(theme.colors.primaryDark, 90),
        lightenColor(theme.colors.primaryDarker, 90),
    ];

    return (
        <ImageBackground source={require('../../../assets/img/pets.jpg')} style={styles.root}>
            <LinearGradient colors={gradientColors} style={styles.overlay}>
                <Image source={require('../../../assets/img/miaujuda.png')} style={styles.image} />
            </LinearGradient>
        </ImageBackground>
    );
};
