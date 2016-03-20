/**
 * @fileoverview Disallows importing entire FP libraries
 * @author Bjorn Tegelund
 * @copyright 2016 Bjorn Tegelund. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-full-fp-lib"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-full-fp-lib", rule, {

    valid: ["import $ from 'jquery';", "import { filter } from 'lodash/fp'"
    ],

    invalid: [
        {
            code: "import _ from 'lodash';",
            errors: [{
              message: 'Prefer importing single functions over a full FP library',
              type: 'ImportDeclaration'
            }]
        }
    ]
});
