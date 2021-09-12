/* eslint-disable no-unused-expressions */
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Dimensions, ScrollView, Text, ToastAndroid, View} from 'react-native';
import {Button} from '../../../components/button';
import {Layout} from '../../../components/layout';
import {petServices} from '../../../services/pet';
import {FeatureData} from '../../../types/feature';
import {QuizScreenNavigationProp} from '../../../types/router';
import {questions} from './data';
import {Question} from './question';
import {styles} from './styles';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

interface QuizMainScreenProps {
    navigation: QuizScreenNavigationProp<'Main'>;
}

export const QuizMainScreen = ({navigation}: QuizMainScreenProps): JSX.Element => {
    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);
    const [values, setValues] = useState<FeatureData>({
        cuteness: 2,
        trainable: 2,
        space_to_explore: 2,
        spare_time: 2,
        loyalty: 2,
        intelligence: 2,
        peace: 2,
        love: 2,
        cost: 2,
        experience: 2,
    });

    const {_getPerfect} = petServices();

    const handlePressStart = () => {
        setStarted(true);
    };

    const scrollRef = useRef<ScrollView>();

    useEffect(() => {
        scrollRef.current?.scrollTo({x: SCREEN_WIDTH * index, y: 0, animated: true});
    }, [index, scrollRef]);

    const handleFinish = useCallback(
        async (cuteness: number) => {
            try {
                const obj = {...values, cuteness};

                console.log(obj);

                const results = await _getPerfect(obj);

                navigation.replace('Results', {results});
            } catch (err) {
                ToastAndroid.show(String(err), ToastAndroid.LONG);
            }
        },
        [_getPerfect, navigation, values],
    );

    return (
        <Layout title="Encontre o pet ideal" padding={0}>
            {!started ? (
                <View style={styles.root}>
                    <Text style={styles.title}>Encontre o pet ideal</Text>
                    <Button text="Começar" onPress={handlePressStart} />
                </View>
            ) : (
                <ScrollView
                    horizontal
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    ref={scrollRef as React.LegacyRef<ScrollView>}>
                    {questions.map((el, questionIndex) => (
                        <Question
                            key={`question-${el.key}`}
                            item={el}
                            questionIndex={questionIndex}
                            setIndex={setIndex}
                            isLast={questionIndex === questions.length - 1}
                            value={values[el.key]}
                            setValues={setValues}
                            handleFinish={handleFinish}
                        />
                    ))}
                </ScrollView>
            )}
        </Layout>
    );
};
