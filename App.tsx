import React, {useState, useEffect} from 'react';
import {
    useFonts,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import {SplashScreen} from './src/screens/splash';
import {Router} from './src/router';

export default function App(): JSX.Element {
    const [splash, setSplash] = useState(true);

    const [fontsLoaded] = useFonts({
        Regular: Ubuntu_400Regular,
        'Regular-Italic': Ubuntu_400Regular_Italic,
        Medium: Ubuntu_500Medium,
        Bold: Ubuntu_700Bold,
    });

    useEffect(() => {
        setTimeout(() => {
            setSplash(false);
        }, 2500);
    }, []);

    if (!fontsLoaded || splash) return <SplashScreen />;
    return <Router />;
}
