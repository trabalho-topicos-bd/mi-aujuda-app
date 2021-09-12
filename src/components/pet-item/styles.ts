import {Dimensions, StyleSheet} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        width: (SCREEN_WIDTH - 48) / 2,
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 12,
        overflow: 'hidden',
    },
    mainImage: {
        width: '100%',
        height: (SCREEN_WIDTH - 48) / 2,
    },
    content: {
        padding: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontFamily: 'Medium',
        fontSize: 20,
        color: '#444',
    },
    similarity: {
        marginTop: 4,
        fontFamily: 'Light',
        fontSize: 20,
        color: '#444',
    },
    similarityValue: {
        fontFamily: 'Bold-Italic',
        color: '#000',
    },
});
