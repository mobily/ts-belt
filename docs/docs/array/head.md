---
id: head
title: head
---

It returns `None` if an array is empty or the first value is either `undefined` or `null`, otherwise, returns the first element wrapped in `Some`.


```ts
head<T>(arr: T[]): Option<T>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ remove the first element in the array below
    A.head(['hello']),
    O.map(value => {
      return `${value} world!`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
