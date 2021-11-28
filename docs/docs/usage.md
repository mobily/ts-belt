---
id: usage
title: Usage
---

## Imports

There are many ways to import `ts-belt` functions into your project:

#### Compact:

```typescript
import { F, A, R, G, O, S, D, pipe } from '@mobily/ts-belt'
```

| F        | A     | R      | G      | O      | S      | D             |
|----------|-------|--------|--------|--------|--------|---------------|
| Function | Array | Result | Guards | Option | String | Object (Dict) |

#### Explicit:

```typescript
import { pipe } from '@mobily/ts-belt'
import * as Option from '@mobily/ts-belt/Option'
```
