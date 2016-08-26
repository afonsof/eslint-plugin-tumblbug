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

var rule = require('../../../lib/rules/no-spec-only'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parser: 'babel-eslint',
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-spec-only', rule, {
  valid: [
    'describe(\'bob\', () => { })',
    'context(\'frank\', () => { })',
    'it(\'floats\', () => { })',
  ],

  invalid: [
    {
      code: 'describe.only(\'bob\', () => { })',
      errors: [{
        message: 'Do not use describe.only',
        type: ''
      }]
    },
    {
      code: 'context.only(\'richard\', () => { })',
      errors: [{
        message: 'Do not use context.only',
        type: ''
      }]
    },
    {
      code: 'it.only(\'flies\', () => { })',
      errors: [{
        message: 'Do not use it.only',
        type: ''
      }]
    },
  ]
});
