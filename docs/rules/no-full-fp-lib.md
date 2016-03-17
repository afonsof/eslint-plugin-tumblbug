# Full FP libs should not be imported (no-full-fp-lib)

To enable us to do tree-sharking, full FP libs should not be imported.

## Rule Details

This rule aims to...

The following patterns are considered warnings:

```js

import _ from 'lodash';

```

The following patterns are not warnings:

```js

import { map } from 'lodash/fp';

```

## Further Reading

Need to add some links here.
