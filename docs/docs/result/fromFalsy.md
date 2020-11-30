---
id: fromFalsy
title: fromFalsy
---

It returns `Error` if a value is falsy, otherwise, returns that value wrapped in `Ok`.

```ts
fromFalsy<A, B>(error: B, value: A): Result<A, B>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass a falsy value below (for instance 0, null, undefined)
    R.fromFalsy('this is bad', 10),
    R.map(value => value ** 2),
    R.match(value => `x ** 2 = ${value}`, err => err),
  )

  return value
}
```
