import {Foundation} from '@expo/vector-icons';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from '../../../components/image';
import {Layout} from '../../../components/layout';
import {LoadingLottie} from '../../../components/loading';
import {petServices} from '../../../services/pet';
import {PetData} from '../../../types/pet';
import {PetScreenRouteProp} from '../../../types/router';
import {sizes, species} from '../../../util/constants';
import {getImageUrl} from '../../../util/helpers';
import {styles, SCREEN_WIDTH} from './styles';

interface PetDetailScreenProps {
    route: PetScreenRouteProp<'Detail'>;
}

export const PetDetailScreen = ({route}: PetDetailScreenProps): JSX.Element => {
    const {params} = route;

    const [pet, setPet] = useState<PetData | null>(null);
    const [loading, setLoading] = useState(true);

    const {_getOne} = petServices();

    const handleGetData = useCallback(async () => {
        try {
            const data = await _getOne(params.id);

            setPet(data);
        } catch (err) {
            ToastAndroid.show(String(err), ToastAndroid.LONG);
        } finally {
            setLoading(false);
        }
    }, [_getOne, params.id]);

    useEffect(() => {
        handleGetData();
    }, [handleGetData]);

    return loading || !pet ? (
        <LoadingLottie />
    ) : (
        <Layout title={pet.name}>
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={SCREEN_WIDTH}
                    decelerationRate={0.9}>
                    <Image source={{uri: getImageUrl(pet.images[0])}} style={styles.image} />
                    {pet.images.slice(1).map((image, index) => (
                        <Image
                            key={`pet-${pet.id}-image-${index}`}
                            source={{uri: getImageUrl(image)}}
                            style={styles.image}
                        />
                    ))}
                </ScrollView>
                <Text style={styles.name}>Nome: {pet.name}</Text>
                <View style={styles.row}>
                    <Text style={styles.text}>Gênero: {pet.gender === 0 ? 'Macho' : 'Fêmea'}</Text>
                    <Foundation
                        name={pet.gender === 0 ? 'male-symbol' : 'female-symbol'}
                        color={pet.gender === 0 ? '#3333ff' : '#bf61b7'}
                        size={24}
                        style={{marginTop: 12, marginLeft: 12}}
                    />
                </View>
                <Text style={styles.text}>Espécie: {species.find(el => el.value === pet.species)?.label}</Text>
                <Text style={styles.text}>Raça: {pet.breed}</Text>
                <Text style={styles.text}>
                    Idade: {Math.floor(pet.age / 12)} ano(s) e {pet.age % 12} mese(s)
                </Text>
                <Text style={styles.text}>Porte: {sizes.find(el => el.value === pet.size)?.label}</Text>
                <Text style={styles.text}>Castrado(a): {pet.castrated ? 'Sim' : 'Não'}</Text>
            </View>
        </Layout>
    );
};
