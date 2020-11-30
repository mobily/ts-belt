---
id: usage
title: Usage
---

## Imports

There are many ways to import `ts-belt` functions into your project:

#### Compact:

```typescript
import { O, R, A, pipe } from '@mobily/ts-belt'
```

| O      | R      | A     |
|--------|--------|-------|
| Option | Result | Array |

#### Explicit:

```typescript
import { pipe } from '@mobily/ts-belt'
import * as Option from '@mobily/ts-belt/Option'
// or
import { fromNullable } from '@mobily/ts-belt/Option'
```

## Currying

Each `ts-belt` function is [curried](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983).

```jsx live
function() {
  const fromEven = O.fromPredicate(value => value % 2 === 0)
  const mapWithDefaultZero = O.mapWithDefault(0)

  const value = pipe(
    fromEven(2),
    mapWithDefaultZero(value => value ** 2),
    O.getExn,
  )

  return value
}
```
