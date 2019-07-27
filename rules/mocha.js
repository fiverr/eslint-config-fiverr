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
                'no-empty-function': 0
            }
        }
    ]
};
