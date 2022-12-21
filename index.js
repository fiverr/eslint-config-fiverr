const baseRules = require('./rules/base');
const es6Rules = require('./rules/es6');
const reactRules = require('./rules/react');


module.exports = {
    extends: [
        baseRules,
        es6Rules,
        reactRules,
        'prettier'
    ],
    rules: {}
};
