const { IGNORE } = require('../constants');

module.exports = {
    overrides: [
        {
            files: [
                '*/__mocks__/*',
                '**/spec.js',
                '**/*.spec.js',
                '**/*_spec.js',
                '**/test.js',
                '**/*.test.js',
                '**/*_test.js'
            ],
            env: {
                jest: true,
            },
            globals: {
                mount: false,
                render: false,
                shallow: false,
            },
            rules: {
                'no-empty-function': IGNORE,
                'import/namespace': IGNORE
            }
        }
    ]
};
