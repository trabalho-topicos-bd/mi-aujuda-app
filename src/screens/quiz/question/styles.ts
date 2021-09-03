import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../styles/theme';
import {lightenColor} from '../../../util/helpers';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    root: {
        width: SCREEN_WIDTH - 32,
        padding: 8,
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
        marginTop: 16,
        height: 48,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: lightenColor(theme.colors.text, 90),
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    optionText: {
        fontFamily: 'Regular',
        fontSize: 18,
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    paginationText: {
        fontFamily: 'Medium',
        fontSize: 18,
        color: theme.colors.text,
        textDecorationLine: 'underline',
    },
});
