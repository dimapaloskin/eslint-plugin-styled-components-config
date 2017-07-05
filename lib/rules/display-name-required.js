/**
* @fileoverview `displayName` required for each styled component
* @author Dima Pavlovsky
*/
"use strict";

const errorMessage = '`withConfig` missing';
module.exports = {
  create: function(context) {
    const validate = (declaration, node) => {
      if (declaration.type !== 'TaggedTemplateExpression') return;
      if (declaration.tag.object) {
        if (declaration.tag.object.name === 'styled') {
          context.report(node, errorMessage);
        }
      }

      if (declaration.tag.callee) {
        if (declaration.tag.callee.name === 'styled') {
          context.report(node, errorMessage);
        }

        if (declaration.tag.callee.property) {
          if (declaration.tag.callee.property.name !== 'withConfig') {
            context.report(node, errorMessage);
          } else if (declaration.tag.arguments) {
            declaration.tag.arguments.forEach(argument => {
              if (!argument.properties) return;

              let found = false
              argument.properties.forEach(prop => {
                if (prop.key.name === 'displayName') {
                  found = true;
                }
              })
              if (!found) {
                context.report(node, '`displayName` property is required');
              }
            });
          }
        }

        validate(declaration.tag.callee);
      }
    }

    return {
      VariableDeclaration: function(node) {
        node.declarations.forEach(declaration => {
          validate(declaration.init, node);
        });
      },
    };
  }
};
