---
id: toResult
title: toResult
---

It returns `Ok` if an `option` argument is in the form of `Some`, otherwise, returns `Error`.

```ts
toResult<A, B>(error: B, option: Option<A>): Result<A, B>
```

### Example

```jsx live
function() {
  const identity = value => value
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    O.fromNullable('hello'),
    O.toResult('this is bad'),
    R.match(value => `${value} world!`, identity),
  )

  return value
}
```
