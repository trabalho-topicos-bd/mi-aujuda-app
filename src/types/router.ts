import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

export type PetRoutes = {
    List: undefined;
    Detail: {id: number};
};

export type Routes = {
    Home: undefined;
    Quiz: undefined;
    Pet: undefined;
    Donation: undefined;
};

export type ScreenNavigationProp<T extends keyof Routes> = StackNavigationProp<Routes, T>;

export type PetScreenNavigationProp<T extends keyof PetRoutes> = StackNavigationProp<PetRoutes, T>;
export type PetScreenRouteProp<T extends keyof PetRoutes> = RouteProp<PetRoutes, T>;
