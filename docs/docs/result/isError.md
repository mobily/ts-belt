---
id: isError
title: isError
---

It returns `true` if a `result` argument is in the form of `Error`, otherwise, returns `false`.

```ts
isError<A, B>(result: Result<A, B>): boolean
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any value other than `null` or `undefined` below
    R.fromNullable('this is bad', null),
    R.isError,
  )

  return value.toString()
}
```
