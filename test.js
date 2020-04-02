const { readdirSync } = require('fs');
const { join } = require('path');
const exec = require('async-execute');

/**
 * fixtures directory
 * @type {string}
 */
const fixtures = readdirSync(join(__dirname, 'fixtures'));

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
 * Output of stream output successful or failed
 * @type {string}
 */
let status;

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
    () => { status = 'pass'; }
).catch(
    () => { status = 'fail'; }
);

describe('linting tests', () => {
    afterEach(() => {
        status = undefined;
    });
    it.each(fixtures)('%s fail', async(fixture) => {
        await lint(`${fixture}/fail.js`);
        expect(status).toBe('fail');
    });
    it.each(fixtures)('%s pass', async(fixture) => {
        await lint(`${fixture}/pass.js`);
        expect(status).toBe('pass');
    });
});
