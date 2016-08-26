# Do not commit [describe|context|it].only (no-spec-only)

Do not forget to remove `.only` before you commit your code.

## Rule Details

This rule aims to...

The following patterns are considered errors:

```js

describe.only('tests', () => {
  ...
});

context.only('tests', () => {
  ...
});

it.only('floats', () => {
  ...
});
```

The following patterns are not warnings:

```js

describe('tests', () => {
  ...
});

```
