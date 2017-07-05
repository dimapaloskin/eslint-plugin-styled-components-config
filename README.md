# eslint-plugin-styled-components-config

Eslint rules for styled-components config

[![Build Status](https://travis-ci.org/dimapaloskin/eslint-plugin-styled-components-config.svg?branch=master)](https://travis-ci.org/dimapaloskin/eslint-plugin-styled-components-config)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-styled-components-config`:

```
$ npm install eslint-plugin-styled-components-config --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-styled-components-config` globally.

## Usage

Add `display-name-required` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "styled-components-config"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "styled-components-config/rule-name": 2
    }
}
```

## Supported Rules

* [display-name-required](https://github.com/dimapaloskin/eslint-plugin-styled-components-config/blob/master/docs/rules/display-name-required.md)

## Author
[Dima Pavlovsky](http://palosk.in)
