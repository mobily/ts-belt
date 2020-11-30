---
id: fromNullable
title: fromNullable
---

It returns `None` if a value is either `null` or `undefined`, otherwise, returns that value wrapped in `Some`.

```ts
fromNullable<T>(value: T | null | undefined): Option<T>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    O.fromNullable('hello'),
    O.map(value => `${value} world!`),
    O.getWithDefault('default value'),
  )

  return value
}
```
