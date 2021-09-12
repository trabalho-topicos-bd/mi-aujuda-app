import {NavigatorScreenParams, RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {ResultsData} from './quiz';

export type PetRoutes = {
    List: undefined;
    Detail: {id: number};
};

export type QuizRoutes = {
    Main: undefined;
    Results: {results: ResultsData[]};
};

export type Routes = {
    Home: undefined;
    Quiz: NavigatorScreenParams<QuizRoutes>;
    Pet: NavigatorScreenParams<PetRoutes>;
    Donation: undefined;
};

export type ScreenNavigationProp<T extends keyof Routes> = StackNavigationProp<Routes, T>;

export type PetScreenNavigationProp<T extends keyof PetRoutes> = StackNavigationProp<PetRoutes, T>;
export type PetScreenRouteProp<T extends keyof PetRoutes> = RouteProp<PetRoutes, T>;

export type QuizScreenNavigationProp<T extends keyof QuizRoutes> = StackNavigationProp<QuizRoutes, T>;
export type QuizScreenRouteProp<T extends keyof QuizRoutes> = RouteProp<QuizRoutes, T>;
