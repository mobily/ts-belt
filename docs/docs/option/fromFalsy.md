---
id: fromFalsy
title: fromFalsy
---

It returns `None` if a value is falsy, otherwise, returns that value wrapped in `Some`.

```ts
fromFalsy<T>(value: T): Option<T>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass a falsy value below (for instance 0, null, undefined)
    O.fromFalsy(10),
    O.map(value => value ** 2),
    O.getWithDefault(-1),
  )

  return value
}
```
