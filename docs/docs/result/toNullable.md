---
id: toNullable
title: toNullable
---

It returns a value if a `result` argument is in the form of `Ok`, otherwise, returns `null`.

```ts
toNullable<A, B>(option: Result<A, B>): A | null
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any truthy value below
    R.fromFalsy('this is bad', 0),
    R.toNullable,
  )

  return `${value}`
}
```
