module.exports = {
    overrides: [
        {
            files: [
                '*/__mocks__/*',
                '**/spec.js',
                '**/*.spec.js'
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
                'no-empty-function': 0
            }
        }
    ]
};
