import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 8,
    },
    logo: {
        width: '100%',
        height: 128,
        resizeMode: 'contain',
    },
    listWrapper: {
        flex: 1,
    },
    itemButton: {
        height: 40,
        marginTop: 8,
        paddingHorizontal: 8,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: theme.colors.primary,
        borderRadius: 8,
    },
    itemText: {
        fontFamily: 'Regular',
        fontSize: 20,
        color: theme.colors.text,
    },
    label: {
        fontFamily: 'Regular-Italic',
    },
});
