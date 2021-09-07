import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home';
import {QuizScreen} from '../screens/quiz';
import {PetListScreen} from '../screens/pet/list';
import {PetDetailScreen} from '../screens/pet/detail';
import {DonationScreen} from '../screens/donation';
import {DrawerContent} from '../components/drawer';
import {PetRoutes, Routes} from '../types/router';

const PetStack = createStackNavigator<PetRoutes>();
const PetRouter = (): JSX.Element => (
    <PetStack.Navigator screenOptions={{headerShown: false}}>
        <PetStack.Screen name="List" component={PetListScreen} />
        <PetStack.Screen name="Detail" component={PetDetailScreen} />
    </PetStack.Navigator>
);

const Stack = createStackNavigator<Routes>();
const StackRouter = (): JSX.Element => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
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
