module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "jquery": true
    },
    rules: {
        "eqeqeq": 2,
        "no-multi-spaces": [2, {"exceptions": { "VariableDeclarator": true, "Property": false }}],
        "comma-dangle": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "dot-notation": 2,
        "func-call-spacing": 2,
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-quotes": 2,
        "keyword-spacing": 2,
        "lines-around-comment": ["error", {"beforeBlockComment": true, "allowBlockStart": true, "beforeLineComment": true}],
        "new-cap": 2,
        "no-case-declarations": 0,
        "no-lonely-if": 2,
        "no-multiple-empty-lines": 2,
        "no-trailing-spaces": 1,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "quotes": ["error", "single", {"avoidEscape": true}],
        "semi-spacing": 2,
        "semi": 2,
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": 2,
        "spaced-comment": ["error", "always"],
        "vars-on-top": 2,
        "radix": 2,
        "no-nested-ternary": 2,
        "one-var-declaration-per-line": 2,
        "no-unsafe-negation": 2,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "curly": 2,
        "default-case": 2,
        "no-caller": 2,
        "no-eval": 2,
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-implied-eval": 2,
        "no-loop-func": 2,
        "no-empty-function": 2,
        "no-extra-bind": 2,
        "no-sequences": 2,
        "no-useless-call": 2,
        "no-useless-escape": 2,
        "no-useless-return": 2,
        "no-with": 2,
        "wrap-iife": [2, "inside"],
        "brace-styles": 2,
        "consistent-this": 2
    }
};
