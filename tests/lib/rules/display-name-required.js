/**
 * @fileoverview Deprecate creation of a styled component without withConfig method
 * @author Dima Pavlovsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/display-name-required"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("display-name-required", rule, {

    valid: [
      {
          code: 'const Title = styled.h1.withConfig({ displayName: "Title" })``;',
          parserOptions: { ecmaVersion: 6 },
      },
      {
          code: "const Title = styled('h1').withConfig({ displayName: \"Title\" })``;",
          parserOptions: { ecmaVersion: 6 },
      }
    ],

    invalid: [
        {
            code: 'const Title = styled.h1``;',
            parserOptions: { ecmaVersion: 6 },
            errors: [{
                message: "`withConfig` missing",
                type: "VariableDeclaration"
            }]
        },
        {
            code: 'const Title = styled.h1.withConfig({ someValue: "test" })``;',
            parserOptions: { ecmaVersion: 6 },
            errors: [{
                message: "`displayName` property is required",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "const Title = styled('h1')``;",
            parserOptions: { ecmaVersion: 6 },
            errors: [{
              message: "`withConfig` missing",
              type: "VariableDeclaration"
            }]
        },
        {
            code: "const Title = styled.h1.someMethod({})``;",
            parserOptions: { ecmaVersion: 6 },
            errors: [{
              message: "`withConfig` missing",
              type: "VariableDeclaration"
            }]
        }
    ]
});
