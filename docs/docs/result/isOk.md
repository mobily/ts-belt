---
id: isOk
title: isOk
---

It returns `true` if a `result` argument is in the form of `Ok`, otherwise, returns `false`.

```ts
isOk<A, B>(result: Result<A, B>): boolean
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    R.fromNullable('this is bad', 'hello'),
    R.isOk,
  )

  return value.toString()
}
```
