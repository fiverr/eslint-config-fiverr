const { readdirSync } = require('fs');
const { join } = require('path');
const exec = require('async-execute');

/**
 * fixtures directory
 * @type {string}
 */
const fixtures = join(__dirname, 'fixtures');

/**
 * eslint binary
 * @type {string}
 */
const eslint = join(__dirname, 'node_modules/.bin/eslint');

/**
 * this test case config file
 * @type {string}
 */
const config = join(__dirname, '.eslintrc');

/**
 * Output of stream output
 * @type {object}
 */
const result = {
    status: undefined
};

/**
 * Populate the variable 'result' with execution result
 * @param {string} file to check
 */
const lint = async(file) => await exec(
    [
        eslint,
        '-c',
        config,
        `"${join(__dirname, 'fixtures', file)}"`
    ].join(' ')
).then(
    () => { result.status = 'pass'; }
).catch(
    () => { result.status = 'fail'; }
);

describe('linting tests', () => {
    afterEach(() => {
        result.status = undefined;
    });
    readdirSync(fixtures).forEach((fixture) => {
        it([fixture, 'fail'].join(' '), async() => {
            await lint(`${fixture}/fail.js`);
            expect(result.status).toBe('fail');
        });

        it([fixture, 'pass'].join(' '), async() => {
            await lint(`${fixture}/pass.js`);
            expect(result.status).toBe('pass');
        });
    });
});
