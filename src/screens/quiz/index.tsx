/* eslint-disable no-unused-expressions */
import React, {useState, useEffect, useRef} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {Button} from '../../components/button';
import {Layout} from '../../components/layout';
import {questions} from './data';
import {Question} from './question';
import {styles} from './styles';

const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export const QuizScreen = (): JSX.Element => {
    const [started, setStarted] = useState(false);
    const [index, setIndex] = useState(0);

    const handlePressStart = () => {
        setStarted(true);
    };

    const scrollRef = useRef<ScrollView>();

    useEffect(() => {
        scrollRef.current?.scrollTo({x: SCREEN_WIDTH * index - 32, y: 0, animated: true});
    }, [index, scrollRef]);

    return (
        <Layout title="Quiz">
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
                            key={`question-${el.id}`}
                            item={el}
                            questionIndex={questionIndex}
                            setIndex={setIndex}
                            isLast={questionIndex === questions.length - 1}
                        />
                    ))}
                </ScrollView>
            )}
        </Layout>
    );
};
