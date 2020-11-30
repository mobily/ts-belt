---
id: getWithDefault
title: getWithDefault
---

It returns a value if an `option` argument is in the form of `Some`, otherwise, returns a default value.

```ts
getWithDefault<T>(defaultValue: T, option: Option<T>): T
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any value other than `null` or `undefined` below
    O.fromNullable(null),
    O.getWithDefault('hello world!'),
  )

  return value
}
```
