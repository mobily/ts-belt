---
id: isNone
title: isNone
---

It returns `true` if an `option` argument is in the form of `None`, otherwise, returns `false`.

```ts
isSome<T>(option: Option<T>): boolean
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any value other than `null` or `undefined` below
    O.fromNullable(null),
    O.isNone,
  )

  return value.toString()
}
```
