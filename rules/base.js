const { ERROR, WARN, IGNORE } = require('../constants');

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
        'no-multi-spaces': [ERROR, {
            exceptions: {
                VariableDeclarator: true,
                Property: false
            }
        }],
        'comma-dangle': ERROR,
        'comma-spacing': ERROR,
        'comma-style': ERROR,
        'computed-property-spacing': ERROR,
        'dot-notation': ERROR,
        'eol-last': ERROR,
        'func-call-spacing': ERROR,
        'indent': [ERROR, 4, {
            SwitchCase: WARN
        }],
        'jsx-quotes': ERROR,
        'keyword-spacing': ERROR,
        'lines-around-comment': [ERROR, {
            beforeBlockComment: true,
            allowBlockStart: true,
            beforeLineComment: true
        }],
        'new-cap': IGNORE,
        'no-lonely-if': ERROR,
        'no-case-declarations': IGNORE,
        'no-multiple-empty-lines': [ERROR, {
            max: 1,
            maxBOF: 0,
            maxEOF: 0
        }],
        'no-trailing-spaces': ERROR,
        'no-unneeded-ternary': ERROR,
        'no-unused-vars': [ERROR, {
            varsIgnorePattern: 'React',
            ignoreRestSiblings: true
        }],
        'no-whitespace-before-property': ERROR,
        'quotes': [ERROR, 'single', {
            avoidEscape: true
        }],
        'semi-spacing': ERROR,
        'semi': [ERROR, 'always'],
        'space-before-function-paren': [ERROR, 'never'],
        'space-in-parens': ERROR,
        'spaced-comment': [ERROR, 'always'],
        'object-curly-spacing': [ERROR, 'always'],
        'vars-on-top': ERROR,
        'radix': ERROR,
        'no-nested-ternary': ERROR,
        'one-var-declaration-per-line': ERROR,
        'no-unsafe-negation': ERROR,
        'array-callback-return': ERROR,
        'block-scoped-var': ERROR,
        'curly': ERROR,
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
        'import/no-self-import': ERROR,
        'import/no-internal-modules': IGNORE,
        'import/no-dynamic-require': IGNORE,
        'import/no-useless-path-segments': ERROR,
        'import/order': WARN,
        'import/newline-after-import': ERROR,
        'import/no-named-as-default': IGNORE,
        'promise/catch-or-return': ERROR,
        'dynamic-import-chunkname': ERROR
    }
};
