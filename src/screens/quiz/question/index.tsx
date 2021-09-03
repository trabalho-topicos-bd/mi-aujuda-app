/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, {useCallback, useState, useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {QuestionData} from '../data';
import {theme} from '../../../styles/theme';
import {lightenColor} from '../../../util/helpers';

interface QuestionProps {
    item: QuestionData;
    questionIndex: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    isLast: boolean;
}

export const Question = (props: QuestionProps): JSX.Element => {
    const {item, questionIndex, setIndex, isLast} = props;

    const [selected, setSelected] = useState<number | null>(null);

    const getOptionContainerStyles = useCallback(
        (optionIndex: number) => ({
            ...styles.optionContainer,
            backgroundColor:
                selected === optionIndex
                    ? lightenColor(theme.colors.primary, 30)
                    : optionIndex % 2 !== 0
                    ? '#EDEDED'
                    : '#FFF',
        }),
        [selected],
    );

    const handleAnswer = useCallback((optionIndex: number) => {
        setSelected(optionIndex);
    }, []);

    const handleGoBack = useCallback(() => {
        setIndex(prev => prev - 1);
    }, [setIndex]);

    const handleConfirm = useCallback(() => {
        if (!isLast) setIndex(prev => prev + 1);
        else {
            console.log('quiz completed');
        }
    }, [isLast, setIndex]);

    const isFirstQuestion = useMemo(() => questionIndex === 0, [questionIndex]);

    return (
        <View style={styles.root}>
            <View style={styles.paper}>
                <Text style={styles.title}>{item.title}</Text>
                {item.options.map((el, optionIndex) => (
                    <TouchableOpacity
                        key={`question-${item.id}-option-${optionIndex}`}
                        onPress={() => handleAnswer(optionIndex)}
                        style={getOptionContainerStyles(optionIndex)}>
                        <Text style={styles.optionText}>
                            {optionIndex + 1}. {el}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.paginationContainer}>
                <TouchableOpacity disabled={isFirstQuestion} onPress={handleGoBack}>
                    <Text style={styles.paginationText}>{'<'} Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={!selected} onPress={handleConfirm}>
                    <Text style={styles.paginationText}>Confirmar {'>'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
