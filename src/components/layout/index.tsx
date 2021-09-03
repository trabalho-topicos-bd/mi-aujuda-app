import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {Header, HeaderProps} from './header';
import {styles} from './styles';

interface LayoutProps extends HeaderProps {
    children: React.ReactNode;
}

export const Layout = ({children, title}: LayoutProps): JSX.Element => (
    <ImageBackground source={require('../../../assets/img/pattern.jpg')} style={styles.root}>
        <Header title={title} />
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
            {children}
        </ScrollView>
    </ImageBackground>
);
