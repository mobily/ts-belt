---
id: imports
title: Imports
---

There are two ways to import `ts-belt` functions into your project.

### Compact

```typescript
import { F, A, R, G, O, S, D, B, N, pipe } from '@mobily/ts-belt'
```

| Module | Namespace | Description |
|--|-----------|--|
| Function | F | Utility functions that don't fit to other modules. |
| Array | A | Utility functions for `Array`. |
| Result | R | Describe the result of a certain operation without relying on exceptions. |
| Guards | G | Various TypeScript guards. |
| Option | O | Functions for handling the `Option` type that represents the existence and nonexistence of a value. |
| String | S | Utility functions for `String`. |
| Object (Dict) | D | Utility functions for `Object`. |
| Boolean | B | Utility functions for `Boolean`. |
| Number | N | Utility functions for `Number`. |

### Explicit

```typescript
import { pipe } from '@mobily/ts-belt'
import * as Option from '@mobily/ts-belt/Option'
```
