/* eslint-disable no-unused-expressions */
import React, {useCallback} from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {Layout} from '../../../components/layout';
import {PetItem} from '../../../components/pet-item';
import {QuizScreenRouteProp, ScreenNavigationProp} from '../../../types/router';
import {styles} from './styles';

interface QuizResultsScreenProps {
    navigation: ScreenNavigationProp<'Quiz'>;
    route: QuizScreenRouteProp<'Results'>;
}

export const QuizResultsScreen = ({navigation, route}: QuizResultsScreenProps): JSX.Element => {
    const {params} = route;

    const handleStartOver = useCallback(() => {
        navigation.replace('Quiz', {screen: 'Main'});
    }, [navigation]);

    const handlePressItem = useCallback(
        (id: number) => {
            navigation.replace('Pet', {
                screen: 'Detail',
                params: {id},
            });
        },
        [navigation],
    );

    return (
        <Layout title="Pets encontrados" disableScroll>
            <TouchableOpacity style={styles.redoBox} onPress={handleStartOver}>
                <Text style={styles.redoText}>Refazer</Text>
            </TouchableOpacity>
            <FlatList
                data={params.results}
                renderItem={({item}) => (
                    <PetItem
                        key={`found-pet-${item.pet.id}`}
                        item={item.pet}
                        similarity={item.similarity}
                        handlePress={() => handlePressItem(item.pet.id)}
                    />
                )}
                keyExtractor={({pet}) => `pet-${pet.id}`}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                columnWrapperStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </Layout>
    );
};
