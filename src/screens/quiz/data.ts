export interface QuestionData {
    id: number;
    title: string;
    options: string[];
}

export const questions: QuestionData[] = [
    {
        id: 0,
        title: 'Por que você quer um pet?',
        options: [
            'Para me manter ocupado',
            'Para ser mais responsável',
            'Para ter uma companhia',
            'Para mostrar para as pessoas',
        ],
    },
    {
        id: 1,
        title: 'Você já teve pets antes?',
        options: ['Sim', 'Vários', 'Minha mãe tinha um cachorro, conta?', 'Não'],
    },
    {
        id: 2,
        title: 'Quão grande deve ser esse pet?',
        options: ['Médio', 'Muito pequeno', 'Grande', 'Pequeno'],
    },
];
