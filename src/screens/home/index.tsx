import AnimatedLottieView from 'lottie-react-native';
import React, {useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from '../../components/button';
import {Layout} from '../../components/layout';
import {Section} from '../../components/section';
import {ScreenNavigationProp} from '../../types/router';
import {styles} from './styles';

interface HomeScreenProps {
    navigation: ScreenNavigationProp<'Home'>;
}

export const HomeScreen = ({navigation}: HomeScreenProps): JSX.Element => {
    const handleGoToQuiz = useCallback(() => {
        navigation.navigate('Quiz');
    }, [navigation]);

    const handleGoToAnimals = useCallback(() => {
        navigation.navigate('Animals');
    }, [navigation]);

    const handleGoToDonation = useCallback(() => {
        navigation.navigate('Donation');
    }, [navigation]);

    return (
        <Layout title="Bem-vindo!">
            <Text style={styles.title}>Olá!{'\n'}Seja bem-vindo ao nosso app!</Text>
            <Section subtitle="Procurando por um amiguinho?">
                <View style={styles.paper}>
                    <Image source={require('../../../assets/img/pets-1.jpg')} style={styles.sectionImage} />
                </View>
                <Button text="Realize nosso quiz e encontre a sua companhia ideal!" onPress={handleGoToQuiz} />
            </Section>
            <Section subtitle="Não tem preferência?">
                <View style={styles.paper}>
                    <Image source={require('../../../assets/img/pets-2.jpg')} style={styles.sectionImage} />
                </View>
                <Button text="Veja todos os animais que temos para adoção" onPress={handleGoToAnimals} />
            </Section>
            <Section subtitle="Deseja nos ajudar?">
                <View style={styles.paper}>
                    <Image source={require('../../../assets/img/pets-3.jpg')} style={styles.sectionImage} />
                </View>
                <Text style={styles.text}>Faça uma doação, a gente agradece!{'\n'}Todo valor ajuda!</Text>
                <Button text="Contribuir" onPress={handleGoToDonation} />
            </Section>
        </Layout>
    );
};
