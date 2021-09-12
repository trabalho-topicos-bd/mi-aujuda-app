import {StyleSheet} from 'react-native';
import {theme} from '../../../styles/theme';

export const styles = StyleSheet.create({
    root: {
        height: '100%',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Medium',
        color: theme.colors.text,
        textAlign: 'center',
    },
});
