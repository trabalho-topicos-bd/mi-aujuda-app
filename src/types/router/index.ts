import {StackNavigationProp} from '@react-navigation/stack';

export type Routes = {
    Home: undefined;
    Quiz: undefined;
    Animals: undefined;
    Donation: undefined;
};

export type ScreenNavigationProp<T extends keyof Routes> = StackNavigationProp<Routes, T>;
