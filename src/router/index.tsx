import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home';
import {PetListScreen} from '../screens/pet/list';
import {PetDetailScreen} from '../screens/pet/detail';
import {QuizMainScreen} from '../screens/quiz/main';
import {QuizResultsScreen} from '../screens/quiz/results';
import {DonationScreen} from '../screens/donation';
import {DrawerContent} from '../components/drawer';
import {PetRoutes, QuizRoutes, Routes} from '../types/router';

const PetStack = createStackNavigator<PetRoutes>();
const PetRouter = (): JSX.Element => (
    <PetStack.Navigator screenOptions={{headerShown: false}}>
        <PetStack.Screen name="List" component={PetListScreen} />
        <PetStack.Screen name="Detail" component={PetDetailScreen} />
    </PetStack.Navigator>
);

const QuizStack = createStackNavigator<QuizRoutes>();
const QuizRouter = (): JSX.Element => (
    <QuizStack.Navigator screenOptions={{headerShown: false}}>
        <QuizStack.Screen name="Main" component={QuizMainScreen} />
        <QuizStack.Screen name="Results" component={QuizResultsScreen} />
    </QuizStack.Navigator>
);

const Stack = createStackNavigator<Routes>();
const StackRouter = (): JSX.Element => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizRouter} />
        <Stack.Screen name="Pet" component={PetRouter} />
        <Stack.Screen name="Donation" component={DonationScreen} />
    </Stack.Navigator>
);

const Drawer = createDrawerNavigator();

export const Router = (): JSX.Element => (
    <>
        <StatusBar />
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{headerShown: false}}
                drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Entry" component={StackRouter} />
            </Drawer.Navigator>
        </NavigationContainer>
    </>
);
