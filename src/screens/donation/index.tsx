import React from 'react';
import {Text} from 'react-native';
import {Layout} from '../../components/layout';
import {styles} from './styles';

export const DonationScreen = (): JSX.Element => (
    <Layout title="Realizar doação">
        <Text style={styles.title}>Realizar doação</Text>
    </Layout>
);
