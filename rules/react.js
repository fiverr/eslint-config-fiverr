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
        "react/no-children-prop": 2,
        "react/no-danger-with-children": 2,
        "react/no-deprecated": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-find-dom-node": 2,
        "react/no-is-mounted": 2,
        "react/no-render-return-value": 2,
        "react/no-string-refs": 2,
        "react/no-unescaped-entities": 2,
        "react/no-unknown-property": 2,
        "react/no-unused-prop-types": [2, {
            "customValidators": [],
            "skipShapeProps": true
        }],
        "react/prefer-es6-class": 2,
        "react/prefer-stateless-function": 2,
        "react/sort-comp": 2,
        "react/jsx-closing-bracket-location": [2, "after-props"],
        "react/jsx-curly-spacing": 2,
        "react/jsx-equals-spacing": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
        "react/jsx-first-prop-new-line": [2, "never"],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-key": 2,
        "react/jsx-no-bind": [2, {
            "ignoreRefs": true,
            "allowArrowFunctions": true
        }],
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-tag-spacing": [2, {
            "beforeSelfClosing": "never"
        }],
        "react/jsx-uses-vars": 2,
        "react/jsx-wrap-multilines": 2,
        "react-hooks/rules-of-hooks": 2,
        "react-hooks/exhaustive-deps": 1
    }
};
