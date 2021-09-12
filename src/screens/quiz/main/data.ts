import {QuestionData} from '../../../types/quiz';

export const questions: QuestionData[] = [
    {
        key: 'experience',
        title: 'Você já teve pets antes?',
        options: ['Não', 'Minha mãe tinha um cachorro, conta?', 'Sim', 'Vários'],
    },
    {
        key: 'cost',
        title: 'Quanto você está disposto a gastar com os cuidados?',
        options: ['Nada', 'O básico', 'O possível', 'O necessário'],
    },
    {
        key: 'love',
        title: 'Quanto você se considera uma pessoa carinhosa?',
        options: ['Pouco', 'Na média', 'Carinhosa', 'Bastante carinhosa'],
    },
    {
        key: 'peace',
        title: 'Quão agitado o pet deve ser?',
        options: ['Pouco agitado', 'Na média', 'Agitado', 'Bastante agitado'].reverse(),
    },
    {
        key: 'intelligence',
        title: 'Quanto você se considera uma pessoa inteligente?',
        options: ['Pouco', 'Na média', 'Inteligente', 'Bastante inteligente'],
    },
    {
        key: 'loyalty',
        title: 'Qual o nível de afinidade que pretende ter com o pet?',
        options: [
            'Esteja com você quando afim',
            'Seja minimamente apegado',
            'Quero me ajude quando eu precisar',
            'Que esteja sempre comigo',
        ],
    },
    {
        key: 'spare_time',
        title: 'Quanto tempo pretende passar com o pet?',
        options: ['Pouco tempo', 'Sempre que possível', 'Grande parte do dia', 'O tempo todo'],
    },
    {
        key: 'space_to_explore',
        title: 'Quão grande deve ser esse pet?',
        options: ['Muito pequeno', 'Pequeno', 'Médio', 'Grande'],
    },
    {
        key: 'trainable',
        title: 'Você gostaria de poder treinar esse pet?',
        options: [
            'Aprender onde urinar é o suficiente',
            'Ao menos a buscar uma bola',
            'Bastante',
            'Como um animal policial',
        ],
    },
    {
        key: 'cuteness',
        title: 'Quão importante você considera o fator fofura? (lembrando que esse termo é subjetivo)',
        options: [
            'Pouco, prezo pela companhia e diversão',
            'Um pouco, mas não é determinante',
            'Bastante',
            'É crucial, ignoro todo o resto',
        ],
    },
];
