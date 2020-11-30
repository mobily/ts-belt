---
id: get
title: get
---

It returns `None` if `index` is larger than an array length, otherwise, returns the nth element wrapped in `Some`.

```ts
get<T>(index: number, arr: T[]): Option<T>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ update the 2nd element in the array below
    A.get(1, [1, 3, 5]),
    O.map(value => {
      return value ** 2
    }),
    O.getWithDefault(0),
  )

  return value
}
```
