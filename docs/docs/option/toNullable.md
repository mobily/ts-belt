---
id: toNullable
title: toNullable
---

It returns a value if an `option` argument is in the form of `Some`, otherwise, returns `null`.

```ts
toNullable<T>(option: Option<T>): T | null
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any truthy value below
    O.fromFalsy(0),
    O.toNullable,
  )

  return `${value}`
}
```
