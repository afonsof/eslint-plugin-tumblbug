# Full FP libs should not be imported (no-full-fp-lib)

To be able to do tree-shaking, full FP libs should not be imported.

## Rule Details

This rule aims to...

The following patterns are considered warnings:

```js

var _ = require('lodash');

import _ from 'lodash';

```

The following patterns are not warnings:

```js

var map = require('lodash/fp/map');

import map from 'lodash/map';

```

## Further Reading

https://lodash.com/
