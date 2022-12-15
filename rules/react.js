const { WARN, ERROR } = require('../constants');

module.exports = {
    extends: [
        'plugin:react/recommended'
    ],
    plugins: [
        'react',
        'react-hooks'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/no-children-prop': ERROR,
        'react/no-danger-with-children': ERROR,
        'react/no-deprecated': ERROR,
        'react/no-did-mount-set-state': ERROR,
        'react/no-did-update-set-state': ERROR,
        'react/no-direct-mutation-state': ERROR,
        'react/no-find-dom-node': ERROR,
        'react/no-is-mounted': ERROR,
        'react/no-render-return-value': ERROR,
        'react/no-string-refs': ERROR,
        'react/no-unescaped-entities': ERROR,
        'react/no-unknown-property': ERROR,
        'react/no-unused-prop-types': [ERROR, {
            customValidators: [],
            skipShapeProps: true
        }],
        'react/prefer-es6-class': ERROR,
        'react/prefer-stateless-function': ERROR,
        'react/sort-comp': ERROR,
        'react/jsx-filename-extension': [WARN, {
            extensions: ['.js']
        }],
        'react/jsx-key': ERROR,
        'react/jsx-no-bind': [ERROR, {
            ignoreRefs: true,
            allowArrowFunctions: true
        }],
        'react/jsx-no-comment-textnodes': ERROR,
        'react/jsx-no-duplicate-props': ERROR,
        'react/jsx-no-undef': ERROR,
        'react/jsx-pascal-case': ERROR,
        'react/jsx-uses-vars': ERROR,
        'react-hooks/rules-of-hooks': ERROR,
        'react-hooks/exhaustive-deps': ERROR
    }
};
