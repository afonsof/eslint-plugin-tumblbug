/**
 * @fileoverview Custom eslint rules by Tumblbug, Inc.
 * @author Bjorn Tegelund
 * @copyright 2016 Bjorn Tegelund. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  'no-full-fp-lib': require('./rules/no-full-fp-lib'),
  'no-spec-only': require('./rules/no-spec-only'),
};

module.exports.configs = {
  recommended: {
    rules: {
      'tumblbug/no-full-fp-lib': 2,
      'tumblbug/no-spec-only': 2,
    },
  },
};
