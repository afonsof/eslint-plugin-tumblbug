/**
 * @fileoverview Full FP libs should not be imported
 * @author Bjorn Tegelund
 * @copyright 2016 Bjorn Tegelund. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  return {
    ImportDeclaration: function(node) {
      node.specifiers.forEach(function(specifier) {
        if(specifier.type == 'ImportDefaultSpecifier' &&
           specifier.local.type == 'Identifier' &&
           specifier.local.name == '_') {
          context.report(node, 'Import inidividual functions instead of full FP libraries');
        }
      });
    }
  };
};

module.exports.schema = [];
