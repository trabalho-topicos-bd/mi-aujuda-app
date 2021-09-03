import {Routes} from '../../types/router';

interface DrawerItemData {
    to: keyof Routes;
    label: string;
}

export const items: DrawerItemData[] = [
    {
        to: 'Home',
        label: 'Página inicial',
    },
    {
        to: 'Quiz',
        label: 'Realizar quiz',
    },
    {
        to: 'Animals',
        label: 'Animais para doação',
    },
    {
        to: 'Donation',
        label: 'Contribuir',
    },
];
