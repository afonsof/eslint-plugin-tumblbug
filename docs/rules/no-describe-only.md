# Do not commit describe.only (no-describe-only)

Do not forget to remove describe.only before you commit your code.

## Rule Details

This rule aims to...

The following patterns are considered warnings:

```js

describe.only('tests', () => {
  ...
});

```

The following patterns are not warnings:

```js

describe('tests', () => {
  ...
});

```
