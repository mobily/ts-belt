---
id: mapWithDefault
title: mapWithDefault
---

It returns a result of `fn` if an `option` argument is in the form of `Some`, otherwise returns `defaultValue` wrapped in `Some`.

```ts
mapWithDefault<T, R>(defaultValue: R, fn: (value: T) => R, option: Option<T>): Option<R>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    O.fromNullable(10),
    O.mapWithDefault(0, value => value ** 2),
    O.getExn,
  )

  return value
}
```
