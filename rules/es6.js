const { ERROR } = require('../constants');

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        ecmaFeatures: {
            impliedStrict: true
        }
    },
    rules: {
        'no-duplicate-imports': ERROR,
        'no-template-curly-in-string': ERROR,
        'no-useless-computed-key': ERROR,
        'no-useless-constructor': ERROR,
        'no-useless-rename': ERROR,
        'no-var': ERROR,
        'object-shorthand': ['error', 'properties'],
        'prefer-arrow-callback': ERROR,
        'prefer-const': ERROR,
        'prefer-spread': ERROR,
        'prefer-template': ERROR
    }
};
