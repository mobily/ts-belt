---
id: isSome
title: isSome
---

It returns `true` if an `option` argument is in the form of `Some`, otherwise, returns `false`.

```ts
isSome<T>(option: Option<T>): boolean
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    O.fromNullable('hello'),
    O.isSome,
  )

  return value.toString()
}
```
