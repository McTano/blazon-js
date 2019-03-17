module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
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
        expect: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:flowtype/recommended'],
    root: true,
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                trailingComma: 'all',
                tabWidth: 4,
                singleQuote: true,
                arrowParens: 'always',
                endOfLine: 'lf',
            },
        ],
        'no-unused-expressions': ['error', { allowTernary: true }],
        'react/forbid-prop-types': 'warn',
        'react/destructuring-assignment': 'off',
        'import/prefer-default-export': 'off',
    },
};
