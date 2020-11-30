---
id: mapWithDefault
title: mapWithDefault
---

It returns a result of `fn` if `result` argument is in the form of `Ok`, otherwise returns `defaultValue` wrapped in `Ok`.

```ts
mapWithDefault<A, B, R>(defaultValue: R, fn: (value: A) => R, result: Result<A, B>): Result<R, B>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    R.fromNullable('this is bad', 10),
    R.mapWithDefault(0, value => value ** 2),
    R.getExn,
  )

  return value
}
```
