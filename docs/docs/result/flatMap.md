---
id: flatMap
title: flatMap
---

It returns a result of `fn` (it must have a return type of `Result`) if a `result` argument is in the form of `Ok`, otherwise, returns `result` unchanged.

```ts
flatMap<A, B, R>(fn: (value: A) => Result<R, B>, result: Result<A, B>): Result<R, B>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass either a higher value than 0 or null, undefined
    R.fromNullable('this is bad', 0),
    R.flatMap(value => {
      return value !== 0 ? R.Ok(100 / value) : R.Error('divide by zero')
    }),
    R.match(value => `100 / x = ${value}`, err => err),
  )

  return value
}
```
