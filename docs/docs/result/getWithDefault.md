---
id: getWithDefault
title: getWithDefault
---

It returns a value if a `result` argument is in the form of `Ok`, otherwise, returns a default value.

```ts
getWithDefault<A, B>(defaultValue: A, result: Result<A, B>): A
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass any value other than `null` or `undefined` below
    R.fromNullable('this is bad', null),
    R.getWithDefault('hello world!'),
  )

  return value
}
```
