---
id: usage
title: Usage
---

There are two ways to import `ts-belt` functions into your project.

### Compact

| Module | Namespace | Description |
|--|-----------|--|
| [Array](/api/array) | A | Utility functions for `Array`. |
| [Boolean](/api/boolean) | B | Utility functions for `Boolean`. |
| [Number](/api/number) | N | Utility functions for `Number`. |
| [Object (Dict)](/api/object) | D | Utility functions for `Object`. |
| [String](/api/string) | S | Utility functions for `String`. |
| [Guards](/api/guards) | G | Various TypeScript guards. |
| [Option](/api/option) | O | Functions for handling the `Option` type that represents the existence and nonexistence of a value. |
| [Result](/api/result) | R | Functions for describing the result of a certain operation without relying on exceptions. |
| [Function](/api/function) | F | Other useful functions. |

The full API reference can be found [here](/api/array).

```typescript
import { A, O, N, pipe } from '@mobily/ts-belt'

pipe(
  [1, 2, 3, 4, 5], // → [1, 2, 3, 4, 5]
  A.dropExactly(2), // → Some([3, 4, 5])
  O.flatMap(A.head), // → Some(3)
  O.map(N.multiply(10)), // → Some(30)
  O.getWithDefault(0), // → 30
) // → 30
```

### Explicit

```typescript
import * as Belt from '@mobily/ts-belt'

Belt.pipe(
  [1, 2, 3, 4, 5],
  Belt.A.dropExactly(2),
  Belt.O.flatMap(Belt.A.head),
  Belt.O.map(Belt.N.multiply(10)),
  Belt.O.getWithDefault(0),
)
```
