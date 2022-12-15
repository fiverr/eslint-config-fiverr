const { ERROR, IGNORE } = require('../constants');

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    plugins: [
        'promise'
    ],
    env: {
        browser: true,
        jquery: true,
        node: true
    },
    rules: {
        'eqeqeq': ERROR,
        'dot-notation': ERROR,
        'new-cap': IGNORE,
        'no-lonely-if': ERROR,
        'no-case-declarations': IGNORE,
        'no-unneeded-ternary': ERROR,
        'no-unused-vars': [ERROR, {
            varsIgnorePattern: 'React',
            ignoreRestSiblings: true
        }],
        'vars-on-top': ERROR,
        'radix': ERROR,
        'no-nested-ternary': ERROR,
        'one-var-declaration-per-line': ERROR,
        'no-unsafe-negation': ERROR,
        'array-callback-return': ERROR,
        'block-scoped-var': ERROR,
        'default-case': ERROR,
        'no-caller': ERROR,
        'no-eval': ERROR,
        'no-floating-decimal': ERROR,
        'no-global-assign': ERROR,
        'no-implied-eval': ERROR,
        'no-loop-func': ERROR,
        'no-empty-function': ERROR,
        'no-extra-bind': ERROR,
        'no-sequences': ERROR,
        'no-useless-call': ERROR,
        'no-useless-escape': ERROR,
        'no-useless-return': ERROR,
        'no-with': ERROR,
        'wrap-iife': [ERROR, 'inside'],
        'consistent-this': ERROR,
        'import/dynamic-import-chunkname': ERROR,
        'import/no-self-import': ERROR,
        'import/no-internal-modules': IGNORE,
        'import/no-dynamic-require': IGNORE,
        'import/no-useless-path-segments': ERROR,
        'import/order': [ ERROR, {
            'pathGroups': [
                {
                    'pattern': '@fiverr-private/**',
                    'group': 'external',
                    'position': 'after'
                }
            ],
            pathGroupsExcludedImportTypes: ['builtin']
        }],
        'import/no-named-as-default': IGNORE,
        'promise/catch-or-return': ERROR
    }
};
