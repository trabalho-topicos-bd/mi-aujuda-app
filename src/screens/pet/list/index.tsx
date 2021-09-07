/* eslint-disable no-nested-ternary */
import LottieView from 'lottie-react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, Text, ToastAndroid, View} from 'react-native';
import {Layout} from '../../../components/layout';
import {LoadingLottie} from '../../../components/loading';
import {petServices} from '../../../services/pet';
import {theme} from '../../../styles/theme';
import {PetData} from '../../../types/pet';
import {PetItem} from './pet-item';
import {styles} from './styles';

export const PetListScreen = (): JSX.Element => {
    const [pets, setPets] = useState<PetData[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const {_getAll} = petServices();

    const handleGetData = useCallback(async () => {
        try {
            const data = await _getAll();

            setPets(data);
        } catch (err) {
            ToastAndroid.show(String(err), ToastAndroid.LONG);
        } finally {
            setLoading(false);
        }
    }, [_getAll]);

    useEffect(() => {
        handleGetData();
    }, [handleGetData]);

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);

        await handleGetData();

        setRefreshing(false);
    }, [handleGetData]);

    return (
        <Layout title="Pets para adoção" disableScroll>
            {loading ? (
                <LoadingLottie />
            ) : pets.length > 0 ? (
                <FlatList
                    data={pets}
                    renderItem={({item}) => <PetItem key={`pet-${item.id}`} item={item} />}
                    keyExtractor={({id}) => `pet-${id}`}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                    columnWrapperStyle={styles.list}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            colors={[theme.colors.primary]}
                        />
                    }
                />
            ) : (
                <View style={styles.lottieContainer}>
                    <LottieView
                        source={require('../../../../assets/lottie/none-found.json')}
                        autoPlay
                        loop
                        style={styles.noneLottie}
                    />
                    <Text style={styles.lottieText}>Nenhum pet encontrado</Text>
                </View>
            )}
        </Layout>
    );
};
