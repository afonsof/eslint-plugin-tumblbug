# eslint-plugin-tumblbug

[![NPM](https://img.shields.io/npm/v/eslint-plugin-tumblbug.svg)](https://www.npmjs.com/package/eslint-plugin-tumblbug)

Custom eslint rules by Tumblbug, Inc.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-tumblbug`:

```
$ npm install eslint-plugin-tumblbug --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-tumblbug` globally.

## Usage

Add `tumblbug` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "tumblbug"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "tumblbug/rule-name": 2
    }
}
```

## Supported Rules

See the `docs` directory.
