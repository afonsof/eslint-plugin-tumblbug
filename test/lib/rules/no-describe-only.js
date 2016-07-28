/**
 * @fileoverview describe.only should be removed before commits
 * @author Bjorn Tegelund
 * @copyright 2016 Bjorn Tegelund. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-describe-only'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parser: 'babel-eslint',
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-describe-only', rule, {
  valid: [
    'describe(\'bob\', () => { })',
  ],

  invalid: [
    {
      code: 'describe.only(\'bob\', () => { })',
      errors: [{
        message: 'Do not use describe.only',
        type: ''
      }]
    }
  ]
});
