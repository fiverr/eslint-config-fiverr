const { IGNORE } = require('../constants');

module.exports = {
    overrides: [
        {
            files: [
                '**/spec.js',
                '**/*.spec.js'
            ],
            env: {
                mocha: true,
            },
            globals: {
                global: true,
                expect: true,
                assert: true
            },
            rules: {
                'no-empty-function': IGNORE,
                'import/namespace': IGNORE
            }
        }
    ]
};
