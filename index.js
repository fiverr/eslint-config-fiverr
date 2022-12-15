module.exports = {
    extends: [
        './rules/base',
        './rules/es6',
        './rules/react',
        'prettier'
    ].map(require.resolve),
    rules: {}
};
