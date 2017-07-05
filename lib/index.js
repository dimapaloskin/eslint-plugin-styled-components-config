/**
 * @fileoverview Eslint rules for styled-components config
 * @author Dima Pavlovsky
 */
"use strict";

var requireIndex = require("requireindex");

const rules = requireIndex(__dirname + "/rules");
module.exports = {
  rules,
  configs: {
		recommended: {
      env: {
				es6: true
			},
      parserOptions: {
				ecmaVersion: 6,
      },
      rules: {
        'display-name-required': 'error'
      }
    }
  }
}
