# eslint-config-fiverr

ESLint configuration & ruleset for Javascript (ES6) + React.

## Installation

In order to add eslint-config-fiverr to a repository, use npm to add it to the development dependencies.

```
npm i -D @fiverr/eslint-config-fiverr [eslint-plugin-react]
```

## Configuration

Add a `.eslintrc` file in the main directory of your repository, in which you define the usage of eslint-config-fiverr as well as repository specific configuration & rules.

This is the basic structure:

```javascript
{
    "extends": "@fiverr/fiverr",
    "globals": {},
    "rules": {}
}
```

Include some:
```js
{
    "extends": [
        "@fiverr/eslint-config-fiverr/rules/base",
        "@fiverr/eslint-config-fiverr/rules/es6",
        "@fiverr/eslint-config-fiverr/rules/jest",
    ]
}
```

Included in `@fiverr/fiverr`:
- `base`: Just the set of rules
- `es6`: New ES support and rules
- `react`: React specific rules and `eslint-plugin-react` plugin

Need to be added explicitly:
- `jest`
- `mocha`

* globals - add any global variable that is used in your repository. Example: `"React": true`
* rules - add any rule you need in addition to eslint-config-fiverr, or if you want to override some of it's rules.

## IDE integration

Configuring your IDE to use ESLint is fairly easy:

##### RubyMine
1. Open settings by clicking `cmd` + `,`
2. Languages & Frameworks > Javascript > Code Quality Tools > ESLint
3. Check the 'Enable' checkbox
4. Under 'Node Interpeter' type the path to the NodeJS executable file (rubymine usually auto-detects it)
5. Under 'Configuration File' check the option 'Search for .eslitrc'.
6. Click OK

##### Sublime
You can use either of these plugins:

1. [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint)

2. [Build Next](https://github.com/albertosantini/sublimetext-buildnext)

##### Atom
[linter-eslint](https://atom.io/packages/linter-eslint)


