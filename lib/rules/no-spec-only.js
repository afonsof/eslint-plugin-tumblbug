/**
 * @fileoverview [describe|context|it].only should not be used
 * @author Bjorn Tegelund
 * @copyright 2016 Bjorn Tegelund. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const keyWords = ['describe', 'context', 'it'];

module.exports = function(context) {
  return {
    MemberExpression: function(node) {
      if(node.object &&
         node.object.name &&
         keyWords.indexOf(node.object.name) !== -1 &&
         node.property &&
         node.property.name === 'only') {
        const keyWord = keyWords[keyWords.indexOf(node.object.name)];
        context.report(node, `Do not use ${keyWord}.only`);
      }
    }
  };
};

module.exports.schema = [];
