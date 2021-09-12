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
        height: 48,
        marginTop: 12,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 12,
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
