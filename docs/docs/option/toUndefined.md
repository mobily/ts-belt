---
id: toUndefined
title: toUndefined
---

It returns a value if an `option` argument is in the form of `Some`, otherwise, returns `undefined`.

```ts
toUndefined<T>(option: Option<T>): T | undefined
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any truthy value below
    O.fromFalsy(0),
    O.toUndefined,
  )

  return `${value}`
}
```
