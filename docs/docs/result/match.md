---
id: match
title: match
---

It returns a result of `okFn` if a `result` argument is in the form of `Ok`, otherwise, returns a result of `errorFn`.

```ts
match<A, B, R>(okFn: (value: A) => R, errorFn: (error: B) => R, result: Result<A, B>): R
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    R.fromNullable('this is bad', 'hello'),
    R.match(value => `${value} world!`, err => `${err} :(`),
  )

  return value
}
```
