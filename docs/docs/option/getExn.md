---
id: getExn
title: getExn
---

It returns a value if an `option` argument is in the form of `Some`, otherwise, throws an exception.

```ts
getExn<T>(option: Option<T>): T | never
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    O.fromNullable('hello world!'),
    O.getExn,
  )

  return value
}
```
