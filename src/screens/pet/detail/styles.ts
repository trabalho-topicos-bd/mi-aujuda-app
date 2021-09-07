import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../styles/theme';

export const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        elevation: 8,
    },
    image: {
        width: SCREEN_WIDTH - 56,
        height: SCREEN_WIDTH - 56,
    },
    name: {
        fontSize: 24,
        fontFamily: 'Medium',
        color: theme.colors.text,
        marginRight: 12,
        marginTop: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Medium',
        color: '#777',
        marginTop: 12,
    },
});
