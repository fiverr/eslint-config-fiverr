module.exports = {
    extends: [
        './rules/base',
        './rules/es6',
        './rules/react',
    ]
    .map(require.resolve)
    .concat('prettier'),
    rules: {}
};
