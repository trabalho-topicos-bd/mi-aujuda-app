import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

export const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Bold',
        color: theme.colors.text,
        marginBottom: 16,
    },
    paper: {
        elevation: 4,
        borderRadius: 16,
        overflow: 'hidden',
        marginTop: 16,
        width: '100%',
        height: 128,
    },
    sectionImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    text: {
        marginTop: 8,
        fontFamily: 'Regular',
        fontSize: 18,
        lineHeight: 26,
    },
});
