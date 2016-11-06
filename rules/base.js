module.export = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true,
        "jquery": true
    },
    rules: {
        "eqeqeq": 2,
        "no-multi-spaces": 2,
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
        "no-lonely-if": 2,
        "no-multiple-empty-lines": 2,
        "no-trailing-spaces": 2,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "quotes": ["error", "single", {"avoidEscape": true}],
        "semi-spacing": 2,
        "semi": 2,
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": 2,
        "spaced-comment": ["error", "always"],
        "vars-on-top": 2
    }
};