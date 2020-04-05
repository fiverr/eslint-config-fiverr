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
 * Populate the variable 'result' with execution result
 * @param {string} file to check
 */
const lint = (file) => exec(
    [
        eslint,
        '-c',
        config,
        `"${join(__dirname, 'fixtures', file)}"`
    ].join(' ')
);

describe('linting tests', () => {
    it.each(fixtures)(
        '%s fail',
        (fixture) => expect(
            lint(`${fixture}/fail.js`)
        ).rejects.toThrow()
    );
    it.each(fixtures)(
        '%s pass',
        (fixture) => expect(
            lint(`${fixture}/pass.js`)
        ).resolves.not.toThrow()
    );
});
