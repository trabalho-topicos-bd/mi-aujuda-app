import {StyleSheet} from 'react-native';
import {theme} from '../../../styles/theme';

export const styles = StyleSheet.create({
    redoBox: {
        padding: 16,
        paddingBottom: 0,
        alignSelf: 'flex-end',
    },
    redoText: {
        fontFamily: 'Medium',
        fontSize: 18,
        color: theme.colors.primary,
    },
    listContainer: {
        paddingBottom: 16,
    },
    list: {
        paddingHorizontal: 16,
        paddingTop: 16,
        justifyContent: 'space-between',
    },
});
