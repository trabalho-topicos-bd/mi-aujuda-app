import React from 'react';
import {Text} from 'react-native';
import {Layout} from '../../components/layout';
import {styles} from './styles';

export const AnimalsScreen = (): JSX.Element => (
    <Layout title="Realizar doação">
        <Text style={styles.title}>Animais</Text>
    </Layout>
);
