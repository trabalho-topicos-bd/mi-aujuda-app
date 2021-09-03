import {StyleSheet} from 'react-native';
import {theme} from '../../../styles/theme';
import {lightenColor} from '../../../util/helpers';

export const styles = StyleSheet.create({
    root: {
        height: 64,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: lightenColor(theme.colors.primary, 90),
        // elevation: 12,
    },
    title: {
        fontFamily: 'Regular',
        fontSize: 26,
        color: '#FFFFFF',
    },
});
