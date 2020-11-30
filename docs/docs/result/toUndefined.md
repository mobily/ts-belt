---
id: toUndefined
title: toUndefined
---

It returns a value if a `result` argument is in the form of `Ok`, otherwise, returns `undefined`.

```ts
toUndefined<A, B>(option: Result<A, B>): A | null
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any truthy value below
    R.fromFalsy('this is bad', 0),
    R.toUndefined,
  )

  return `${value}`
}
```
