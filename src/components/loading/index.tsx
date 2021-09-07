import React from 'react';
import LottieView from 'lottie-react-native';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const LoadingLottie = (): JSX.Element => (
    <View style={styles.lottieContainer}>
        <LottieView
            source={require('../../../assets/lottie/loading.json')}
            autoPlay
            loop
            style={styles.loadingLottie}
        />
        <Text style={styles.lottieText}>Carregando...</Text>
    </View>
);
