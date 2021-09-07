import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 16,
    },
    list: {
        paddingHorizontal: 16,
        paddingTop: 16,
        justifyContent: 'space-between',
    },
    lottieContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingLottie: {
        width: 300,
        height: 400,
    },
    lottieText: {
        fontFamily: 'Medium',
        fontSize: 18,
        color: '#777',
    },
    noneLottie: {
        width: 300,
        height: 300,
    },
});
