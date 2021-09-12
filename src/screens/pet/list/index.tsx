/* eslint-disable no-nested-ternary */
import LottieView from 'lottie-react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, Switch, Text, ToastAndroid, View} from 'react-native';
import {Layout} from '../../../components/layout';
import {LoadingLottie} from '../../../components/loading';
import {PetItem} from '../../../components/pet-item';
import {petServices} from '../../../services/pet';
import {theme} from '../../../styles/theme';
import {PetAllData} from '../../../types/pet';
import {PetScreenNavigationProp} from '../../../types/router';
import {styles} from './styles';

interface PetListScreenProps {
    navigation: PetScreenNavigationProp<'List'>;
}

export const PetListScreen = ({navigation}: PetListScreenProps): JSX.Element => {
    const [pets, setPets] = useState<PetAllData>({
        count: 0,
        rows: [],
    });
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [onlyAvailable, setOnlyAvailable] = useState(false);

    const {_getAll} = petServices();

    const handleGetData = useCallback(async () => {
        try {
            const data = await _getAll(onlyAvailable ? {adopted: true} : {});

            setPets(data);
        } catch (err) {
            ToastAndroid.show(String(err), ToastAndroid.LONG);
        } finally {
            setLoading(false);
        }
    }, [_getAll, onlyAvailable]);

    useEffect(() => {
        handleGetData();
    }, [handleGetData]);

    const handlePressItem = useCallback(
        (id: number) => {
            navigation.navigate('Detail', {id});
        },
        [navigation],
    );

    const handleRefresh = useCallback(async () => {
        setRefreshing(true);

        await handleGetData();

        setRefreshing(false);
    }, [handleGetData]);

    const onToggleSwitch = useCallback(async (available: boolean) => {
        setOnlyAvailable(available);
    }, []);

    return (
        <Layout title="Pets para adoção" disableScroll>
            {loading ? (
                <LoadingLottie />
            ) : pets.rows.length > 0 ? (
                <>
                    <View style={styles.switchRow}>
                        <Text style={styles.switchText}>Mostrar somente não-adotados</Text>
                        <Switch
                            value={onlyAvailable}
                            onValueChange={onToggleSwitch}
                            trackColor={{false: '#777', true: '#cdcdcd'}}
                            thumbColor={onlyAvailable ? '#0096c7' : '#effbff'}
                        />
                    </View>
                    <FlatList
                        data={pets.rows}
                        renderItem={({item}) => (
                            <PetItem key={`pet-${item.id}`} item={item} handlePress={() => handlePressItem(item.id)} />
                        )}
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
                </>
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
