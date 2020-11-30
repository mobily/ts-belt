---
id: map
title: map
---

It returns a result of `fn` if a `result` argument is in the form of `Ok`, otherwise, returns `Error` and `fn` is not called.

```ts
map<A, B, R>(fn: (value: A) => R, result: Result<A, B>): Result<R, B>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    R.fromNullable('this is bad', 'hello'),
    R.map(value => {
      return `${value} world!`
    }),
    R.getWithDefault('default value'),
  )

  return value
}
```
