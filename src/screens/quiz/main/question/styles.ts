import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../../styles/theme';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    root: {
        width: SCREEN_WIDTH,
        padding: 16,
    },
    paper: {
        padding: 16,
        elevation: 4,
        borderRadius: 12,
        backgroundColor: '#FFF',
    },
    title: {
        fontFamily: 'Medium',
        fontSize: 20,
        color: theme.colors.text,
    },
    optionContainer: {
        marginTop: 12,
        height: 48,
        justifyContent: 'center',
        paddingHorizontal: 8,
        borderRadius: 12,
        elevation: 8,
    },
    optionText: {
        fontFamily: 'Regular',
        fontSize: 18,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        backgroundColor: '#fff',
        elevation: 6,
        borderRadius: 8,
    },
    paginationButton: {
        padding: 8,
        height: 40,
        justifyContent: 'center',
    },
    paginationText: {
        fontFamily: 'Medium',
        fontSize: 18,
        color: theme.colors.text,
    },
});
