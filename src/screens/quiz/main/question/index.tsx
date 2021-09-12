/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, {useCallback, useState, useMemo} from 'react';
import {Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {FeatureData} from '../../../../types/feature';
import {QuestionData} from '../../../../types/quiz';

interface QuestionProps {
    item: QuestionData;
    questionIndex: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    isLast: boolean;
    value: number;
    setValues: React.Dispatch<React.SetStateAction<FeatureData>>;
    handleFinish(trainable: number): void;
}

export const Question = (props: QuestionProps): JSX.Element => {
    const {item, questionIndex, setIndex, isLast, value, setValues, handleFinish} = props;

    const [selected, setSelected] = useState<number | null>(value);

    const getOptionContainerStyles = useCallback(
        (optionIndex: number) => ({
            ...styles.optionContainer,
            backgroundColor: selected === optionIndex ? '#effbff' : optionIndex % 2 !== 0 ? '#EDEDED' : '#FFF',
        }),
        [selected],
    );

    const handleAnswer = useCallback((optionIndex: number) => {
        setSelected(optionIndex);
    }, []);

    const handleGoBack = useCallback(() => {
        setIndex(prev => prev - 1);
    }, [setIndex]);

    const handleConfirm = useCallback(async () => {
        if (selected !== null) {
            if (!isLast) {
                setValues(prev => ({
                    ...prev,
                    [item.key]: selected,
                }));

                setIndex(prev => prev + 1);
            } else if (selected) {
                handleFinish(selected);
            }
        } else {
            ToastAndroid.show('Selecione uma opção!', ToastAndroid.LONG);
        }
    }, [handleFinish, isLast, item.key, selected, setIndex, setValues]);

    const isFirstQuestion = useMemo(() => questionIndex === 0, [questionIndex]);

    return (
        <View style={styles.root}>
            <View style={styles.paper}>
                <Text style={styles.title}>{item.title}</Text>
                {item.options.map((el, optionIndex) => (
                    <TouchableOpacity
                        key={`question-${item.key}-option-${optionIndex + 1}`}
                        onPress={() => handleAnswer(optionIndex + 1)}
                        style={getOptionContainerStyles(optionIndex + 1)}>
                        <Text style={styles.optionText}>
                            {optionIndex + 1}. {el}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.paginationContainer}>
                <TouchableOpacity disabled={isFirstQuestion} onPress={handleGoBack} style={styles.paginationButton}>
                    <Text style={styles.paginationText}>{'<'} Anterior</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={selected === null} onPress={handleConfirm} style={styles.paginationButton}>
                    <Text style={styles.paginationText}>{isLast ? 'Finalizar' : `Confirmar >`}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
