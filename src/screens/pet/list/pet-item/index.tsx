import React, {useCallback, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Foundation} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/core';
import {Image} from '../../../../components/image';
import {PetData} from '../../../../types/pet';
import {getImageUrl} from '../../../../util/helpers';
import {styles} from './styles';
import {PetScreenNavigationProp} from '../../../../types/router';

interface PetItemProps {
    item: PetData;
}

export const PetItem = ({item}: PetItemProps): JSX.Element => {
    const navigation = useNavigation<PetScreenNavigationProp<'List'>>();

    const handlePress = useCallback(() => {
        navigation.navigate('Detail', {
            id: item.id,
        });
    }, [item.id, navigation]);

    const isMale = useMemo(() => item.gender === 0, [item.gender]);

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image source={{uri: getImageUrl(item.images[0])}} style={styles.mainImage} />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Foundation
                        name={isMale ? 'male-symbol' : 'female-symbol'}
                        color={isMale ? '#3333ff' : '#bf61b7'}
                        size={24}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};
