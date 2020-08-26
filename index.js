module.exports = {
    extends: [
        './rules/base',
        './rules/es6',
        './rules/react',
        './rules/dev',
		'./rules/jest',
        './rules/npm',
		'./rules/start'
    ].map(require.resolve),
    rules: {}
};
