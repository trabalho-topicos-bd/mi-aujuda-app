module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
    },
    settings: {
        react: {
            verstion: 'detect',
        },
    },
    extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
    rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-use-before-define': ['error'],
        camelcase: 'off',
        'global-require': 'off',
        'import/extensions': ['error', 'never'],
        'import/no-unresolved': 0,
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'no-plusplus': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        // 'prettier/prettier': [
        //     'error',
        //     {
        //         arrowParens: 'avoid',
        //         endOfLine: 'auto',
        //         singleQuote: true,
        //         trailingComma: 'all',
        //     },
        // ],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.ts', '.tsx'],
            },
        ],
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
