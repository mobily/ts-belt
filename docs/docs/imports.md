---
id: imports
title: How to use imports?
---

There are two ways to import `ts-belt` functions into your project.

### Compact

```typescript
import { F, A, R, G, O, S, D, B, N, pipe } from '@mobily/ts-belt'
```

| Module | Namespace | Description |
|--|-----------|--|
| [Array](/api/array) | A | Utility functions for `Array`. |
| [Boolean](/api/boolean) | B | Utility functions for `Boolean`. |
| [Function](/api/function) | F | Utility functions that don't fit to other modules. |
| [Guards](/api/guards) | G | Various TypeScript guards. |
| [Number](/api/number) | N | Utility functions for `Number`. |
| [Object (Dict)](/api/object) | D | Utility functions for `Object`. |
| [Option](/api/option) | O | Functions for handling the `Option` type that represents the existence and nonexistence of a value. |
| [Result](/api/result) | R | Describe the result of a certain operation without relying on exceptions. |
| [String](/api/string) | S | Utility functions for `String`. |

The full API reference can be found [here](/api/array).

### Explicit #1

```typescript
import * as Belt from '@mobily/ts-belt'

Belt.pipe(
  [1, 2, 3, 4, 5],
  Belt.A.dropExactly(2),
  Belt.O.flatMap(Belt.A.head),
  Belt.O.map(value => value * 10),
  Belt.O.getWithDefault(0),
)
```

### Explicit #2

```typescript
import { pipe } from '@mobily/ts-belt'

import * as Option from '@mobily/ts-belt/Option'
import * as Array from '@mobily/ts-belt/Array'

pipe(
  [1, 2, 3, 4, 5],
  Array.dropExactly(2),
  Option.flatMap(Array.head),
  Option.map(value => value * 10),
  Option.getWithDefault(0),
)
```

To enable this method you have to install `babel-plugin-ts-belt`:

```bash
yarn add babel-plugin-ts-belt --dev
# or
npm install babel-plugin-ts-belt --dev
```

Then, add `ts-belt` in your `Babel` config file:

```json
{
  "plugins": [
    ["ts-belt", {
      "useESM": true, // or false if you use `commonjs`
    }]
  ]
}
```

Last, but not least, update your `TypeScript` config:

```json
"paths": {
  "@mobily/ts-belt/*": ["./node_modules/@mobily/ts-belt/dist/esm/*"] // or `cjs/*` if you use `commonjs`
}
```
