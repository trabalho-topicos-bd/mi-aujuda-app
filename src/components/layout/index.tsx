import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header, HeaderProps} from './header';
import {styles} from './styles';

interface LayoutProps extends HeaderProps {
    children: React.ReactNode;
    disableScroll?: boolean;
}

export const Layout = (props: LayoutProps): JSX.Element => {
    const {title, disableScroll = false, children} = props;

    return (
        <View style={styles.root}>
            <Header title={title} />
            {disableScroll ? (
                children
            ) : (
                <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
                    {children}
                </ScrollView>
            )}
        </View>
    );
};
