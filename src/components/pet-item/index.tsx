import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Foundation} from '@expo/vector-icons';
import {Image} from '../image';
import {styles} from './styles';
import {PetData} from '../../types/pet';
import {getImageUrl} from '../../util/helpers';

interface PetItemProps {
    item: PetData;
    handlePress(): void;
    similarity?: number | null;
}

export const PetItem = (props: PetItemProps): JSX.Element => {
    const {item, handlePress, similarity = null} = props;

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
                {similarity !== null && (
                    <Text style={styles.similarity}>
                        Match <Text style={styles.similarityValue}>{(similarity * 100).toFixed(2)}%</Text>
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};
