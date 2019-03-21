const { ERROR, WARN, IGNORE } = require('../constants');

module.exports = {
    extends: [
        'eslint:recommended'
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
        'no-multiple-empty-lines': ERROR,
        'no-trailing-spaces': WARN,
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
        'consistent-this': ERROR
    }
};
