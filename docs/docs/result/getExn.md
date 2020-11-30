---
id: getExn
title: getExn
---

It returns a value if a `result` argument is in the form of `Ok`, otherwise, throws an exception.

```ts
getExn<A, B>(option: Result<A, B>): A | never
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    R.fromNullable('this is bad', 'hello world!'),
    R.getExn,
  )

  return value
}
```
