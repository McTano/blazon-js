module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018
    },
    plugins: ['react', 'import', 'prettier'],
    globals: {
        $: true,
        $$: true,
        beforeAll: true,
        browser: true,
        it: true,
        describe: true,
        beforeEach: true,
        afterEach: true,
        afterAll: true,
        expect: true
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:flowtype/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                printWidth: 80,
                tabWidth: 4,
                singleQuote: true,
                endOfLine: 'lf'
            }
        ],
        'no-unused-vars': 'warn',
        'no-unused-expressions': 'warn',
        'react/forbid-prop-types': 'warn',
        'react/destructuring-assignment': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': 'off',
        'react/prop-types': 'off'
    }
};
