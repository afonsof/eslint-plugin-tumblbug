/**
 * @fileoverview Describe.only should not be used
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
    MemberExpression: function(node) {
      if(node.object &&
         node.object.name === 'describe' &&
         node.property &&
         node.property.name === 'only') {
        context.report(node, 'Do not use describe.only');
      }
    }
  };
};

module.exports.schema = [];
